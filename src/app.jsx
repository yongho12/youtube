import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header'

function App() {
  const [videos, setVidoes] = useState([]);
  const search = query => {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAq_qzMHEBT1F-zo-dPxI-5rIJ0tRrss6s`, requestOptions)
      .then(response => response.json())
      .then(result =>
          result.items.map(item => ({...item, id: item.id.videoId}))
        )
      .then(items => setVidoes(items))
      .catch(error => console.log('error', error));

  }

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


  
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>  
  )
}

export default App;
