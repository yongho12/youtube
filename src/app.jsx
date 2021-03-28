import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header'

function App({youtube}) {
  const [videos, setVidoes] = useState([]);
  const search = query => {
    youtube
    .search(query)
    .then(vidoes => setVidoes(videos))
  
  }

  useEffect(()=> {
    youtube
    .mostPopular()
    .then(videos => setVidoes(videos))
  },[]);

  

  
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>  
  )
}

export default App;
