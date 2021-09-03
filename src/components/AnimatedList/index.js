import { createRef, useRef, forwardRef, useState, useEffect } from "react";
import styles from "./styles.module.css";

import { Tween, ScrollTrigger } from "react-gsap";

export function AnimatedWrapper({ children }) {
  return <div className={styles["list-wrapper"]}>{children}</div>;
}

export const AnimatedItem = ({
  value,
  srcIcon,
  srcArrow,
  additionalActiveArea = 30,
  areaAfterRef = 130,
  areaBeforeRef = 60,
  refClass,
  id,
}) => {
  const [activeStyles, setActiveStyles] = useState({
    colorActive: "",
    iconActive: "",
    arrowActive: "",
  });

  const [rotate, setRotate] = useState({ transform: "rotate(0deg)" });
  useEffect(() => {}, []);

  const toggleActiveClasses = (isActive) => {
    if (isActive) {
      setActiveStyles({
        colorActive: ` ${styles["color-active"]}`,
        iconActive: ` ${styles["icon-active"]}`,
        arrowActive: ` ${styles["arrow-active"]}`,
      });
      setRotate({
        transform: `rotate(-90deg)`,
      });
      return;
    }

    setActiveStyles({
      colorActive: ``,
      iconActive: ``,
      arrowActive: ``,
    });
    setRotate({
      transform: `rotate(0deg)`,
    });
  };

  return (
    <>
      <ScrollTrigger
        start={"-80px center"}
        end={"250px center"}
        scrub={0.5}
        markers={true}
        trigger={refClass}
        ease={"power1"}
        inertia={false}
        onEnter={() => {
          toggleActiveClasses(true);
        }}
        onEnterBack={() => toggleActiveClasses(true)}
        onLeave={() => {
          toggleActiveClasses(false);
        }}
        onLeaveBack={() => toggleActiveClasses(false)}
      >
        <Tween
          to={{
            y: "-50px",
          }}
        >
          <div className={styles["list-item"]} id={id}>
            <img
              className={styles["list__icon"] + activeStyles.iconActive}
              src={srcIcon}
              alt="Arrow Icon"
            />
            <p className={styles["list__text"] + activeStyles.colorActive}>
              {value}
            </p>
            <div className={styles["list__arrow"] + activeStyles.arrowActive}>
              <img src={srcArrow} alt="Arrow Icon" style={rotate} />
            </div>
          </div>
        </Tween>
      </ScrollTrigger>
    </>
  );
};

//const _RefConsumer = forwardRef(({ children, transform }, ref) => {
//return (
//<div className={styles["list-item"]} ref={ref}>
//{children}
//</div>
//);
//});
