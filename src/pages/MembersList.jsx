import React, { useEffect, useState } from "react";
import { getAllUsers } from "../utils/auth";

function MembersList() {
  const [members, setMembers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("loggedInUser");
    const user = JSON.parse(localStorage.getItem(email));
    setCurrentUser(user);

    const allUsers = getAllUsers().filter(u => u.status !== "alumni");

    // RBAC filter
    const filtered =
      user.category === "admin"
        ? allUsers
        : allUsers.filter((m) => m.branch === user.branch);

    setMembers(filtered);
  }, []);

  const handleMoveToAlumni = (email) => {
    const currentRole = currentUser.category;
    if (currentRole === "admin" || currentRole === "moderator") {
      const user = JSON.parse(localStorage.getItem(email));
      user.status = "alumni";
      localStorage.setItem(email, JSON.stringify(user));
      alert("Moved to alumni.");
      window.location.reload();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📋 Member List</h2>
      <ul className="space-y-3">
        {members.map((member) => (
          <li
            key={member.email}
            className="bg-gray-100 p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <p><strong>{member.name}</strong> — {member.branch}</p>
              <p className="text-sm text-gray-600">{member.category}</p>
            </div>
            {(currentUser.category === "admin" || currentUser.category === "moderator") && (
              <button
                className="text-red-500 hover:underline"
                onClick={() => handleMoveToAlumni(member.email)}
              >
                Move to Alumni
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MembersList;
