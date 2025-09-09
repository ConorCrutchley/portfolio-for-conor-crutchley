import type { ReactNode } from 'react';
import styles from '@/styles/card.module.css';

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`${styles['card']} ${className}`}>{children}</div>;
};

export default Card;
