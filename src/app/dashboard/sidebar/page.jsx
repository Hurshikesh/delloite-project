// app/dashboard/sidebar.js
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link href="/dashboard/orders" className="block p-3 bg-gray-800 rounded hover:bg-gray-700">Orders</Link></li>
          <li><Link href="/dashboard/inbox" className="block p-3 bg-gray-800 rounded hover:bg-gray-700">Inbox</Link></li>
          <li><Link href="/dashboard/review" className="block p-3 bg-gray-800 rounded hover:bg-gray-700">Review</Link></li>
          <li><Link href="/dashboard/history" className="block p-3 bg-gray-800 rounded hover:bg-gray-700">History</Link></li>
        </ul>
      </nav>
    </div>
  );
}
