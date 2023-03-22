import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as WrapperPopper } from '~/components/Popper';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);

function Menu({ children, item = [] }) {
  console.log(item);

  return (
    <Tippy
      delay={[null, 600]}
      appendTo={document.body}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx('menu-popper')}>
            {item.map((item, index) => (
              <MenuItems data={item} key={index} />
            ))}
          </WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
