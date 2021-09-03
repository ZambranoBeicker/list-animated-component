import { createRef, useRef, forwardRef, useState, useEffect } from "react";
import styles from "./styles.module.css";

import { Tween, ScrollTrigger as ScrollAnimator } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedWrapper({ children }) {
  return <div className={styles["list-wrapper"]}>{children}</div>;
}

export const AnimatedItem = ({
  value,
  srcIcon,
  srcArrow,
  translatedArea,
  animationStyles,
  refTrigger,
  classes,
}) => {
  const [activeStyles, setActiveStyles] = useState({
    colorActive: "",
    iconActive: "",
    arrowActive: "",
  });

  const [rotate, setRotate] = useState({ transform: "rotate(0deg)" });

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
      <ScrollAnimator
        trigger={refTrigger}
        scrub={0.5}
        start="-200px center"
        end="200px center"
        inertia={false}
        ease="power1"
        onEnter={() => {
          toggleActiveClasses(true);
        }}
        onEnterBack={() => toggleActiveClasses(true)}
        onLeave={() => {
          toggleActiveClasses(false);
        }}
        onLeaveBack={() => toggleActiveClasses(false)}
        {...animationStyles}
      >
        <Tween
          to={{
            y: translatedArea,
          }}
        >
          <div className={styles["list-item"] + " " + classes.itemWrapper}>
            <img
              className={
                styles["list__icon"] +
                " " +
                classes.itemWrapper +
                " " +
                activeStyles.iconActive
              }
              src={srcIcon}
              alt="Arrow Icon"
            />
            <p
              className={
                styles["list__text"] +
                " " +
                classes.text +
                " " +
                activeStyles.colorActive
              }
            >
              {value}
            </p>
            <div
              className={
                styles["list__arrow"] +
                " " +
                classes.arrow +
                " " +
                +activeStyles.arrowActive
              }
            >
              <img src={srcArrow} alt="Arrow Icon" style={rotate} />
            </div>
          </div>
        </Tween>
      </ScrollAnimator>
    </>
  );
};
