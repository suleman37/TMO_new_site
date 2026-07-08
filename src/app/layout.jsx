import "./globals.css";
import { BlogProvider } from "@/context/Context";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Team Freelance",
  icons: {
    icon: "/vite.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div>
          <BlogProvider>
            <ScrollToTop />
            {children}
          </BlogProvider>
        </div>
      </body>
    </html>
  );
}
