import type { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/hippogriff-icon.webp"
        type="image/webp"
      />
      {children}
    </>
  );
}
