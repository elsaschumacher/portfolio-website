import ElsaImage from "../assets/elsa.jpg";

const Hero = () => (
  <section className="flex flex-col md:flex-row gap-8 items-center p-4 rounded-lg">
    <img src={ElsaImage} className="w-96 shadow-lg rounded-lg drop-shadow-lg" />
    <div className="max-w-lg">
      <h2 className="font-bold text-3xl">Hi, I'm Elsa Schumacher!</h2>
      <br />
      <p>
        I'm a Software Engineer at Sievo based in Helsinki. I hold a B.Sc. in
        Computer Science from Aalto University and am completing my M.Sc. in
        Industrial Engineering and Management there in summer 2026. I love
        building software end-to-end and am excited about the intersection of
        technology and business — how good software can drive innovation and
        efficiency across different industries.
      </p>
    </div>
  </section>
);

export default Hero;
