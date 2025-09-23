import React from "react";

export default function Events() {
  const events = [
    { id: 1, title: "Math Workshop", date: "2025-09-25", description: "Join our advanced math workshop." },
    { id: 2, title: "Science Fair", date: "2025-10-01", description: "Showcase your projects at the annual science fair." },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Events</h1>
      <div className="flex flex-col gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-gray-800">{event.title}</h2>
            <p className="text-gray-500 mt-1">Date: {event.date}</p>
            <p className="text-gray-600 mt-3">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
