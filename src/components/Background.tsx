import SVGHorizontalLines from '@/components/SVG/SVGHorizontalLines';
import SVGVerticalLines from '@/components/SVG/SVGVerticalLines';
import styles from '@/styles/background.module.css';

const Background = () => {
  return (
    <div className={styles.background}>
      <SVGHorizontalLines />
      <SVGVerticalLines />
    </div>
  );
};

export default Background;
