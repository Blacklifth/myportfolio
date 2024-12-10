import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

//FONT TYPE

const raleway = localFont({
    src: "../app/fonts/Raleway.woff2",
    variable: "--font-raleway",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Marcelo Loyola | Computer Engineer ",
    description: "Portfolio website Marcelo Loyola",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${raleway.variable} antialiased`}>
                <Header></Header>
                {children}
            </body>
        </html>
    );
}
