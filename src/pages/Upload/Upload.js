import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import { useEffect, useState } from 'react';
//storage
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { UserAuth } from '~/context/AuthContext';
const cx = classNames.bind(styles);

function Upload() {
  //state
  const [videoUrl, setVideoUrl] = useState(null);

  const { setVideoList, videoList } = UserAuth();
  //upload video
  const storage = getStorage();
  useEffect(() => {
    if (videoUrl == null) return;
    else {
      const mountainVideoRef = ref(storage, `Videos/${videoUrl.name + v4()}`);
      uploadBytes(mountainVideoRef, videoUrl).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setVideoList((prev) => [...prev, url]);
        });
      });
    }
  }, [videoUrl]);

  return (
    <div className={cx('wrapper')}>
      <input type="file" accept="video/*" onChange={(e) => setVideoUrl(e.target.files[0])} />
    </div>
  );
}

export default Upload;
