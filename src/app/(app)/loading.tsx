import { Skeleton } from "@/components/ui/skeleton";

/**
 * Shown during soft navigations inside the app shell so tab switches
 * don't look "frozen" while the next page's RSC + auth finish.
 */
export default function AppLoading() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-4 md:p-8 animate-fade-in">
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72 max-w-full" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-28 rounded-xl" />
        <Skeleton className="h-28 rounded-xl" />
        <Skeleton className="h-28 rounded-xl hidden sm:block" />
      </div>
      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  );
}
