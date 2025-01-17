import React, { useState } from "react";
import { submitUserData } from "../services/api";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", socialMediaHandle: "" });
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("socialMediaHandle", formData.socialMediaHandle);
    for (let image of images) {
      data.append("images", image);
    }
    try {
      setloading(true)
      await submitUserData(data);
      setMessage("User submitted successfully!");
      setFormData({ name: "", socialMediaHandle: "" });
      setImages([]);
      setloading(false);
    } catch (error) {
      setloading(false);
      setMessage("Error submitting user data!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 bg-gray-100 shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">User Submission Form</h2>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <div className="mb-4">
        <label className="block font-bold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold">Social Media Handle</label>
        <input
          type="text"
          name="socialMediaHandle"
          value={formData.socialMediaHandle}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold">Upload Images</label>
        <input type="file" multiple onChange={handleFileChange} className="w-full border rounded p-2" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {loading ? "Loading" : "Submit"}
      </button>
    </form>
  );
};

export default UserForm;
