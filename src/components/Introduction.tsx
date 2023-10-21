import ElsaImage from "../assets/elsa.jpg";

const Hero = () => (
  <section className="flex flex-col md:flex-row gap-8 items-center p-4 rounded-lg">
    <img src={ElsaImage} className="w-96 shadow-lg rounded-lg drop-shadow-lg" />
    <div className="max-w-lg">
      <h2 className="font-bold text-3xl">Hi, I'm Elsa Schumacher!</h2>
      <br />
      <p>
        I am a third-year Computer Science student at Aalto University. I'm very
        hard working and enthusiastic about the software industry. My minor is
        in Industrial Engineering and Management and I am interested in business
        meets software.
      </p>
    </div>
  </section>
);

export default Hero;
