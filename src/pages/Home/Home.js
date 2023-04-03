import VideoInfo from './VideoInfo';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/firebase';
const cx = classNames.bind(styles);

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    document.querySelector('#focus').focus();
    const videosCollectionRef = collection(db, 'videos');
    getDocs(videosCollectionRef)
      .then((res) => {
        const vds = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setVideos(vds);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    //className="h-screen overflow-scroll overflow-x-hidden snap-y snap-mandatory" (snap)
    <div id="focus" tabIndex="1">
      {videos.map((video, index) => (
        <VideoInfo key={index} data={video} />
      ))}
    </div>
  );
}

export default Home;
