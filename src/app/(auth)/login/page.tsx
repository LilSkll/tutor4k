import { LoginView } from "@/components/auth/login-view";
import {
  getRequestCountryCode,
  isSocialOAuthAllowedForCountry,
} from "@/lib/geo";
import { getRequestInterfaceLanguage } from "@/lib/request-language";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; notice?: string; redirect?: string }>;
}) {
  const sp = await searchParams;
  const [country, language] = await Promise.all([
    getRequestCountryCode(),
    getRequestInterfaceLanguage(),
  ]);
  const allowSocialOAuth = isSocialOAuthAllowedForCountry(country);

  return (
    <LoginView
      language={language}
      error={sp.error}
      notice={sp.notice}
      redirect={sp.redirect}
      allowSocialOAuth={allowSocialOAuth}
    />
  );
}
