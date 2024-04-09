// frontend/src/App.js
import React from 'react';
import AddEmployeeForm from './jsx/AddEmployeeForm';

const App = () => {
  return (
    <div>
      <h1>Employee Management System</h1>
      <AddEmployeeForm />
      {/* Add other components for displaying employee data */}
    </div>
  );
};

export default App;
