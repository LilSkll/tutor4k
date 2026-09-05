import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MfaChallengeForm } from "@/components/auth/mfa-challenge-form";

export default function MfaChallengePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12">
      <div className="mx-auto w-full max-w-sm">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад ко входу
        </Link>
        <div className="flex items-center gap-2 mb-6">
          <img
            src="/hippogriff-icon.webp"
            alt="Spanish with Pavel"
            className="h-10 w-10 rounded-lg"
          />
          <span className="font-bold text-xl gradient-text">
            Spanish with Pavel
          </span>
        </div>
        <MfaChallengeForm />
      </div>
    </div>
  );
}
