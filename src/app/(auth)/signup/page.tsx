import { SignupView } from "@/components/auth/signup-view";
import {
  getRequestCountryCode,
  isSocialOAuthAllowedForCountry,
} from "@/lib/geo";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const sp = await searchParams;
  const country = await getRequestCountryCode();
  const allowSocialOAuth = isSocialOAuthAllowedForCountry(country);

  return (
    <SignupView error={sp.error} allowSocialOAuth={allowSocialOAuth} />
  );
}
