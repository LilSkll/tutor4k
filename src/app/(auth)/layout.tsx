import { AuthProviders } from "@/components/providers/auth-providers";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProviders>{children}</AuthProviders>;
}
