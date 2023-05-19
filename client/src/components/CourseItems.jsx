import React from 'react';
import axios from 'axios';
const CourseItems = ({ course, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/courses/delete/${course._id}`);
      console.log(response.data);
      onDelete(course._id); 
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
    <img src="https://media.discordapp.net/attachments/1082235660783595581/1109076863504097351/90595585_1098005720564278_4696905763082207232_n_1.jpg?width=420&height=590" alt="Italian Trulli"></img>
     <img src=''></img>   
          
     {/* <img  src='https://media.discordapp.net/attachments/1082235660783595581/1109076863848038490/90595585_1098005720564278_4696905763082207232_n.jpg?width=420&height=590' alt='hi'>    </img>  

     <img  src='https://media.discordapp.net/attachments/1082235660783595581/1109076864137437246/90599173_1098006757230841_5868265987492544512_n.jpg?width=417&height=588'alt='hello'>     </img> 
  */}
          
          
           {/* houni besh nhot l courses */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};


export default CourseItems;
