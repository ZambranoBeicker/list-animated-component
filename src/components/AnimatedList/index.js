import styles from "./styles.module.css";
export default function AnimatedList({ list }) {
  return (
    <div>
      {list.map((item) => (
        <li key={generateKey(item.value)}>{item.value}</li>
      ))}
    </div>
  );
}

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};
