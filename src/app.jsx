import { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setVidoes] = useState([]);

  useEffect(()=> {
    const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAq_qzMHEBT1F-zo-dPxI-5rIJ0tRrss6s", requestOptions)
    .then(response => response.json())
    .then(result => setVidoes(result.items))
    .catch(error => console.log('error', error));
    }, []);
  return <h1>Hello :)</h1>;
}

export default App;
