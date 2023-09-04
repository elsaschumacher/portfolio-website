import Header from "./components/Header";
import Hero from "./components/Introduction";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-[15vh] my-24">
        <Hero />
        <Skills />
      </main>
    </>
  );
}

export default App;
