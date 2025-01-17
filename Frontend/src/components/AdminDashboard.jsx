import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "../services/api";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await fetchAllUsers();
      setUsers(data.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-gray-100 shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-300">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Social Media Handle</th>
            <th className="border px-4 py-2">Images</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.socialMediaHandle}</td>
              <td className="border px-4 py-2">
                {user.images.map((image, idx) => (
                  <a href={image} target="_blank" rel="noopener noreferrer" key={idx}>
                    <img src={image} alt="Uploaded" className="inline-block w-16 h-16 object-cover m-1" />
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
