// app/dashboard/review.js
import DashboardLayout from "./layout";

export default function Review() {
  const rejectedOrders = [
    { id: 1, customer: "Alice Brown", reason: "Payment Issue" },
    { id: 2, customer: "Mark Lee", reason: "Invalid Address" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Review</h1>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Reason</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {rejectedOrders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3 text-red-600">{order.reason}</td>
              <td className="p-3">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
