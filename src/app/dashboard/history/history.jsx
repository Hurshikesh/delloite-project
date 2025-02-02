// app/dashboard/history.js
import DashboardLayout from "./layout";

export default function History() {
  const allOrders = [
    { id: 1, customer: "Chris Evans", status: "Accepted" },
    { id: 2, customer: "Emma Watson", status: "Rejected" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className={`p-3 ${order.status === "Accepted" ? "text-green-600" : "text-red-600"}`}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
