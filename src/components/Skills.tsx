const Skills = () => (
  <section>
    <h2 className="text-4xl text-center mb-4 font-semibold">My Skills</h2>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <li className="text-center">
        <h3 className="font-semibold">Tools</h3>
        <ul>
          <li>Git</li>
          <li>Linux/Unix</li>
        </ul>
      </li>
      <li className="text-center">
        <h3 className="font-semibold">Frontend</h3>
        <ul>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
        </ul>
      </li>
      <li className="text-center">
        <h3 className="font-semibold">Backend</h3>
        <ul>
          <li>Express</li>
          <li>Mongo</li>
        </ul>
      </li>
      <li className="text-center">
        <h3 className="font-semibold">Languages</h3>
        <ul>
          <li>Scala</li>
          <li>C</li>
          <li>JavaScript/TypeScript</li>
        </ul>
      </li>
    </ul>
  </section>
);

export default Skills;
