// // middleware/validateCourse.middleware.js
// export const validateCourseInput = (req, res, next) => {
//   // Log to debug
//   console.log("Validation middleware called");
//   console.log("Request body:", req.body);
//   console.log("Next function:", typeof next);

//   const {
//     title,
//     category,
//     level,
//     duration,
//     aboutCourse,
//     shortAbout,
//     heroImage,
//   } = req.body;

//   // Check if all required fields exist
//   const missingFields = [];
//   if (!title) missingFields.push("title");
//   if (!category) missingFields.push("category");
//   if (!level) missingFields.push("level");
//   if (!duration) missingFields.push("duration");
//   if (!aboutCourse) missingFields.push("aboutCourse");
//   if (!shortAbout) missingFields.push("shortAbout");
//   if (!heroImage) missingFields.push("heroImage");

//   if (missingFields.length > 0) {
//     return res.status(400).json({
//       success: false,
//       message: `Missing required fields: ${missingFields.join(", ")}`,
//     });
//   }

//   // Make sure next is a function before calling it
//   if (typeof next === "function") {
//     next();
//   } else {
//     console.error("next is not a function in validateCourseInput");
//     res.status(500).json({
//       success: false,
//       message: "Server configuration error",
//     });
//   }
// };
// CREATE COURSE validation
export const validateCreateCourse = (req, res, next) => {
  const requiredFields = [
    "title",
    "category",
    "level",
    "duration",
    "aboutCourse",
    "shortAbout",
    "heroImage",
  ];

  const missing = requiredFields.filter((field) => !req.body[field]);

  if (missing.length) {
    return res.status(400).json({
      success: false,
      message: `Missing required fields: ${missing.join(", ")}`,
    });
  }

  next();
};
