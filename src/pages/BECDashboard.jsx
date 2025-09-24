import React, { useState } from "react";

// Mock initial data for the logged-in student
const initialStudentBECData = [
  { id: 1, committee: "Robotics Club", role: "Member", eventsAttended: 2 },
  { id: 2, committee: "Tech Society", role: "Leader", eventsAttended: 5 },
];

const BECDashboard = () => {
  const [becData, setBecData] = useState(initialStudentBECData);
  const [newCommittee, setNewCommittee] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newEvents, setNewEvents] = useState("");

  // Add new BEC participation
  const handleAdd = () => {
    if (!newCommittee || !newRole || !newEvents) return;
    const newEntry = {
      id: Date.now(),
      committee: newCommittee,
      role: newRole,
      eventsAttended: parseInt(newEvents),
    };
    setBecData([...becData, newEntry]);
    setNewCommittee("");
    setNewRole("");
    setNewEvents("");
  };

  // Delete a participation entry
  const handleDelete = (id) => {
    setBecData(becData.filter((item) => item.id !== id));
  };

  // Edit a participation entry
  const handleEdit = (id, field, value) => {
    setBecData(
      becData.map((item) =>
        item.id === id ? { ...item, [field]: field === "eventsAttended" ? parseInt(value) : value } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10">
      <div className="pt-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">BEC Dashboard (Student)</h1>

        {/* Add New Entry */}
        <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 mb-6 shadow-md">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Add New Participation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Committee"
              value={newCommittee}
              onChange={(e) => setNewCommittee(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Events Attended"
              value={newEvents}
              onChange={(e) => setNewEvents(e.target.value)}
              className="p-2 border rounded"
            />
          </div>
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        {/* Existing BEC Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {becData.map((item) => (
            <div key={item.id} className="bg-white border-2 border-blue-600 rounded-lg p-4 shadow-md">
              <div className="mb-2">
                <label className="font-semibold text-blue-600">Committee:</label>
                <input
                  type="text"
                  value={item.committee}
                  onChange={(e) => handleEdit(item.id, "committee", e.target.value)}
                  className="ml-2 border p-1 rounded w-full"
                />
              </div>
              <div className="mb-2">
                <label className="font-semibold text-blue-600">Role:</label>
                <input
                  type="text"
                  value={item.role}
                  onChange={(e) => handleEdit(item.id, "role", e.target.value)}
                  className="ml-2 border p-1 rounded w-full"
                />
              </div>
              <div className="mb-2">
                <label className="font-semibold text-blue-600">Events Attended:</label>
                <input
                  type="number"
                  value={item.eventsAttended}
                  onChange={(e) => handleEdit(item.id, "eventsAttended", e.target.value)}
                  className="ml-2 border p-1 rounded w-full"
                />
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BECDashboard;
