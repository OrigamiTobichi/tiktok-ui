import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  onClick,
  text = false,
  small = false,
  large = false,
  rounded = false,
  outline,
  primary,
  disable,
  className,
  iconUpload,
  iconRightSignIn,
  iconLeftSignIn,
  toggle,
  ...passProps
}) {
  let Cpn = 'button';

  const props = {
    onClick,
    //Những prop k lường trước được khi nào nó có
    ...passProps,
  };

  if (to) {
    props.to = to;
    Cpn = Link;
  } else if (href) {
    props.href = href;
    Cpn = 'a';
  } else if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
    [className]: className,
  });

  return (
    <Cpn className={classes} {...props}>
      {iconUpload && iconUpload}
      {iconLeftSignIn && <span className={cx('icon')}>{iconLeftSignIn}</span>}
      <span className={cx('title')}>{children}</span>
      {toggle}
      {iconRightSignIn && <span className={cx('icon')}>{iconRightSignIn}</span>}
    </Cpn>
  );
}

export default Button;
