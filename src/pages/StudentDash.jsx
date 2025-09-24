import React from "react";

const StudentDash = () => {
  // Example student data (you can replace with dynamic data later)
  const student = {
    firstName: "Sbu",
    lastName: "Mbatha",
    branch: "Computer Science",
    faculty: "Engineering",
    academicAchievements: [
      "Dean's List 2024",
      "Best Research Paper Award 2023"
    ],
    organisations: [
      "Robotics Club",
      "IEEE Student Chapter",
      "Coding Society"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Student Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <h3 className="font-semibold text-lg text-blue-700">Full Name</h3>
            <p>{student.firstName} {student.lastName}</p>
          </div>

          {/* Branch */}
          <div>
            <h3 className="font-semibold text-lg text-blue-700">Branch</h3>
            <p>{student.branch}</p>
          </div>

          {/* Faculty */}
          <div>
            <h3 className="font-semibold text-lg text-blue-700">Faculty</h3>
            <p>{student.faculty}</p>
          </div>

          {/* Academic Achievements */}
          <div>
            <h3 className="font-semibold text-lg text-blue-700">Academic Achievements</h3>
            <ul className="list-disc list-inside">
              {student.academicAchievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </div>

          {/* Organisations */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg text-blue-700">Other Organisations</h3>
            <ul className="list-disc list-inside">
              {student.organisations.map((org, index) => (
                <li key={index}>{org}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDash;
