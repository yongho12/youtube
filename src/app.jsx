import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

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

  return <VideoList videos={videos} />;
}

export default App;
