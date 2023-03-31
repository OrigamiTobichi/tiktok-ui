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
  const current = history[history.length - 1];
  return (
    <Tippy
      hideOnClick={hideOnClick}
      delay={[null, 600]}
      offset={[12, 10]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, history.length - 1));
                }}
              />
            )}
            <div className={cx('menu-wrapper')}>
              {current.data.map((item, index) => {
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
              })}
            </div>
          </WrapperPopper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
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
