import { useEffect, useState, type FormEvent, type RefObject } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { isAccessRequestEmail, sendAccessRequest } from "../lib/access-request";

type AccessRequestPanelProps = {
  emailRef: RefObject<HTMLInputElement | null>;
  onBack: () => void;
};

export function AccessRequestPanel({ emailRef, onBack }: AccessRequestPanelProps) {
  const [email, setEmail] = useState("");
  const [honey, setHoney] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    emailRef.current?.focus({ preventScroll: true });
  }, [emailRef]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setError("");

    if (honey) {
      setSent(true);
      return;
    }
    if (!isAccessRequestEmail(email)) {
      setError("Please enter a valid email address.");
      emailRef.current?.focus({ preventScroll: true });
      return;
    }

    setSending(true);
    try {
      await sendAccessRequest(email);
      setSent(true);
    } catch {
      setError("The request could not be submitted. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <>
        <DialogHeader className="gap-2 p-0 text-left">
          <DialogTitle className="flex items-center gap-2 text-lg leading-snug font-semibold text-gray-900 dark:text-white">
            <CheckCircle2 className="size-4 text-[#E8699A]" aria-hidden="true" />
            Request submitted
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 dark:text-white/55" role="status">
            Thank you. I’ll review your request and follow up.
          </DialogDescription>
        </DialogHeader>
        <Button
          type="button"
          onClick={onBack}
          className="h-12 w-full rounded-full bg-gradient-to-r from-[#E8699A] to-[#C2547C] text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
        >
          Return to password
        </Button>
      </>
    );
  }

  return (
    <>
      <DialogHeader className="gap-2 p-0 text-left">
        <DialogTitle className="flex items-center gap-2 text-lg leading-snug font-semibold text-gray-900 dark:text-white">
          <Mail className="size-4 text-[#E8699A]" aria-hidden="true" />
          Request access
        </DialogTitle>
        <DialogDescription className="text-sm text-gray-500 dark:text-white/55">
          These case studies are shared privately. Enter your email address and I’ll follow up if access is granted.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={submit} aria-busy={sending} className="grid gap-3">
        <Label htmlFor="rbc-access-email" className="sr-only">Email address</Label>
        <Input
          ref={emailRef}
          id="rbc-access-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(event) => { setEmail(event.target.value); if (error) setError(""); }}
          required
          readOnly={sending}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "rbc-access-email-error" : undefined}
          placeholder="Email address"
          className="h-12 rounded-full border-gray-200 bg-white px-5 text-base text-gray-900 placeholder:text-gray-400 hover:border-gray-300 focus-visible:border-[#E8699A] focus-visible:ring-0 aria-invalid:border-red-400 aria-invalid:ring-0 md:text-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/35 dark:hover:border-white/20 dark:focus-visible:border-[#E8699A]"
        />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          hidden
          value={honey}
          onChange={(event) => setHoney(event.target.value)}
        />
        {error && (
          <p id="rbc-access-email-error" className="px-1 text-sm text-red-600 dark:text-red-400" role="alert">
            {error}
          </p>
        )}
        <Button
          type="submit"
          disabled={sending}
          className="h-12 w-full rounded-full bg-gradient-to-r from-[#E8699A] to-[#C2547C] text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
        >
          {sending ? "Submitting…" : "Submit request"}
        </Button>
        <span className="sr-only" role="status">{sending ? "Submitting your request. Please wait." : ""}</span>
      </form>
      <p className="text-center text-sm text-gray-500 dark:text-white/55">
        Already have a password?{" "}
        <button
          type="button"
          onClick={onBack}
          className="cursor-pointer font-semibold text-gray-900 underline decoration-[#E8699A]/50 underline-offset-4 transition-colors hover:text-[#E8699A] dark:text-white"
        >
          Enter password
        </button>
      </p>
    </>
  );
}
