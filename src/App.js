import { useRef, useState, useEffect, Fragment } from "react";
import { AnimatedWrapper, AnimatedItem } from "./components/AnimatedList";

const styles = {
  width: "100%",
  background: "lightblue",
  height: 50,
  textAlign: "center",
  marginTop: 200,
};

function App() {
  const [refs, setRefs] = useState([]);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  useEffect(() => {
    setRefs([
      {
        ref: ref1.current,
        src: "./dashboard-icon.svg",
        value: "Información General",
      },
      {
        ref: ref2.current,
        src: "./combined-shape.svg",
        value: "Galeria de Imagenes",
      },
      { ref: ref3.current, src: "./checked.svg", value: "Descargables" },
      { ref: ref4.current, src: "./record.svg", value: "Videos" },
      { ref: ref5.current, src: "./archive.svg", value: "Charlas" },
      { ref: ref6.current, src: "./message.svg", value: "Chat" },
      { ref: ref7.current, src: "./meeting.svg", value: "Reuniones" },
    ]);
  }, []);

  return (
    <>
      <div style={{ position: "fixed", left: "5%", top: "10%" }}>
        <AnimatedWrapper>
          {refs.map((item, index) => {
            return (
              <Fragment key={generateKey(item.value)}>
                <AnimatedItem
                  value={item.value}
                  src={item.src}
                  ref={item.ref}
                />
              </Fragment>
            );
          })}
        </AnimatedWrapper>
      </div>
      <div style={styles} ref={ref1}>
        1
      </div>
      <div style={styles} ref={ref2}>
        2
      </div>
      <div style={styles} ref={ref3}>
        3
      </div>
      <div style={styles} ref={ref4}>
        4
      </div>
      <div style={styles} ref={ref5}>
        5
      </div>
      <div style={styles} ref={ref6}>
        6
      </div>
      <div style={styles} ref={ref7}>
        7
      </div>
      <div style={styles}>6</div>
      <div style={styles}>7</div>
      <div style={styles}>6</div>
      <div style={styles}>7</div>
      <div style={styles}>6</div>
      <div style={styles}>7</div>
    </>
  );
}

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};
export default App;
