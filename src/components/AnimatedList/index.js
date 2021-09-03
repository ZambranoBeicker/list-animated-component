import { useState } from "react";
import styles from "./styles.module.css";

import { Tween, ScrollTrigger as ScrollAnimator } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

//This is important, this is how you register
//each plugin, then you will be able to use it as
//the documentation says
gsap.registerPlugin(ScrollTrigger);

//this is just a simple wrapper
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
  //state for changing the color styles through classes
  const [activeStyles, setActiveStyles] = useState({
    colorActive: "",
    iconActive: "",
    arrowActive: "",
  });

  //state for rotating the arrow icon
  const [rotate, setRotate] = useState({ transform: "rotate(0deg)" });

  //function to abstract the toggling of the classes
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
      {/*ScrollTrigger with another name and default props,
       */}
      {/*
      to find more info about the ScrollTrigger API go to:
      https://bitworking.github.io/react-gsap/src-components-scroll-trigger and 
      https://greensock.com/docs/v3/Plugins/ScrollTrigger
      */}
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
        {/*
        This component is just to say how the movement 
        itself will be and what kind of movement, 
        not the scroll animation
        */}
        <Tween
          to={{
            y: translatedArea,
          }}
        >
          {/*All the content for the item list*/}
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
              alt="Description Icon"
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
                activeStyles.arrowActive
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
