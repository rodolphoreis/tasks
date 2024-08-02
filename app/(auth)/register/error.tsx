"use client";

import ErrorCard from "@/src/components/error/index";
import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorCard errorMessage={error.message} reset={reset} />;
}
