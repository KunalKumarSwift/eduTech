import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider"; // Make sure this is imported

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Portal",
  description: "A modern student portal for managing academic life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-16 p-8 max-w-6xl mx-auto shadow-md">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
