import classNames from 'classnames/bind';
import styles from './VideoContent.module.scss';
import Videos from '~/assets/videos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { useElementOnScreen } from '~/components/hooks';

const cx = classNames.bind(styles);

function VideoContent({ data }) {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef();

  const handlePlayVideo = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      setPlaying(true);
      videoRef.current.play();
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  const isVisible = useElementOnScreen(options, videoRef);
  useEffect(() => {
    if (isVisible) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisible]);

  return (
    <div className={cx('wrapper')}>
      <video
        id="video"
        ref={videoRef}
        src={data.data.video}
        className={cx('video')}
        onClick={handlePlayVideo}
        controls
        autoPlay
        muted
        loop
      ></video>

      <div className={cx('interactive')}>
        <button className={cx('btn-like')}>
          <span className={cx('icon-heart')}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <strong className={cx('view')}>
            <span>{data.data.like}</span>
          </strong>
        </button>

        <button className={cx('btn-like')}>
          <span className={cx('icon-heart')}>
            <FontAwesomeIcon icon={faComment} />
          </span>
          <strong className={cx('view')}>
            <span>{data.data.cmt}</span>
          </strong>
        </button>

        <button className={cx('btn-like')}>
          <span className={cx('icon-heart')}>
            <FontAwesomeIcon icon={faShare} />
          </span>
          <strong className={cx('view')}>
            <span>{data.data.share}</span>
          </strong>
        </button>
      </div>
    </div>
  );
}

export default VideoContent;
