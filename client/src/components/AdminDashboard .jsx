import React from 'react';




const AdminDashboard = () => {
  const handleAddCourse = () => {

  };

  const handleDeleteCourse = (courseId) => {

  };

  return (
    <div className="admin-dashboard">
      <h1 className="admin-dashboard__title">Admin Dashboard</h1>
      <button className="admin-dashboard__button" onClick={handleAddCourse}>
        Add Course
      </button>
      <ul className="admin-dashboard__course-list">
        <li className="admin-dashboard__course-item">
          Course 1
          <button
            className="admin-dashboard__delete-button"
            onClick={() => handleDeleteCourse(1)}
          >
            Delete
          </button>
        </li>
        <li className="admin-dashboard__course-item">
          Course 2
          <button
            className="admin-dashboard__delete-button"
            onClick={() => handleDeleteCourse(2)}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
