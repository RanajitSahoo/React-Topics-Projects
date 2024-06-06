import "./App.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";

function App() {
  return (
    <center className="text-center counter">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          <DisplayCounter />
          <Controls />
        </div>
      </Container>
    </center>
  );
}

export default App;
