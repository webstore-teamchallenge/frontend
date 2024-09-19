import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react';

import styles from './Button.module.scss';
import cn from 'classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'big' | 'large';
  icon?: ReactNode;
}

const Button = ({
  icon,
  type = 'button',
  size = 'medium',
  children,
  disabled,
  className,
  onClick,
  ...restProps
}: ButtonProps) => {
  const classNames = useMemo(() => cn(styles.button, styles[size], className), [className, size]);

  return (
    <button className={classNames} disabled={disabled} onClick={onClick} type={type} {...restProps}>
      {icon} {children}
    </button>
  );
};

export default Button;
