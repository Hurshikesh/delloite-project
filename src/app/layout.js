import "./globals.css";
import Sidebar from "./dashboard/sidebar/page";

export const metadata = {
  title: "Dashboard",
  description: "A dark-themed dashboard for managing orders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 p-6">{children}</div>
      </body>
    </html>
  );
}
