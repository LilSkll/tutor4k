import { LoginView } from "@/components/auth/login-view";
import {
  getRequestCountryCode,
  isSocialOAuthAllowedForCountry,
} from "@/lib/geo";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; notice?: string; redirect?: string }>;
}) {
  const sp = await searchParams;
  const country = await getRequestCountryCode();
  const allowSocialOAuth = isSocialOAuthAllowedForCountry(country);

  return (
    <LoginView
      error={sp.error}
      notice={sp.notice}
      redirect={sp.redirect}
      allowSocialOAuth={allowSocialOAuth}
    />
  );
}
