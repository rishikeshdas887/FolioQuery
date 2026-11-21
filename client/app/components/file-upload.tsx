'use client';
import React, * as react from 'react';
import { Upload } from 'lucide-react';

const FileUploadComponent : React.FC=()=>{
 //1st part  needed to make that upload button working 
    const handleFileUploadButtonClick =()=>{
        const el=document.createElement('input');
         el.setAttribute('type','file');
         el.setAttribute('accept','application/pdf');
         el.addEventListener('change',async(ev)=>{
            if(el.files&& el.files.length>0){
                const file =el.files.item(0);
                if(file){
               const formData=new FormData()
                formData.append('pdf',file);
                    await fetch('http://localhost:8000/upload/pdf',{
                method:'POST',
                body:formData,
              });
            }
          
              console.log('File uploaded');
            }
         });
         el.click();
        
    };
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