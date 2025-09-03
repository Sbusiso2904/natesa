import React from "react"

const templates = [
  { id: 1, name: "Modern", previewImage: "/images/modern.png" },
  { id: 2, name: "Classic", previewImage: "/images/classic.png" },
  { id: 3, name: "Minimalist", previewImage: "/images/minimalist.png" },
];

export default function ResumeTemp({ onSelect }){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
            {templates.map((template) => (
                <div 
                    key ={template.id}
                    onClick={() =. onSelect(template)}
                    className="cursor-pointer border rounded shadow hover:shadow-lg transition"
                >
                    <img src={template.previewImage} alt={template.name} className="w-full" />
                    <h3 className="text-center font-semibold p-2">{template.name}</h3>
                </div>
            ))}
            
        </div>
    );
}

