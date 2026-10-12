import { SignupView } from "@/components/auth/signup-view";
import {
  getRequestCountryCode,
  isSocialOAuthAllowedForCountry,
} from "@/lib/geo";
import { getRequestInterfaceLanguage } from "@/lib/request-language";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; lang?: string }>;
}) {
  const sp = await searchParams;
  const [country, language] = await Promise.all([
    getRequestCountryCode(),
    getRequestInterfaceLanguage(sp.lang),
  ]);
  const allowSocialOAuth = isSocialOAuthAllowedForCountry(country);

  return (
    <SignupView
      language={language}
      error={sp.error}
      allowSocialOAuth={allowSocialOAuth}
    />
  );
}
