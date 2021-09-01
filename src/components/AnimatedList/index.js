import { forwardRef, useState, useEffect } from "react";
import styles from "./styles.module.css";

export function AnimatedWrapper({ children }) {
  return <div className={styles["list-wrapper"]}>{children}</div>;
}

export const AnimatedItem = forwardRef(
  (
    {
      value,
      srcIcon,
      srcArrow,
      additionalActiveArea = 30,
      areaAfterRef = 130,
      areaBeforeRef = 60,
    },
    ref
  ) => {
    const [activeStyles, setActiveStyles] = useState({
      colorActive: "",
      iconActive: "",
      arrowActive: "",
    });

    const [transform, setTransform] = useState({ transform: "translateY(0)" });
    const [rotate, setRotate] = useState({ transform: "rotate(0deg)" });

    //just check if the we are in the scroll area and do something
    const checkScrollArea = (
      doInsideArea,
      doOutsideArea,
      additionalArea = 0
    ) => {
      if (
        window.scrollY > ref.offsetTop - areaBeforeRef &&
        window.scrollY <
          ref.offsetTop + ref.scrollHeight + areaAfterRef + additionalArea
      ) {
        doInsideArea();
      } else {
        if (doOutsideArea) {
          doOutsideArea();
        }
      }
    };

    //check the area to move the component
    const translateElement = () => {
      checkScrollArea(() => {
        setTransform({
          transform: `translateY(${
            ref.offsetTop - areaAfterRef - window.scrollY
          }px)`,
        });
        setRotate({
          transform: `rotate(-90deg)`,
        });
      });
    };

    //add or remove classes that let the user know the component is active
    const toggleActiveness = () => {
      checkScrollArea(
        () => {
          setActiveStyles({
            colorActive: ` ${styles["color-active"]}`,
            iconActive: ` ${styles["icon-active"]}`,
            arrowActive: ` ${styles["arrow-active"]}`,
          });
        },
        () => {
          setActiveStyles({
            colorActive: ``,
            iconActive: ``,
            arrowActive: ``,
          });
          setRotate({
            transform: `rotate(0deg)`,
          });
        },
        additionalActiveArea
      );
    };

    useEffect(() => {
      document.addEventListener("scroll", () => {
        translateElement();

        toggleActiveness();
      });
    }, []);

    return (
      <>
        <div className={styles["list-item"]} style={transform}>
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
      </>
    );
  }
);
