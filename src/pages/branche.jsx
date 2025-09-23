export default BranchePage;

import React, { useState } from "react";

const mainBranches = [
  "Gauteng",
  "KwaZulu-Natal",
  "Mpumalanga",
  "Free State",
  "North West",
  "Northern Cape",
  "Eastern Cape",
  "Western Cape",
  "Limpopo",
];

const branches = [
  {
    name: "Eastern Cape",
    description: "Located in the south-eastern part of South Africa, the Eastern Cape is known for its beautiful coastline, diverse cultures, and historic universities.",
    campuses: [
      "Walter Sisulu University",
      "Nelson Mandela University ",
      "Rhodes University "
    ],
  },
  {
    name: "Free State",
    description: "The Free State is a province in the heart of South Africa, known for its vast plains, agriculture, and the judicial capital, Bloemfontein.",
    campuses: [
      " Qwaqwa Campus",
      " University of the Free State",
      "Central University of Technology",
    ],
  },
  {
    name: "Gauteng",
    description: "Gauteng is South Africa's smallest but most populous province, home to Johannesburg and Pretoria, and the economic powerhouse of the country.",
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
    description: "KwaZulu-Natal is a coastal province known for its beaches, the Drakensberg mountains, and a rich Zulu heritage. Durban is its largest city.",
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
      "umfolozi  College",
      "coastal  College",
    ],
  },
  {
    name: "Mpumalanga",
    description: "Mpumalanga, meaning 'the place where the sun rises', is famous for its scenic beauty, wildlife, and proximity to the Kruger National Park.",
    campuses: [
      "University of Mpumalanga",
      "mbombela  College",
      "elangeni  College",

    ],
  },
  {
    name: "Northern Cape",
    description: "The Northern Cape is South Africa's largest and most sparsely populated province, known for its deserts, diamonds, and the city of Kimberley.",
    campuses: [
      "North-West University",
    ],
  },
  {
    name: "Western Cape",
    description: "The Western Cape is renowned for its stunning coastline, winelands, and the iconic Table Mountain. Cape Town is the provincial capital.",
    campuses: [
      "University of Cape Town",
      "Cape Peninsula University of Technology",
    ],
  },
];

function BranchePage() {
  const [openBranch, setOpenBranch] = useState(null);

  const handleBranchClick = (idx) => {
    setOpenBranch(openBranch === idx ? null : idx);
  };

  return (
    <div>
      {/* Main branches on top */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
        {branches.map((branch, idx) => (
          <div
            key={idx}
            style={{
              padding: "10px 20px",
              border: openBranch === idx ? "2px solid #1976d2" : "1px solid #1976d2",
              borderRadius: 6,
              background: openBranch === idx ? "#1976d2" : "#f5faff",
              fontWeight: "bold",
              fontSize: 16,
              minWidth: 120,
              textAlign: "center",
              cursor: "pointer",
              color: openBranch === idx ? "#fff" : "#1976d2",
              boxShadow: openBranch === idx ? "0 4px 16px rgba(25, 118, 210, 0.15)" : "none",
              transition: "all 0.2s",
            }}
            onClick={() => handleBranchClick(idx)}
          >
            {branch.name}
          </div>
        ))}
      </div>

      {/* Show only the selected branch and its campuses */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: 40 }}>
        {openBranch !== null && (
          <div style={{
            border: "2px solid #1976d2",
            borderRadius: 8,
            padding: 24,
            width: 320,
            margin: 10,
            background: "#f5faff",
            boxShadow: "0 4px 24px rgba(25, 118, 210, 0.10)"
          }}>
            <h2 style={{ color: "#1976d2", textAlign: "center", marginBottom: 12 }}>{branches[openBranch].name}</h2>
            <p style={{ color: "#333", marginBottom: 16 }}>{branches[openBranch].description}</p>
            {branches[openBranch].campuses && (
              <ul style={{ paddingLeft: 18 }}>
                {branches[openBranch].campuses.map((campus, cidx) => (
                  <li key={cidx} style={{ color: "#1976d2", marginBottom: 6 }}>{campus}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


