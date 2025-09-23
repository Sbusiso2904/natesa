import React, { useState } from "react";

const Admin = () => {
  // Dummy admin profile
  const adminProfile = {
    name: "John Doe",
    email: "admin@natesa.com",
  };

  // State for BECs and Students
  const [becList, setBecList] = useState(["BEC 1", "BEC 2"]);
  const [studentList, setStudentList] = useState(["Student A", "Student B"]);

  const [newBec, setNewBec] = useState("");
  const [newStudent, setNewStudent] = useState("");

  const addBec = () => {
    if (newBec.trim() !== "") {
      setBecList([...becList, newBec.trim()]);
      setNewBec("");
    }
  };

  const deleteBec = (index) => {
    setBecList(becList.filter((_, i) => i !== index));
  };

  const addStudent = () => {
    if (newStudent.trim() !== "") {
      setStudentList([...studentList, newStudent.trim()]);
      setNewStudent("");
    }
  };

  const deleteStudent = (index) => {
    setStudentList(studentList.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Admin Profile */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Admin Profile</h2>
        <p><strong>Name:</strong> {adminProfile.name}</p>
        <p><strong>Email:</strong> {adminProfile.email}</p>
      </div>

      {/* Manage BEC */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Manage BEC</h2>
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            placeholder="New BEC"
            className="border p-2 rounded flex-1"
            value={newBec}
            onChange={(e) => setNewBec(e.target.value)}
          />
          <button
            onClick={addBec}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          {becList.map((bec, index) => (
            <li key={index} className="flex justify-between items-center">
              {bec}
              <button
                onClick={() => deleteBec(index)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Manage Students */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Manage Students</h2>
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            placeholder="New Student"
            className="border p-2 rounded flex-1"
            value={newStudent}
            onChange={(e) => setNewStudent(e.target.value)}
          />
          <button
            onClick={addStudent}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          {studentList.map((student, index) => (
            <li key={index} className="flex justify-between items-center">
              {student}
              <button
                onClick={() => deleteStudent(index)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
