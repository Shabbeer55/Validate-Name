import React, { useState } from 'react';

const Namez = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const updateName = (e) => {
    setUsername(e.target.value);
  };

  const validateName = () => {
    if (username === "" || username === null) {
      setError("Name should not be blank");
    } else if (username.length < 4) {
      setError("Name should not be less than 4 characters");
    } else if (username.length > 8) {
      setError("Name should not be more than 8 characters");
    } else {
      setError("Good username");
    }
  };

  return (
    <>
      <label htmlFor='username'>Username: </label>
      <input 
        type="text"
        name="username"
        value={username}
        onChange={updateName}
      />
      <span>{error}</span><br />
      <button onClick={validateName}>Validate Name</button>
    </>
  );
}

export default Namez;
