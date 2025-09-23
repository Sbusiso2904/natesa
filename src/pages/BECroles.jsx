import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function RolesPage() {
  const [openSection, setOpenSection] = useState(null);

  // === NEC State ===
  const [nec, setNec] = useState([
    "Chairperson - Mr. Thulebona Cele",
    "Deputy Chairperson - Mr. Sabelo Mncube ",
    "Secretary General - Mr. Halalisani Zulu",
    "Deputy Secretary General - Miss Nomasabatha Mkhize ",
    "Treasurer General - Miss Nokubonga Hadebe ",
    "Organizer - Mr. Siyanda Ntombela ",
    "Public Relations Officer - Mr. Nkosingiphile Khoza ",
    "Project Officer - Miss Sinethemba Skhakhane",
    "Additional Member 1 - Mr. Lindokuhle Ntshangase ",
    "Additional Member 2 - Mr. Khanyisani Makhoba ",
  ]);
  const [newNec, setNewNec] = useState("");

  //BEC members classified by each region and branch
  const [bec, setBec] = useState({
    "KwaZulu-Natal": {
      "University of KwaZulu-Natal": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "Durban University of Technology": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
        "Mangosuthu University of Technology": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
        "University of Zululand": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
        "University of South Africa (UNISA) - KZN Regional Campus": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],

    },
    "Gauteng": {
      "University of Pretoria": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "University of Johannesburg": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "Tshwane University of Technology": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "Vaal University of Technology": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "University of the Witwatersrand": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "University of South Africa (UNISA) - Pretoria Regional Campus": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
    },
    "Eastern Cape": { "Walter Sisulu University": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "Nelson Mandela University": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "Rhodes University": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
        },
    "Free State": { "University of the Free State": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "Central University of Technology": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "Qwaqwa Campus": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
        },
        "Mpumalanga": { "University of Mpumalanga": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
        },
    "Limpopo": { "University of Limpopo": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],  
        "University of Venda": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
        },
    "North West": { "North-West University": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],   },
    "Northern Cape": { "Sol Plaatje University": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],   },
    "Western Cape": { "University of Cape Town": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "Stellenbosch University": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],
      "University of the Western Cape": ["Chairperson", "Secretary", "Treasurer", "Organizer", "Public Relations Officer", "Project Officer", "Additional Member 1", "Additional Member 2"],},
    
  });

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [newBec, setNewBec] = useState("");

  //Setting up Alumni state
  const [alumni, setAlumni] = useState(["Alumnus 1", "Alumnus 2"]);
  const [newAlumni, setNewAlumni] = useState("");

  // Setting up the NEC Handlers
  const addNec = () => {
    if (!newNec.trim()) return;
    setNec([...nec, newNec.trim()]);
    setNewNec("");
  };
  const updateNec = (i, val) => {
    const copy = [...nec];
    copy[i] = val;
    setNec(copy);
  };
  const deleteNec = (i) => {
    setNec(nec.filter((_, idx) => idx !== i));
  };

  // Setting up the BEC Handlers
  const addBec = () => {
    if (!selectedRegion || !selectedBranch || !newBec.trim()) return;
    const copy = { ...bec };
    copy[selectedRegion][selectedBranch].push(newBec.trim());
    setBec(copy);
    setNewBec("");
  };
  const updateBec = (region, branch, i, val) => {
    const copy = { ...bec };
    copy[region][branch][i] = val;
    setBec(copy);
  };
  const deleteBec = (region, branch, i) => {
    const copy = { ...bec };
    copy[region][branch] = copy[region][branch].filter((_, idx) => idx !== i);
    setBec(copy);
  };

  //Setting up the Alumni Handlers
  const addAlumni = () => {
    if (!newAlumni.trim()) return;
    setAlumni([...alumni, newAlumni.trim()]);
    setNewAlumni("");
  };
  const updateAlumni = (i, val) => {
    const copy = [...alumni];
    copy[i] = val;
    setAlumni(copy);
  };
  const deleteAlumni = (i) => {
    setAlumni(alumni.filter((_, idx) => idx !== i));
  };

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ textAlign: "center", marginBottom: 32 }}>
        STRUCTURE OF THE ORGANIZATION
      </h1>

      {/* Top buttons */}
      <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
        <button onClick={() => setOpenSection("NEC")}>NEC</button>
        <button onClick={() => setOpenSection("BEC")}>BEC</button>
        <button onClick={() => setOpenSection("ALUMNI")}>Alumni</button>
      </div>

      {/* NEC button */}
      {openSection === "NEC" && (
        <div style={cardStyle}>
          <h2 style={titleStyle}>National Executive Committee</h2>
          <ul>
            {nec.map((m, i) => (
              <li key={i}>
                <input
                  value={m}
                  onChange={(e) => updateNec(i, e.target.value)}
                  style={inputStyle}
                />
                <button onClick={() => deleteNec(i)}>Delete</button>
              </li>
            ))}
          </ul>
          <input
            value={newNec}
            onChange={(e) => setNewNec(e.target.value)}
            placeholder="Add NEC member"
            style={inputStyle}
          />
          <button onClick={addNec}>Add</button>
        </div>
      )}

      {/* BEC button*/}
      {openSection === "BEC" && (
        <div style={cardStyle}>
          <h2 style={titleStyle}>Branch Executive Committee</h2>

          {/* Region selector button */}
          <select
            value={selectedRegion}
            onChange={(e) => {
              setSelectedRegion(e.target.value);
              setSelectedBranch("");
            }}
            style={inputStyle}
          >
            <option value="">--Select Region--</option>
            {Object.keys(bec).map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          {/* Branch selector button */}
          {selectedRegion && (
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              style={inputStyle}
            >
              <option value="">--Select Branch--</option>
              {Object.keys(bec[selectedRegion]).map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          )}

          {/* Members */}
          {selectedBranch && (
            <>
              <ul>
                {bec[selectedRegion][selectedBranch].map((m, i) => (
                  <li key={i}>
                    <input
                      value={m}
                      onChange={(e) =>
                        updateBec(selectedRegion, selectedBranch, i, e.target.value)
                      }
                      style={inputStyle}
                    />
                    <button
                      onClick={() =>
                        deleteBec(selectedRegion, selectedBranch, i)
                      }
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <input
                value={newBec}
                onChange={(e) => setNewBec(e.target.value)}
                placeholder="Add BEC member"
                style={inputStyle}
              />
              <button onClick={addBec}>Add</button>
            </>
          )}
        </div>
      )}

      {/* Alumni button*/}
      {openSection === "ALUMNI" && (
        <div style={cardStyle}>
          <h2 style={titleStyle}>Alumni</h2>
          <ul>
            {alumni.map((a, i) => (
              <li key={i}>
                <input
                  value={a}
                  onChange={(e) => updateAlumni(i, e.target.value)}
                  style={inputStyle}
                />
                <button onClick={() => deleteAlumni(i)}>Delete</button>
              </li>
            ))}
          </ul>
          <input
            value={newAlumni}
            onChange={(e) => setNewAlumni(e.target.value)}
            placeholder="Add Alumni"
            style={inputStyle}
          />
          <button onClick={addAlumni}>Add</button>
        </div>
      )}
    </div>
  );
}

// Styling
const cardStyle = {
  border: "2px solid #1976d2",
  borderRadius: 8,
  padding: 24,
  marginTop: 24,
  background: "#f5faff",
  boxShadow: "0 4px 16px rgba(25,118,210,0.1)",
};
const titleStyle = { color: "#1976d2", marginBottom: 12 };
const inputStyle = { marginRight: 8, padding: 4 };

