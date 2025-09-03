import React from "react";

export default function TemplatePreview({ selectedTemplate}){
    if (!selectedTemplate) return <p className="text-center">Select a template to preview</p>;

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Preview: {selectedTemplate.name}</h2>
            <img src={selectedTemplate.previewImage} alt="Preview" className="w-full border "/>
        </div>
    )   
}