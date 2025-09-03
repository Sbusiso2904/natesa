import ResumeTemp from "./ResumeTemp";
import React, {useState} from "react";
import TemplatePreview from "./TemplatePreview";

function App() {
  const [selectedTemplate, setSelectedtemplate] = useState(null);

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-4xl font-bold text-sideleft mb-8 text-gray-800">
        Resume Builder SA
      </h1>

      <nav className="flex justify-center space-x-8 mb-12 text-lg text-blue-600">
        <a href="#Signin" className="hover:underline">
          Sign in
        </a>
        <a href="#Login" className="hover:underline">
          Login
        </a>
        <a href="#Builder" className="hover:underline">
          Builder
        </a>
        <a href="#Upload" className="hover:underline">
          Upload
        </a>
        <a href="#Contacts" className="hover:underline">
          Contacts
        </a>
        <a href="#About" className="hover:underline">
          About
        </a>
      </nav>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        <div className="flex-1 bg-white rounded-lg shadow p-8 flex items-center justify-center">
          <p className="text-xl font-semibold text-gray-700">
            Create New-Resume/CV
          </p>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-8 flex items-center justify-center">
          <p className="text-xl font-semibold text-gray-700">
            Improve Your existing Resume/CV
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mt-4">choose a Resume Template</h1>
      <ResumeTemp onSelect={setSelectedtemplate} />
      <TemplatePreview selectedTemplate={selectedTemplate} />
    </div>
    
  );
}

export default App;
