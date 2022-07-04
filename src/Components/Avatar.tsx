import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  borderOn?: boolean;
}

export function Avatar({ borderOn, ...props
 }: AvatarProps) {
  return (
    <img
      className={`${styles.avatar} ${borderOn && styles.borderOn}`}
      {...props}
    />
  );
}
