// app/dashboard/orders.js
import DashboardLayout from "../layout";

export default function Orders() {
  const orders = [
    { id: 1, customer: "John Doe", status: "Accepted" },
    { id: 2, customer: "Jane Smith", status: "Accepted" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3 text-green-600">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
