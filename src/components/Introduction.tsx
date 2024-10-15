import ElsaImage from "../assets/elsa.jpg";

const Hero = () => (
  <section className="flex flex-col md:flex-row gap-8 items-center p-4 rounded-lg">
    <img src={ElsaImage} className="w-96 shadow-lg rounded-lg drop-shadow-lg" />
    <div className="max-w-lg">
      <h2 className="font-bold text-3xl">Hi, I'm Elsa Schumacher!</h2>
      <br />
      <p>
        I am a Master's student in Industrial Engineering and Management at Aalto University with 
        a strong and diverse technical background! Having done my Bachelor's in Computer Science, 
        I'm excited about the intersection of technology and business, especially product management, 
        and how software solutions can drive innovation in different industries. I'm very hard-working 
        with an analytical mindset, ask the right questions and have a passion for learning new things!
      </p>
    </div>
  </section>
);

export default Hero;
