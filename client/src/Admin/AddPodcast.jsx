import React, { useState } from 'react';
import './style2.css';

const AddPodcast = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    desc: '',
    file: null,
    podcastType: 'audio' // initial dropdown value
  });


  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value // handle file input
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
  if (!formValues.title || !formValues.desc || !formValues.file || !formValues.podcastType) {
    alert("Please fill in all the required fields.");
    return;
  }
    const formData = new FormData();
    Object.keys(formValues).forEach((key) => formData.append(key, formValues[key]));

    try {
      const response = await fetch('http://localhost:8800/api/admin/add', {
        method: 'POST',
        body: formData
      });
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="MyComponent">
      <h1>Add New Podcast</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formValues.name} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="desc">Description:</label>
        <input type="text" id="desc" name="desc" value={formValues.desc} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="podcastType">Podcast Type:</label>
        <select id="podcastType" name="podcastType" value={formValues.podcastType} onChange={handleInputChange}>
          <option value="audio">Audio</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <input type="file" id="file" name="file" onChange={handleInputChange} />
      </div>

      <button type="submit">Upload</button>
    </form>
    </div>
  );
};

export default AddPodcast;