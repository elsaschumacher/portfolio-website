import ElsaImage from "../assets/elsa.jpg";

const Hero = () => (
  <section className="flex gap-4 items-center p-4 rounded-lg">
    <img
      src={ElsaImage}
      className="w-96 ring-2 ring-neutral-950 shadow-lg rounded-lg drop-shadow-lg"
    />
    <div className="max-w-lg">
      <h2 className="font-bold text-3xl">Hi, I'm Elsa Schumacher!</h2>
      <br />
      <p>
        I am a third-year Computer Science student at Aalto University minoring
        in Industrial Engineering and Management.
      </p>
    </div>
  </section>
);

export default Hero;
