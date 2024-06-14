// App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', photo);

    try {
      await axios.post('http://localhost:4500/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Form data submitted successfully');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div>
      <h1>Submit Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">Photo: </label>
          <input
            type="file"
            id="photo"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="story">Story: </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
