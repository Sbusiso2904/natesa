import React from "react";

export default function Announcement() {
  const announcements = [
    { id: 1, title: "New Website Launch", date: "2025-09-20", content: "Our new portal is live! Check out the features." },
    { id: 2, title: "Holiday Notice", date: "2025-09-22", content: "Office will be closed on 24th September for public holiday." },
    { id: 3, title: "Update on Registration", date: "2025-09-23", content: "Student registration deadline extended to 30th September." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-900">Announcements</h1>
        <div className="flex flex-col gap-6">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold text-blue-900">{announcement.title}</h2>
              <p className="text-gray-500 mt-1">Date: {announcement.date}</p>
              <p className="text-gray-600 mt-3">{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

