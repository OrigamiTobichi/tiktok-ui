import classNames from 'classnames/bind';
import styles from './VideoInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import VideoContent from '../VideoContent';
import Image from '~/components/Images';

const cx = classNames.bind(styles);

function VideoInfo({ data }) {
  return (
    <div className={cx('content')}>
      <div className={cx('wrapper')}>
        <div>
          <Image className={cx('avatar')} src={data.data.avatar} alt="Rinka Mizuki" />
        </div>
        <div className={cx('desc')}>
          <div className={cx('info-user')}>
            <h3 className={cx('nickname')}>{data.data.nickname}</h3>
            <span className={cx('name')}>{data.data.name}</span>
          </div>
          <div className={cx('hashtag')}>
            <p>{data.data.content}</p>
            <strong>
              <a href="#">{data.data.tag}</a>
            </strong>
            <strong>
              <a href="#">#j4f</a>
            </strong>
          </div>
          <div className={cx('music')}>
            <FontAwesomeIcon className={cx('icon-music')} icon={faMusic} />
            <a href="#">nhạc nền - Yomein was a popular idol</a>
          </div>
        </div>
        <div className={cx('btn-follow')}>
          <Button outline small>
            Follow
          </Button>
        </div>
      </div>
      <VideoContent data={data} />
    </div>
  );
}

export default VideoInfo;
