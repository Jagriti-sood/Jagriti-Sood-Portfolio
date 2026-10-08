export type CaseStudyFigure = {
  asset: string;
  alt: string;
  caption?: string;
  format?: "desktop" | "mobile";
  label?: string;
};

export type ProtectedCaseStudy = {
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  meta: { label: string; value: string }[];
  cover?: CaseStudyFigure;
  sections: {
    id: string;
    label: string;
    title: string;
    paragraphs: string[];
    points?: { title: string; body?: string }[];
    quote?: string;
    figures?: CaseStudyFigure[];
    decisions?: { observation: string; response: string }[];
    /** Column headings for `decisions`; defaults to research → design response. */
    decisionLabels?: [string, string];
    links?: { label: string; href: string }[];
  }[];
  assets: Record<string, { mime: string; data: string }>;
};

export type EncryptedCaseStudy = {
  version: 1;
  projectId: string;
  salt: string;
  iv: string;
  ciphertext: string;
};

export function fromBase64(value: string): Uint8Array<ArrayBuffer>;
export function encryptCaseStudy(study: ProtectedCaseStudy, password: string, projectId: string): Promise<EncryptedCaseStudy>;
export function decryptCaseStudy(envelope: unknown, password: string, projectId: string): Promise<ProtectedCaseStudy>;
