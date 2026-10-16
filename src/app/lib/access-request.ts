export const ACCESS_REQUEST_INBOX = "jagritisood30@gmail.com";
export const ACCESS_STUDIES_URL = "https://jagritisood.com/work/rbc";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isAccessRequestEmail(value: string) {
  const email = value.trim();
  return email.length <= 254 && EMAIL_PATTERN.test(email);
}

export async function sendAccessRequest(email: string) {
  const requestor = email.trim();
  const approveBody = [
    "Hi,",
    "",
    "Your request to view my RBC case studies is approved.",
    "",
    "Open this page and enter the password:",
    ACCESS_STUDIES_URL,
    "",
    "Password: ",
    "",
    "Jagriti",
  ].join("\n");
  const approveInGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(requestor)}&su=${encodeURIComponent("Your request to view my RBC case studies is approved")}&body=${encodeURIComponent(approveBody)}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(ACCESS_REQUEST_INBOX)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          email: requestor,
          _replyto: requestor,
          _subject: `RBC case study access request from ${requestor}`,
          _template: "table",
          _captcha: "false",
          Requestor: requestor,
          Page: ACCESS_STUDIES_URL,
          How_to_approve: "Reply to this email, or open Approve_in_Gmail, add the password, and send.",
          Approve_in_Gmail: approveInGmail,
          message: `${requestor} requested access to the RBC case studies on jagritisood.com.`,
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Couldn’t send the request. Please try again.");
    }

    const result = (await response.json().catch(() => null)) as {
      success?: boolean | string;
      message?: string;
    } | null;
    const accepted = result?.success === true || result?.success === "true";
    const activating = typeof result?.message === "string" && /activat/i.test(result.message);
    if (!accepted && !activating) {
      throw new Error("Couldn’t send the request. Please try again.");
    }
  } catch (cause) {
    if (cause instanceof Error && cause.message.startsWith("Couldn’t send")) throw cause;
    throw new Error("Couldn’t send the request. Please try again.");
  } finally {
    clearTimeout(timeout);
  }
}
