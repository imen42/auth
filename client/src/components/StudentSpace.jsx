import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import CourseItems from './CourseItems';

const StudentSpace = () => {
    const { users, isAuth}=useSelector( state => state.reducer );
    const dispatch = useDispatch();
    useEffect(()=> {
        
    }, []);

  return (
    <div className='container'>
      {
        <div>
             <p>  Welcome to our Student Space platform! This is a dedicated space for students where you can access a variety of resources, collaborate with your peers, and stay updated on important announcements. Whether you're looking for study materials, joining discussion forums, or exploring extracurricular activities, our Student Space has got you covered. Enjoy your time here and make the most out of your learning journey! </p> 
        </div>
      }
      <CourseItems/>
    </div>
  )
}

export default StudentSpace