import React from "react";

export default function Events() {
  const events = [
    { id: 1, title: "Math Workshop", date: "2025-09-25", description: "Join our advanced math workshop." },
    { id: 2, title: "Science Fair", date: "2025-10-01", description: "Showcase your projects at the annual science fair." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-900 tracking-wide">
          Upcoming Events
        </h1>
        <div className="flex flex-col gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition border-2 border-blue-200"
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-2">{event.title}</h2>
              <p className="text-blue-600 font-medium mb-1">
                <span className="font-semibold">Date:</span> {event.date}
              </p>
              <p className="text-gray-700 mt-3 italic">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
