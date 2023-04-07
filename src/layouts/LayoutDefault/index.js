import classNames from 'classnames/bind';
import styles from './LayoutDefault.module.scss';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
import PropTypes from 'prop-types';
import Button from '~/components/Button/Button';
import ScrollTop from './ScrollGoToTop';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const btnRef = useRef();
  const contentRef = useRef();

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx('content')} ref={contentRef}>
          {children}
        </div>
        <div ref={btnRef} className={cx('container-button')}>
          <Button rounded className={cx('btn-get-app')}>
            Get app
          </Button>
          <ScrollTop ref={{ btnRef, contentRef }} />
        </div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
