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

      <div className="bg-white dark:bg-grey-800 rounded-1g px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div>
        <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-1g">
          <svg
            class="h-6 w-6 texyy-white"

            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
      
          </svg>
        </span>
      </div>
      <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">Create New-Resume/CV</h3>
      <p class="text-grey-500 dark:text-gray-400 mt-2 text">
        Thjjdjjfbhffhbfhfbfhfbh
      </p>
    </div>

    
      <div className="bg-white dark:bg-grey-800 rounded-1g px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div>
          <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-1g">
            <svg
              class="h-6 w-6 texyy-white"

              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
          
            </svg>
          </span>
        </div>
        <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">Improve Your Resume/CV</h3>
        <p class="text-grey-500 dark:text-gray-400 mt-2 text">
          Thjjdjjfbhffhbfhfbfhfbh
        </p>
      </div>

      <h1 className="text-3xl font-bold text-center mt-4">choose a Resume Template</h1>
      <ResumeTemp onSelect={setSelectedtemplate} />
      <TemplatePreview selectedTemplate={selectedTemplate} />
    </div>
    
  );
}

export default App;
