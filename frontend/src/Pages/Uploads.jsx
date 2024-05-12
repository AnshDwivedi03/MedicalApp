import React, { useState } from 'react';
import axios from 'axios';
const UploadProgress = () => {
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = async (event) => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append('file', selectedFile);
  
    try {
      const result = await axios.post(
        "http://localhost:4000/upload",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log('Upload successful:', result.data);
      // Handle successful upload response
    } catch (error) {
      console.error('Upload failed:', error);
      // Handle upload error
    }
  };
  
  

  const handleUpload = () => {
    if (uploading) return;
    setUploading(true);

    // Trigger file input click
    const fileInput = document.getElementById('file_input');
    fileInput.click();
  };

  return (
    <div id="container">
      <button className={`btn-upload ${uploading && 'btn-upload-uploading'}`} id="btn_upload" onClick={handleUpload}>
        <svg viewBox="0 0 640 512" width="32">
          <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"></path>
        </svg>
        <span>UPLOAD</span>
        <input type="file" id="file_input" style={{ display: 'none' }} onChange={handleFileSelect} />
        <div className="progress"></div>
        <div className="check">
          <span></span>
        </div>
      </button>
    </div>
  );
};

export default UploadProgress;
