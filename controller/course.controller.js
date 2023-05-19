const Course = require("../config/models/Course")
exports.addCourse = async (req, res) => {
    try {
      
      const { title, description } = req.body;
      const newCourse = new Course({ title, description });
  
      
      await newCourse.save();
  
      res.status(200).json(newCourse );
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  exports.deleteCourse = async (req, res) => {
    try {
      const courseId = req.params.courseId;
      // nlawej aal cours 
      const course = await Course.findById(courseId);
      // check l cours mawjoud walla
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
  
      // fasakh
      await Course.findByIdAndDelete(courseId);

      res.json({ message: 'Course deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the course' });
    }
  };