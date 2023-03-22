import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
import Toggle from './ToggleIcon/Toggle';

const cx = classNames.bind(styles);

function MenuItems({ data }) {
  return (
    <Button toggle={data.toggle && <Toggle />} className={cx('menu-item')} iconLeftSignIn={data.icon} to={data.to}>
      {data.desc}
    </Button>
  );
}

export default MenuItems;
