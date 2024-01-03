const Projects = () => (
  <section>
    <h2 className="text-4xl text-center mb-5 font-semibold">Projects</h2>
    <p className="text-center max-w-lg space-y-5 p-4">
      <p className="p">Here are some of my projects I've worked on!</p>
      <div className="space-y-2">
        <span className="text-2xl font-bold text-center">Music Ranker 🎶</span>
        <div className="space-y-1">
          <p>
            <span className="font-bold">Tools: </span>
            <span className="">
              Next.js, Tailwind CSS, MySQL, Planetscale and DaisyUI
            </span>
            <br></br>
            <br></br>
            <span>
              This website allows users to rank their favorite songs. Currently,
              it features Taylor Swift's discography, and the albums and their
              tracks are fetched from Spotify API. Based on the input data,
              statistics are calculated.
            </span>
          </p>
          <br></br>
          <a
            className="underline text-blue-600"
            href="https://music-ranker-pi.vercel.app/"
          >
            Check out the project!
          </a>
          <br></br>
          <a
            className="underline text-blue-600"
            href="https://github.com/elsaschumacher/music-ranker"
          >
            Source code
          </a>
        </div>
      </div>
    </p>
  </section>
);

export default Projects;
