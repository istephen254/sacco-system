import { useState } from "react";
import API from "../../api/memberApi";

function AddMember() {

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    national_id: "",
    phone: "",
    email: "",
    membership_type: "Ordinary",
    branch: "HQ"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/members", formData);

    alert("Member Registered");

    setFormData({
      first_name: "",
      middle_name: "",
      last_name: "",
      national_id: "",
      phone: "",
      email: "",
      membership_type: "Ordinary",
      branch: "HQ"
    });
  };

  return (
    <div>
      <h2>Register Member</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
        />

        <input
          name="middle_name"
          placeholder="Middle Name"
          value={formData.middle_name}
          onChange={handleChange}
        />

        <input
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
        />

        <input
          name="national_id"
          placeholder="National ID"
          value={formData.national_id}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">
          Save Member
        </button>

      </form>
    </div>
  );
}

export default AddMember;