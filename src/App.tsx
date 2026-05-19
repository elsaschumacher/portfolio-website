import Header from "./components/Header";
import Hero from "./components/Introduction";
import Skills from "./components/Skills";
import Experiences from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-[8vh] my-6 md:my-24">
        <Hero />
        <Skills />
        <Experiences />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;
