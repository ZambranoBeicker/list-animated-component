import { useRef, useState, useEffect, Fragment } from "react";
import { AnimatedWrapper, AnimatedItem } from "./components/AnimatedList";

const styles = {
  width: "100%",
  background: "lightblue",
  height: 50,
  textAlign: "center",
  marginTop: 500,
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
      {/*This div just and example container, you can do your own*/}
      <div style={{ position: "fixed", left: "5%", top: "10%" }}>
        <AnimatedWrapper>
          {refs.map((item) => {
            if (item.ref) {
              return (
                <Fragment key={generateKey(item.value)}>
                  <AnimatedItem
                    value={item.value}
                    srcIcon={item.src}
                    srcArrow="./arrow.svg"
                    refTrigger={item.ref}
                    translatedArea={-50}
                    animationStyles={{
                      start: "-80px center",
                      end: "200px center",
                      scrub: 0,
                      markers: true,
                    }}
                    classes={{ itemWrapper: "", text: "", arrow: "" }}
                  />
                </Fragment>
              );
            }
          })}
        </AnimatedWrapper>
      </div>
      {/*The above div is just and example container, you can do your own*/}

      {/*Here the refs elements are but you can put them wherever you want*/}
      <div style={styles} className="uno" ref={ref1}>
        1
      </div>
      <div style={styles} ref={ref2} className="dos">
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

      {/*Just something to add more height*/}
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
