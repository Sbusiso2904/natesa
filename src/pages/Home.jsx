import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10">
        {/* Welcome */}
        <h1 className="text-center text-blue-900 font-extrabold text-4xl mb-4 tracking-wide">
          Welcome to NaTeSA
        </h1>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          <span className="font-semibold">NaTeSA</span> (Nazareth Tertiary Students' Association) is an organisation that represents and
          empowers the tertiary student population in South Africa. It gives students a combined voice for education,
          social, religious and leadership issues across one of the largest university/college campus populations in South Africa.
          NaTeSA’s role is to support student growth, encourage their interests and continue building upon that progress
          through events, campaigns and alliances with alumni.
        </p>

        {/* Quick Links */}
        <h2 className="text-blue-800 border-b-2 border-blue-200 pb-2 mt-8 mb-4 text-2xl font-bold">
          Quick Links
        </h2>
        <ul className="mb-8 space-y-2 text-lg">
          <li>
            <a href="/nec" className="text-blue-700 hover:underline font-medium">
              National Executive Committee
            </a>
          </li>
          <li>
            <a href="/bec" className="text-blue-700 hover:underline font-medium">
              Branch Executive Committee
            </a>
          </li>
          <li>
            <a href="/alumni" className="text-blue-700 hover:underline font-medium">
              Alumni
            </a>
          </li>
          <li>
            <a href="/generalmembers" className="text-blue-700 hover:underline font-medium">
              General Members
            </a>
          </li>
        </ul>

        {/* Contact Information */}
        <h2 className="text-blue-800 border-b-2 border-blue-200 pb-2 mt-8 mb-4 text-2xl font-bold">
          Contact Us
        </h2>
        <div className="space-y-1 text-gray-700 text-base">
          <p>
            <span className="font-semibold">📧 Email:</span> natesanec@ymail.com
          </p>
          <p>
            <span className="font-semibold">📞 Phone:</span> +27 76 047 5636
          </p>
          <p>
            <span className="font-semibold">📍 Address:</span> 10th Floor Sangro House, 423 Anton Lembede, Durban, 4001
          </p>
        </div>
      </div>
    </div>
  );
}
