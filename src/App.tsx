import Header from "./components/Header";
import ElsaImage from "./assets/elsa.jpg";

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Hi! I'm Elsa Schumacher!</h2>
          <img src={ElsaImage} />
          <p>I am a 3rd year computer science student at Aalto University. </p>
        </section>
      </main>
    </>
  );
}

export default App;
