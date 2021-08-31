import AnimatedList from "./components/AnimatedList";
function App() {
  const list = [
    { src: "./dashboard-icon.svg", value: "Información General" },
    { src: "./combined-shape.svg", value: "Galeria de Imagenes" },
    { src: "./checked.svg", value: "Descargables" },
    { src: "./record.svg", value: "Videos" },
    { src: "./archive.svg", value: "Charlas" },
    { src: "./message.svg", value: "Chat" },
    { src: "./meeting.svg", value: "Reuniones" },
  ];
  return <AnimatedList list={list} />;
}

export default App;
