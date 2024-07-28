import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/styles/globals.css";
import NavBar from "@/src/components/navBar";
import ClientSessionProvider from "@/src/components/ClientSessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasks",

  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <ClientSessionProvider session={session}>
          <NavBar />
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}
