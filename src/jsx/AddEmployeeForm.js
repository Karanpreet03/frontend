// frontend/src/components/AddEmployeeForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../jsx/style.css'; // Import CSS file

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    id: '',
    salary: '',
    department: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5005/employees', formData);
      alert('Employee added successfully!');
      // Optionally, reset the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        id: '',
        salary: '',
        department: '',
        email: ''
      });
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Failed to add employee. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label><br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label><br />
        <label>
          ID:
          <input type="number" name="id" value={formData.id} onChange={handleChange} />
        </label><br />
        <label>
          Salary:
          <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
        </label><br />
        <label>
          Department:
          <input type="text" name="department" value={formData.department} onChange={handleChange} />
        </label><br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label><br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
