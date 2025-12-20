import * as React from "react";

import { Layout } from "@/domains/auth/Layout";
import { CircularProgress } from "@mui/material";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <Layout>{children}</Layout>
    </React.Suspense>
  );
}
