"use client"
import { useState } from "react";

export default function CompanySignup() {
  const [form, setForm] = useState({ companyName: "", companyEmail: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    // Mock API request
    setTimeout(() => {
      setLoading(false);
      setMessage("Signup successful!");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-black text-2xl font-bold text-center mb-4">Company Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Company Email</label>
            <input
              type="email"
              name="companyEmail"
              value={form.companyEmail}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-black text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-black text-white"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-blue-300"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          {message && <p className="mt-2 text-green-600 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
}
