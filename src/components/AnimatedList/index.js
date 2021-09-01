import { forwardRef, useState, useEffect } from "react";
import styles from "./styles.module.css";
export function AnimatedWrapper({ children }) {
  return <div className={styles["list-wrapper"]}>{children}</div>;
}

export const AnimatedItem = forwardRef(({ active, key, value, src }, ref) => {
  const [activeStyles, setActiveStyles] = useState({
    colorActive: "",
    iconActive: "",
    arrowActive: "",
  });

  const [transform, setTransform] = useState({ transform: "translateY(0)" });
  const [rotate, setRotate] = useState({ transform: "rotate(0deg)" });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (
        window.scrollY < ref.offsetTop - 60 &&
        window.scrollY > ref.offsetTop - 130
      ) {
        setTransform({
          transform: `translateY(${ref.offsetTop - 129 - window.scrollY}px)`,
        });
        setRotate({
          transform: `rotate(-90deg)`,
        });
      }

      if (
        window.scrollY > ref.offsetTop - 160 &&
        window.scrollY < ref.offsetTop + ref.scrollHeight + 160
      ) {
        setActiveStyles({
          colorActive: ` ${styles["color-active"]}`,
          iconActive: ` ${styles["icon-active"]}`,
          arrowActive: ` ${styles["arrow-active"]}`,
        });
      } else {
        setActiveStyles({
          colorActive: ``,
          iconActive: ``,
          arrowActive: ``,
        });
        setRotate({
          transform: `rotate(0deg)`,
        });
      }
    });
  }, []);
  return (
    <>
      <div key={key} className={styles["list-item"]} style={transform}>
        <img
          className={styles["list__icon"] + activeStyles.iconActive}
          src={src}
          alt="Arrow Icon"
        />
        <p className={styles["list__text"] + activeStyles.colorActive}>
          {value}
        </p>
        <div className={styles["list__arrow"] + activeStyles.arrowActive}>
          <img src="./arrow.svg" alt="Arrow Icon" style={rotate} />
        </div>
      </div>
    </>
  );
});
//styles["icon-active"]
