import { useState } from "react";

import styles from "./styles.module.css";
export default function AnimatedList({ list }) {
  const [activeStyles, setActiveStyles] = useState({
    colorActive: "",
    iconActive: "",
    arrowActive: "",
  });
  return (
    <div className={styles["list-wrapper"]}>
      {list.map((item) => (
        <div className={styles["list-item"]} key={generateKey(item.value)}>
          <img
            className={styles["list__icon"] + activeStyles.iconActive}
            src={item.src}
            alt="Arrow Icon"
          />
          <p className={styles["list__text"] + activeStyles.colorActive}>
            {item.value}
          </p>
          <div className={styles["list__arrow"] + activeStyles.arrowActive}>
            <img src="./arrow.svg" alt="Arrow Icon" />
          </div>
        </div>
      ))}
    </div>
  );
}

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

//styles["icon-active"]
