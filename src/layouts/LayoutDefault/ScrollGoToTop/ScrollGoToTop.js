import classNames from 'classnames/bind';
import styles from './ScrollGoToTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ScrollTop({}, ref) {
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 10 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 10) {
        ref.current.classList.remove(cx('hide'));
        ref.current.classList.add(cx('show'));

        // ref.current.style.transform = 'none';
        // ref.current.style.transition = 'all 400ms cubic-bezier(0.65, 0, 0.35, 1) 0s';
      } else {
        ref.current.classList.remove(cx('show'));
        ref.current.classList.add(cx('hide'));

        // ref.current.style.transform = 'translateY(40px)';
        // ref.current.style.transition = 'all 400ms cubic-bezier(0.65, 0, 0.35, 1) 0s';
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {
        <button className={cx('btn-step')} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faForwardStep} className={cx('iconGoToTop')} />
        </button>
      }
    </>
  );
}

export default React.forwardRef(ScrollTop);
