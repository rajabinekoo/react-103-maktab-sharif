"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error.message);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <h3>{error.message}</h3>
      <Link href="/contact/faqs">
        <button>Back</button>
      </Link>
    </div>
  );
}
