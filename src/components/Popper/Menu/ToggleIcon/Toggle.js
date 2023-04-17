import classNames from 'classnames/bind';
import styles from './Toggle.module.scss';

const cx = classNames.bind(styles);

function Toggle() {
  return (
    <>
      <input type="checkbox" id="switch" className={cx('switch-input')} />
      <label htmlFor="switch" className={cx('switch')}></label>
    </>
  );
}

export default Toggle;
