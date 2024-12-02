import { SidebarProvider } from "@/components/ui/sidebar";
import localFont from "next/font/local";
import "./globals.css";
import { AppSidebar } from "./_components/AppSidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: `%s | Puresoft Assignment`,
    default: `Puresoft Assignment`,
  },
  description: "Welcome to the website. you can see my work skills in action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !bg-gray-200/50`}
      >
        <SidebarProvider
          className=""
          style={
            {
              "--sidebar-width": "15rem",
              "--sidebar-width-mobile": "12rem",
            } as React.CSSProperties
          }
        >
          <AppSidebar></AppSidebar>
          <main className="w-full px-5 !bg-gray-200/50 !h-full ">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
