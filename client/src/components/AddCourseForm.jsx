import React, { useState } from 'react';
import axios from 'axios';

const AddCourseForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/courses/add', {
        title,
        description,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Course Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Course Description"
      ></textarea>
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourseForm;
