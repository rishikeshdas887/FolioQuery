'use client';
import React, * as react from 'react';
import { Upload } from 'lucide-react';
const FileUploadComponent : React.FC=()=>{

    const handleFileUploadButtonClick =()=>{
        const el=document.createElement('input');
         el.setAttribute('type','file');
         el.setAttribute('accept','application/pdf');
         el.click();
        
    }
    return (
        <>
        <div className="bg-amber-900 text-shadow-indigo-300 flex justify-center items-center p-4 rounded-lg border-2 border-blue-300" >
       
        <div onClick={handleFileUploadButtonClick} 
        className="flex justify-center items-center flex-col">
        <h3>Upload a PDF File </h3>
          

             <Upload />
             </div>
        </div>
       
        </>

    );

};
export default FileUploadComponent;