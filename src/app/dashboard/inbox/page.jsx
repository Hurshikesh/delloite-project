// app/dashboard/inbox.js
import DashboardLayout from "./layout";

export default function Inbox() {
  const emails = [
    { id: 1, subject: "Order Confirmation", sender: "customer1@example.com" },
    { id: 2, subject: "Invoice", sender: "customer2@example.com" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <div className="bg-white p-4 shadow-md rounded">
        {emails.map((email) => (
          <div key={email.id} className="p-3 border-b">
            <p className="text-lg font-semibold">{email.subject}</p>
            <p className="text-gray-500">{email.sender}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
