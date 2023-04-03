import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignIn,
  faGlobe,
  faCircleQuestion,
  faKeyboard,
  faMoon,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import image from '~/assets/images';
import Button from '~/components/Button';
import { Menu } from '~/components/Popper/Menu';
import * as Icons from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);
//config menu items
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'eng',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'eng',
          title: 'English',
        },
        {
          type: 'language',
          code: 'eng',
          title: 'English',
        },
        {
          type: 'language',
          code: 'eng',
          title: 'English',
        },
        {
          type: 'language',
          code: 'eng',
          title: 'English',
        },
        {
          type: 'language',
          code: 'eng',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keybroad shortcuts',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
    toggle: true,
  },
];

function Header() {
  const MENU_USERS = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profiles',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get Coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      separate: true,
    },
  ];

  const handleChange = (MenuItems) => {
    switch (MenuItems.type) {
      case 'language':
        console.log(MenuItems);
        break;
      default:
    }
  };
  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={image.logo} alt="Tiktok" />
        </Link>

        {/*Tippy search*/}
        <Search />

        <div className={cx('action', currentUser && 'gap')}>
          <Button text iconUpload={<Icons.UploadIcon />}>
            Upload
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Messages" delay={[0, 100]}>
                <button className={cx('user-btn')}>
                  <Icons.PaperPlane />
                </button>
              </Tippy>
              <Tippy content="Inbox" delay={[0, 100]}>
                <button className={cx('user-btn')}>
                  <Icons.Messages />
                  <span className={cx('badge')}>1</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button to="/" primary iconLeftSignIn={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
              {/*Tippy more items*/}
            </>
          )}
          {currentUser ? (
            <Menu items={MENU_USERS} onChange={handleChange}>
              <Image
                className={cx('user-avatar')}
                src="https://lh3.googleusercontent.com/ogw/AAEL6sh00fQIEZje_a7oKEZ9DalQO2eUjUYk-AF-vn3Q4g=s32-c-mo"
                alt="user"
              />
            </Menu>
          ) : (
            <Menu items={MENU_ITEMS} onChange={handleChange}>
              <button className={cx('more-icon')}>
                <Icons.MenuIcon />
              </button>
            </Menu>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
