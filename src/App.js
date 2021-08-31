import AnimatedList from "./components/AnimatedList";
function App() {
  const list = [
    { value: "Este" },
    { value: "Es" },
    { value: "Un" },
    { value: "Componente" },
  ];
  return <AnimatedList list={list} />;
}

export default App;
