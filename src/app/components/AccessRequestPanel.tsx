import { useEffect, useRef, useState, type FormEvent, type RefObject } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { isAccessRequestEmail, isAccessRequestName, sendAccessRequest } from "../lib/access-request";

type AccessRequestPanelProps = {
  nameRef: RefObject<HTMLInputElement | null>;
  onBack: () => void;
};

const fieldClass =
  "h-12 min-w-0 rounded-full border-gray-200 bg-white px-5 text-base text-gray-900 placeholder:text-gray-400 hover:border-gray-300 focus-visible:border-[#E8699A] focus-visible:ring-0 aria-invalid:border-red-400 aria-invalid:ring-0 md:text-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/35 dark:hover:border-white/20 dark:focus-visible:border-[#E8699A]";

export function AccessRequestPanel({ nameRef, onBack }: AccessRequestPanelProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [honey, setHoney] = useState("");
  const [error, setError] = useState("");
  const [invalidField, setInvalidField] = useState<"name" | "company" | "email" | "">("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus({ preventScroll: true });
  }, [nameRef]);

  function markError(field: "name" | "company" | "email", message: string) {
    setInvalidField(field);
    setError(message);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setError("");
    setInvalidField("");

    if (honey) {
      setSent(true);
      return;
    }
    if (!isAccessRequestName(name)) {
      markError("name", "Please enter your name.");
      nameRef.current?.focus({ preventScroll: true });
      return;
    }
    if (!isAccessRequestName(company)) {
      markError("company", "Please enter your company.");
      companyRef.current?.focus({ preventScroll: true });
      return;
    }
    if (!isAccessRequestEmail(email)) {
      markError("email", "Please enter a valid email address.");
      emailRef.current?.focus({ preventScroll: true });
      return;
    }

    setSending(true);
    try {
      await sendAccessRequest({ name, company, email });
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
          These case studies are shared privately. Please share your name, company, and email address and I’ll follow up.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={submit} aria-busy={sending} className="grid gap-3">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="min-w-0">
            <Label htmlFor="rbc-access-name" className="sr-only">Name</Label>
            <Input
              ref={nameRef}
              id="rbc-access-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => { setName(event.target.value); if (error) { setError(""); setInvalidField(""); } }}
              required
              maxLength={80}
              readOnly={sending}
              aria-invalid={invalidField === "name"}
              aria-describedby={error ? "rbc-access-error" : undefined}
              placeholder="Name"
              className={fieldClass}
            />
          </div>
          <div className="min-w-0">
            <Label htmlFor="rbc-access-company" className="sr-only">Company</Label>
            <Input
              ref={companyRef}
              id="rbc-access-company"
              name="organisation"
              type="text"
              autoComplete="organization"
              value={company}
              onChange={(event) => { setCompany(event.target.value); if (error) { setError(""); setInvalidField(""); } }}
              required
              maxLength={80}
              readOnly={sending}
              aria-invalid={invalidField === "company"}
              aria-describedby={error ? "rbc-access-error" : undefined}
              placeholder="Company"
              className={fieldClass}
            />
          </div>
        </div>
        <Label htmlFor="rbc-access-email" className="sr-only">Email address</Label>
        <Input
          ref={emailRef}
          id="rbc-access-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(event) => { setEmail(event.target.value); if (error) { setError(""); setInvalidField(""); } }}
          required
          readOnly={sending}
          aria-invalid={invalidField === "email"}
          aria-describedby={error ? "rbc-access-error" : undefined}
          placeholder="Email address"
          className={fieldClass}
        />
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          hidden
          value={honey}
          onChange={(event) => setHoney(event.target.value)}
        />
        {error && (
          <p id="rbc-access-error" className="px-1 text-sm text-red-600 dark:text-red-400" role="alert">
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
