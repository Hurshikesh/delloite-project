export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" h-screen bg-gray-900 text-white">
        <div className="flex-1 p-6">{children}</div>
      </body>
    </html>
  );
}
