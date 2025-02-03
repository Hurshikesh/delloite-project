// app/dashboard/history.js
import DashboardLayout from "../layout";

export default function History() {
  const orders = [
    { id: 41214, status: "Accepted", date: "2025-02-01 10:30 AM" },
    { id: 52225, status: "Rejected", date: "2025-02-02 02:15 PM" },
    { id: 63236, status: "Under Review", date: "2025-02-03 09:45 AM" },
    { id: 71217, status: "Accepted", date: "2025-02-04 11:00 AM" },
    { id: 84248, status: "Rejected", date: "2025-02-05 01:20 PM" },
    { id: 95259, status: "Under Review", date: "2025-02-06 04:10 PM" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-500 text-white";
      case "Rejected":
        return "bg-red-500 text-white";
      case "Under Review":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl text-black font-bold mb-4">Order History</h1>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Time & Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-3 text-black">{order.id}</td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className="p-3 text-black">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
