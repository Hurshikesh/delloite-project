// app/dashboard/layout.js
import Sidebar from "./sidebar/page";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* <Sidebar /> */}
      <main className="flex-1 p-6 bg-gray-200 overflow-auto">
        {children}
      </main>
    </div>
  );
}
