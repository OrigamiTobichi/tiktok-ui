import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faPlus,
  faSignIn,
  faEllipsisVertical,
  faGlobe,
  faCircleQuestion,
  faKeyboard,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import image from '~/assets/images';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Menu } from '~/components/Popper';

const cx = classNames.bind(styles);
//config menu items
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    desc: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    desc: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    desc: 'Keybroad shortcuts',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    desc: 'Dark mode',
    toggle: true,
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={image.logo} alt="Tiktok" />
        {/*Tippy search*/}
        <Tippy
          appendTo={document.body}
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <WrapperPopper>
                <h4 className={cx('search-title')}>accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </WrapperPopper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts or videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-button')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <Button text iconUpload={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary iconLeftSignIn={<FontAwesomeIcon icon={faSignIn} />}>
            Log in
          </Button>

          {/*Tippy more items*/}
          <Menu item={MENU_ITEMS}>
            <button className={cx('more-icon')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
