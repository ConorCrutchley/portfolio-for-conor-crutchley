import styles from '@/styles/background.module.css';

const Background = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      className={styles.background}
    >
      <defs>
        <pattern
          id="verticalLines"
          className={styles.verticalPattern}
          width="800"
          height="800"
          patternUnits="userSpaceOnUse"
        >
          <g className={styles.verticalGroup}>
            <rect
              width={431}
              height={3}
              x={-135.5}
              y={95.5}
              opacity={0.22}
              rx={1.5}
              transform="rotate(90 80 97)"
            />
            <rect
              width={547}
              height={3}
              x={387.5}
              y={110.5}
              opacity={0.69}
              rx={1.5}
              transform="rotate(90 661 112)"
            />
            <rect
              width={436}
              height={3}
              x={123}
              y={391.5}
              opacity={0.49}
              rx={1.5}
              transform="rotate(90 341 393)"
            />
            <rect
              width={422}
              height={3}
              x={169}
              y={699.5}
              opacity={0.39}
              rx={1.5}
              transform="rotate(90 380 701)"
            />
            <rect
              width={225}
              height={3}
              x={601.5}
              y={676.5}
              opacity={0.68}
              rx={1.5}
              transform="rotate(90 714 678)"
            />
            <rect
              width={306}
              height={3}
              x={439}
              y={520.5}
              opacity={0.71}
              rx={1.5}
              transform="rotate(90 592 522)"
            />
            <rect
              width={82}
              height={3}
              x={41}
              y={684.5}
              opacity={0.27}
              rx={1.5}
              transform="rotate(90 82 686)"
            />
            <rect
              width={245}
              height={3}
              x={399.5}
              y={736.5}
              opacity={0.6}
              rx={1.5}
              transform="rotate(90 522 738)"
            />
            <rect
              width={368}
              height={3}
              x={498}
              y={350.5}
              opacity={0.43}
              rx={1.5}
              transform="rotate(90 682 352)"
            />
            <rect
              width={538}
              height={3}
              x={165}
              y={181.5}
              opacity={0.42}
              rx={1.5}
              transform="rotate(90 434 183)"
            />
            <rect
              width={144}
              height={3}
              x={47}
              y={314.5}
              opacity={0.77}
              rx={1.5}
              transform="rotate(90 119 316)"
            />
            <rect
              width={218}
              height={3}
              x={159}
              y={85.5}
              opacity={0.14}
              rx={1.5}
              transform="rotate(90 268 87)"
            />
            <rect
              width={146}
              height={3}
              x={113}
              y={584.5}
              opacity={0.16}
              rx={1.5}
              transform="rotate(90 186 586)"
            />
            <rect
              width={330}
              height={3}
              x={227}
              y={550.5}
              opacity={0.42}
              rx={1.5}
              transform="rotate(90 392 552)"
            />
          </g>

          {/* Animate the vertical scroll */}
          {/* <animateTransform
            attributeName="patternTransform"
            type="translate"
            from="0 0"
            to="0 -800"
            dur="15s"
            begin="0s"
            repeatCount="indefinite"
          /> */}
        </pattern>
        <pattern
          id="horizontalLines"
          className={styles.horizontalPattern}
          width="400"
          height="400"
          patternUnits="userSpaceOnUse"
        >
          <g className={styles.horizontalGroup}>
            <rect width={48} height={6} x={154} y={311} opacity={0.66} rx={3} />
            <rect
              width={57}
              height={6}
              x={451.5}
              y={380}
              opacity={0.54}
              rx={3}
            />
            <rect width={52} height={6} x={26} y={340} opacity={0.95} rx={3} />
            <rect width={39} height={6} x={20.5} y={174} opacity={0.7} rx={3} />
            <rect
              width={65}
              height={6}
              x={239.5}
              y={232}
              opacity={0.61}
              rx={3}
            />
            <rect
              width={71}
              height={6}
              x={692.5}
              y={693}
              opacity={0.41}
              rx={3}
            />
            <rect width={54} height={6} x={718} y={157} rx={3} />
            <rect
              width={47}
              height={6}
              x={650.5}
              y={518}
              opacity={0.75}
              rx={3}
            />
            <rect
              width={81}
              height={6}
              x={677.5}
              y={311}
              opacity={0.28}
              rx={3}
            />
            <rect
              width={57}
              height={6}
              x={411.5}
              y={521}
              opacity={0.52}
              rx={3}
            />
            <rect width={52} height={6} x={135} y={143} opacity={0.77} rx={3} />
            <rect width={36} height={6} x={98} y={46} opacity={0.16} rx={3} />
            <rect
              width={55}
              height={6}
              x={447.5}
              y={55}
              opacity={0.58}
              rx={3}
            />
            <rect
              width={45}
              height={6}
              x={705.5}
              y={42}
              opacity={0.59}
              rx={3}
            />
            <rect
              width={49}
              height={6}
              x={384.5}
              y={747}
              opacity={0.91}
              rx={3}
            />
            <rect width={56} height={6} x={331} y={69} opacity={0.16} rx={3} />
            <rect
              width={43}
              height={6}
              x={571.5}
              y={220}
              opacity={0.13}
              rx={3}
            />
            <rect
              width={55}
              height={6}
              x={291.5}
              y={480}
              opacity={0.4}
              rx={3}
            />
            <rect width={42} height={6} x={605} y={139} opacity={0.33} rx={3} />
            <rect width={40} height={6} x={23} y={62} opacity={0.14} rx={3} />
            <rect width={46} height={6} x={242} y={96} opacity={0.54} rx={3} />
            <rect
              width={49}
              height={6}
              x={471.5}
              y={158}
              opacity={0.78}
              rx={3}
            />
            <rect
              width={43}
              height={6}
              x={287.5}
              y={592}
              opacity={0.15}
              rx={3}
            />
            <rect width={40} height={6} x={739} y={486} opacity={0.97} rx={3} />
            <rect width={56} height={6} x={47} y={539} opacity={0.78} rx={3} />
            <rect width={64} height={6} x={326} y={366} opacity={0.51} rx={3} />
            <rect width={42} height={6} x={343} y={661} opacity={0.57} rx={3} />
            <rect
              width={49}
              height={6}
              x={570.5}
              y={747}
              opacity={0.59}
              rx={3}
            />
            <rect width={50} height={6} x={182} y={406} opacity={0.29} rx={3} />
            <rect width={38} height={6} x={551} y={612} opacity={0.6} rx={3} />
            <rect width={44} height={6} x={489} y={677} opacity={0.92} rx={3} />
            <rect
              width={33}
              height={6}
              x={183.5}
              y={30}
              opacity={0.69}
              rx={3}
            />
            <rect width={62} height={6} x={376} y={233} opacity={0.26} rx={3} />
            <rect
              width={55}
              height={6}
              x={565.5}
              y={428}
              opacity={0.27}
              rx={3}
            />
            <rect
              width={49}
              height={6}
              x={577.5}
              y={46}
              opacity={0.25}
              rx={3}
            />
            <rect width={48} height={6} x={536} y={307} opacity={0.14} rx={3} />
            <rect width={71} height={6} x={36.5} y={690} opacity={0.3} rx={3} />
            <rect
              width={43}
              height={6}
              x={532.5}
              y={531}
              opacity={0.37}
              rx={3}
            />
            <rect width={42} height={6} x={40} y={440} opacity={0.57} rx={3} />
            <rect
              width={63}
              height={6}
              x={169.5}
              y={541}
              opacity={0.97}
              rx={3}
            />
            <rect width={72} height={6} x={180} y={724} opacity={0.82} rx={3} />
            <rect width={50} height={6} x={74} y={239} opacity={0.96} rx={3} />
          </g>

          {/* Animate the vertical scroll */}
          {/* <animateTransform
            attributeName="patternTransform"
            type="translate"
            from="0 0"
            to="0 -800"
            dur="60s"
            begin="0s"
            repeatCount="indefinite"
          /> */}
        </pattern>
      </defs>

      {/* Full screen rect that uses the repeating pattern */}
      <rect width="100%" height="100%" fill="url(#verticalLines)" />
      <rect width="100%" height="100%" fill="url(#horizontalLines)" />
    </svg>
  );
};

export default Background;
