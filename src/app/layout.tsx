import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CustomThemeProvider } from "@/registry";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { ErrorBoundary, SimpleErrorFallback } from "@/components/ErrorBoundary";
import { IntlRegistry } from "@/registry/Intl";
import { DatePickerProvider } from "@/registry/DatePicker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard application",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ErrorBoundary fallback={<SimpleErrorFallback />}>
          <LocaleProvider>
            <DatePickerProvider>
              <AppRouterCacheProvider>
                <CustomThemeProvider>
                  <IntlRegistry>
                    <ErrorBoundary>{children}</ErrorBoundary>
                  </IntlRegistry>
                </CustomThemeProvider>
              </AppRouterCacheProvider>
            </DatePickerProvider>
          </LocaleProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
