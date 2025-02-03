// app/dashboard/orders.js
import DashboardLayout from "../layout";

export default function Orders() {
  const orders = [
    { "id": 41214, "customer": "Emily Johnson", "status": "Accepted" },
{ "id": 51215, "customer": "Michael Brown", "status": "Accepted" },
{ "id": 61216, "customer": "Sophia Martinez", "status": "Accepted" },
{ "id": 71217, "customer": "William Anderson", "status": "Accepted" },
{ "id": 81218, "customer": "Olivia Thompson", "status": "Accepted" },
{ "id": 91219, "customer": "Daniel Wilson", "status": "Accepted" },
{ "id": 101220, "customer": "Ava Garcia", "status": "Accepted" },
{ "id": 111221, "customer": "Ethan Robinson", "status": "Accepted" },
{ "id": 121222, "customer": "Mia Clark", "status": "Accepted" },


  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl text-black font-bold mb-4">Orders</h1>
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
              <td className="p-3 text-black">{order.id}</td>
              <td className="p-3 text-black">{order.customer}</td>
              <td className="p-3 text-green-600">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
