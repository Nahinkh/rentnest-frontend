"use client";

import GlobalError from "@/components/common/GlobalError";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ reset }: ErrorPageProps) => {
  return (
    <GlobalError
      message="Something went wrong while loading this page."
      onRetry={reset}
    />
  );
};

export default ErrorPage;
