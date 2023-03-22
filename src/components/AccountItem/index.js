import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/22d378b233c56202caae16e4bd410655~c5_300x300.webp?x-expires=1679482800&x-signature=WiVDrKqykHwLtMGPhjp9Luap5gg%3D"
        alt="avatar"
      />
      <div className={cx('info')}>
        <div className={cx('name')}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </div>
        <span className={cx('username')}>nguyen_van_a</span>
      </div>
    </div>
  );
}

export default AccountItem;
