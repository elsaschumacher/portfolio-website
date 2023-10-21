import Header from "./components/Header";
import Hero from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experiences from "./components/Experience";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-[10vh] my-6 md:my-24">
        <Hero />
        <Skills />
        <Projects />
        <Experiences />
      </main>
    </>
  );
}

export default App;
