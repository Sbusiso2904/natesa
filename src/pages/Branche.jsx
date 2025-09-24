import React, { useState } from "react";

const branches = [
  {
    name: "Eastern Cape",
    description:
      "Located in the south-eastern part of South Africa, the Eastern Cape is known for its beautiful coastline, diverse cultures, and historic universities.",
    campuses: ["Walter Sisulu University", "Nelson Mandela University", "Rhodes University"],
  },
  {
    name: "Free State",
    description:
      "The Free State is a province in the heart of South Africa, known for its vast plains, agriculture, and the judicial capital, Bloemfontein.",
    campuses: ["Qwaqwa Campus", "University of the Free State", "Central University of Technology"],
  },
  {
    name: "Gauteng",
    description:
      "Gauteng is South Africa's smallest but most populous province, home to Johannesburg and Pretoria, and the economic powerhouse of the country.",
    campuses: [
      "University of Johannesburg",
      "Tshwane University of Technology",
      "University of the Witwatersrand",
      "University of Pretoria",
      "Vaal University of Technology",
    ],
  },
  {
    name: "KwaZulu-Natal",
    description:
      "KwaZulu-Natal is a coastal province known for its beaches, the Drakensberg mountains, and a rich Zulu heritage. Durban is its largest city.",
    campuses: [
      "Edgewood Campus",
      "Howard College Campus",
      "Medical School Campus",
      "Pietermaritzburg Campus",
      "Westville Campus",
      "Mangosuthu Campus",
      "Indumiso Campus",
      "Durban Campus",
      "Unizulu Campus",
      "Majuba College",
      "Umfolozi College",
      "Coastal College",
    ],
  },
  {
    name: "Mpumalanga",
    description:
      "Mpumalanga, meaning 'the place where the sun rises', is famous for its scenic beauty, wildlife, and proximity to the Kruger National Park.",
    campuses: ["University of Mpumalanga", "Mbombela College", "Elangeni College"],
  },
  {
    name: "Northern Cape",
    description:
      "The Northern Cape is South Africa's largest and most sparsely populated province, known for its deserts, diamonds, and the city of Kimberley.",
    campuses: ["North-West University"],
  },
  {
    name: "Western Cape",
    description:
      "The Western Cape is renowned for its stunning coastline, winelands, and the iconic Table Mountain. Cape Town is the provincial capital.",
    campuses: ["University of Cape Town", "Cape Peninsula University of Technology"],
  },
];

function Branche() {
  const [openBranch, setOpenBranch] = useState(null);

  const handleBranchClick = (idx) => {
    setOpenBranch(openBranch === idx ? null : idx);
  };

  return (
    <div className="pt-6">
      {/* Branch buttons */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {branches.map((branch, idx) => (
          <button
            key={idx}
            onClick={() => handleBranchClick(idx)}
            className={`px-6 py-3 rounded-lg font-bold text-lg border-2 transition-colors duration-200
              ${
                openBranch === idx
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                  : "bg-blue-50 border-blue-600 text-blue-600 hover:bg-blue-100"
              }`}
          >
            {branch.name}
          </button>
        ))}
      </div>

      {/* Branch details */}
      {openBranch !== null && (
        <div className="max-w-md mx-auto bg-blue-50 border-2 border-blue-600 rounded-lg p-6 shadow-lg">
          <h2 className="text-center text-2xl font-bold text-blue-600 mb-4">
            {branches[openBranch].name}
          </h2>
          <p className="text-gray-800 mb-4">{branches[openBranch].description}</p>
          <ul className="list-disc list-inside text-blue-600">
            {branches[openBranch].campuses.map((campus, cidx) => (
              <li key={cidx}>{campus}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Branche;
