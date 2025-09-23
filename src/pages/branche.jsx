
import React from "react";

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
      "Majuba College",
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
      "Majuba Campus",
      "Newcastle Campus",
    ],
  },
  {
    name: "Mpumalanga",
    description: "Mpumalanga, meaning 'the place where the sun rises', is famous for its scenic beauty, wildlife, and proximity to the Kruger National Park.",
    campuses: [
      "University of Mpumalanga",
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
  return (
    <div>
      {/* Main branches on top */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
        {mainBranches.map((branch, idx) => (
          <div
            key={idx}
            style={{
              padding: "10px 20px",
              border: "1px solid #1976d2",
              borderRadius: 6,
              background: "#e3f2fd",
              fontWeight: "bold",
              fontSize: 16,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            {branch}
          </div>
        ))}
      </div>

      {/* Existing branches and campuses */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: 40 }}>
        {branches.map((branch, idx) => (
          <div key={idx} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 20, width: 250 }}>
            <h2>{branch.name}</h2>
            <p>{branch.description}</p>
            {branch.campuses && (
              <ul>
                {branch.campuses.map((campus, cidx) => (
                  <li key={cidx}>{campus}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BranchePage;

