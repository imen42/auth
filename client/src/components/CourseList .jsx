import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await axios.delete(`/api/courses/delete/${courseId}`);
      fetchCourses(); // Refresh the course list after successful deletion
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Course List</h2>
      {courses.map((course) => (
        <div key={course._id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button onClick={() => handleDeleteCourse(course._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
