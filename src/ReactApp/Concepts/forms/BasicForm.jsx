import { useState } from "react";

const BasicForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    terms: false,
    role: ""
  });
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const isCheckBox = type === "checkbox";
    setForm((prev) => ({ ...prev, [name]: isCheckBox ? checked : value }));
  };
  const radioInputs = [
    {
      name: "Male",
      value: "male"
    },
    {
      name: "Female",
      value: "female"
    },
    {
      name: "Others",
      value: "others"
    }
  ];

  const selectOptions = [
    {
      value: ""
    },
    {
      value: "Admin"
    },
    {
      value: "User"
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      {/* TEXT Example */}
      <div className="space-x-1 mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="border"
          onChange={handleChange}
          placeholder="Name"
          value={form.name}
        />
      </div>
      {/* Email Example */}
      <div className="space-x-1">
        <label htmlFor="name">Email</label>
        <input
          type="email"
          name="email"
          className="border"
          onChange={handleChange}
          placeholder="email"
          value={form.email}
        />
      </div>
      {/* Radio Example */}
      <div className="flex  gap-3">
        <p>Gender</p>
        {radioInputs?.map((each) => (
          <div key={each.name}>
            <input
              value={each.value}
              type="radio"
              name="gender"
              checked={each.value === form.gender}
              onChange={handleChange}
            />
            <label htmlFor={each.value}> {each.name}</label>
          </div>
        ))}
      </div>
      {/* Checkbox Example */}
      <div className="space-x-1">
        <input
          type="checkbox"
          name="terms"
          onChange={handleChange}
          checked={form.terms}
        />
        <label htmlFor="terms">Terms and Condions</label>
      </div>
      {/* Select Example */}
      <div className="space-x-1">
        <label htmlFor="role">Role Type</label>
        <select
          name="role"
          onChange={handleChange}
          value={form.role}
          className="border"
        >
          {selectOptions.map((each) => (
            <option value={each.value}>{each.value}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BasicForm;
