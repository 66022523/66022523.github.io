import { Canvas } from "./components/Canvas";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

import { Home } from "./containers/Home";
import { About } from "./containers/About";

export function App() {
  return (
    <>
      <Canvas />
      <Header />
      <Nav />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}
