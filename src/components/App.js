import React, {useEffect, useState} from 'react';
import './styles/App.css'; // Link to your CSS file
import Loader from './Loader';
import PhotoFrame from './PhotoFrame';

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [photoData, setPhotoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${inputNumber}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPhotoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      setIsLoading(false);
    };

    if (inputNumber !== '') {
      fetchData();
    }
  }, [inputNumber]);

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  return (
    <div className="App">
      <label>Id Number </label>
      <input
        type="number"
        placeholder="Enter a number between 1-5000"
        value={inputNumber}
        onChange={handleInputChange}
      />
      {isLoading && <Loader />}
      {!isLoading && photoData && (
        <PhotoFrame url={photoData.url} title={photoData.title} />
      )}
    </div>
  );
}

export default App;
