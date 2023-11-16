// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(image => {
      console.log(image.message)
      setDogImage(image.message);
      setIsLoaded(true);
    })
  }, []);

  if(!isLoaded) return <p>Loading...</p>

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;