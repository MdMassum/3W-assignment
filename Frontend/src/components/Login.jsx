import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setIsAdminLoggedIn}) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null)
   
    try {
      const resp = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/login`,{
        username:formData.username,
        password:formData.password
      })
      console.log(resp)
      if(resp.data.success){
        setIsAdminLoggedIn(true)
        navigate('/dashboard')
        setLoading(false)
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message || error.message);
      setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 bg-gray-100 shadow-lg rounded">
        {error && <p className="text-rose-600 mx-2 text-center">{error}</p>}
      <h2 className="text-xl font-bold mb-4 text-center">Login Form</h2>
      <div className="mb-4">
        <label className="block font-bold">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold">Password</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {loading ? "Loading" : "Login"}
      </button>

      <div className="flex mt-4 text-lg gap-4">
        <p>Username : Admin</p>
        <span>|</span>
        <p>Password : 12345</p>
      </div>
    </form>
  );
};

export default LoginForm;
