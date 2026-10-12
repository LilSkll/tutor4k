import { AuthProviders } from "@/components/providers/auth-providers";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProviders>{children}</AuthProviders>;
}
