/* eslint-disable prettier/prettier */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
        variable: "--font-geist-sans",
        subsets: ["latin"],
});

const geistMono = Geist_Mono({
        variable: "--font-geist-mono",
        subsets: ["latin"],
});

export const metadata: Metadata = {
        title: "Edura",
        description: "Application Managerment System for Education Center",
};

export default async function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <html lang="en" suppressHydrationWarning>
                        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex `}>
                                <ThemeProvider
                                        attribute="class"
                                        defaultTheme="system"
                                        enableSystem
                                        disableTransitionOnChange   >

                                        <main className="w-full">
                                                <div>{children}</div>
                                        </main>
                                </ThemeProvider>
                        </body>
                </html>
        );
}