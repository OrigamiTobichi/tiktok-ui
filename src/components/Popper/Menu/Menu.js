import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

import { Wrapper as WrapperPopper } from '~/components/Popper';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);

  console.log(history);
  const current = history[history.length - 1];

  //xử lí khi quay lại trang
  const handleBackMenu = () => {
    setHistory((prev) => prev.slice(0, history.length - 1));
  };

  //xử lí khi menu ẩn và đi về trang đầu
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const renderMenuItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItems
          data={item}
          key={index}
          onClick={() => {
            if (isParent) {
              setHistory((prevState) => [...prevState, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const renderSearchResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <WrapperPopper className={cx('menu-popper')}>
        {history.length > 1 && <Header title={current.title} onBack={handleBackMenu} />}
        <div className={cx('menu-wrapper')}>{renderMenuItems()}</div>
      </WrapperPopper>
    </div>
  );

  return (
    <Tippy
      hideOnClick={hideOnClick}
      delay={[null, 600]}
      offset={[12, 10]}
      interactive
      placement="bottom-end"
      render={renderSearchResult}
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
