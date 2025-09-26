import React from "react";

const App = () => {
  const skills = [
    "Java",
    "C",
    "HTML",
    "CSS",
    "React.js",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Git",
    "MySQL",
    "Figma",
    "Canva",
  ];

  const projects = [
    {
      name: "NotesApp",
      desc: "Note-taking app with CRUD features built using MERN stack",
      tech: "MERN Stack",
    },
    {
      name: "SPARK'25",
      desc: "Website for Internatioanl Conference at KPRIET",
      tech: "React.js",
    },
    {
      name: "Library Management",
      desc: "Tool for managing books and stock efficiently",
      tech: "Java",
    },
  ];
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-[#f4f4f4] z-50">
        <ul className="flex items-center justify-center gap-8 h-12 font-medium text-base">
          <li className="font-kalnia">
            <a href="#home" className="hover:text-gray-600 transition">
              Home
            </a>
          </li>
          <li className="font-kalnia">
            <a href="#about" className="hover:text-gray-600 transition">
              About
            </a>
          </li>
          <li className="font-kalnia">
            <a href="#projects" className="hover:text-gray-600 transition">
              Projects
            </a>
          </li>
          <li className="font-kalnia">
            <a href="#contact" className="hover:text-gray-600 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* HERO */}
      <section id="home" className="min-h-screen bg-[#f4f4f4]">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-kalnia text-9xl font-bold">VISHAL KANNAN</h1>
        </div>
        <div>
          <div>
            <p className="text-[#616161] text-base font-calibri font-light absolute bottom-14 left-10">
              Engineering Student crafting digital experiences <br /> through
              code & design
            </p>
            <p className="absolute bottom-6 left-10 underline underline-offset-4">
              VIEW PROJECTS
            </p>
          </div>
          <div>
            <p className="absolute right-10 bottom-10">SCROLL</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex flex-row items-center justify-evenly bg-[#f4f4f4]"
      >
        <div>
          <p className="text-[#646464]">ABOUT</p>
          <h1 className="text-8xl font-kalnia font-bold max-w-[500px]">
            Creating minimal, impactful solutions
          </h1>
        </div>
        <div className="max-w-[430px] flex flex-col gap-8">
          <p>
            I'm Vishal, an engineering student exploring the MERN stack while
            also skilled in C, Java, MySQL, Canva, and Figma.
          </p>
          <p>
            I enjoy creating minimal, impactful web projects that solve
            real-world problems with clean design and smart code.
          </p>
          <p className="mt-8 font-kalnia text-[24px] font-medium">MY SKILLS</p>
          <div className="grid grid-cols-4 gap-4">
            {skills.map((skills, index) => (
              <p key={index} className="border p-2 rounded-sm text-center">
                {skills}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen bg-[#f4f4f4] flex flex-col justify-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col">
            <p className="text-[#646464]">SELECTED PROJECTS</p>
            <h1 className="font-kalnia text-8xl font-bold">
              Things I’ve Built
            </h1>
          </div>
          <div className="w-full flex flex-col gap-12 items-center justify-center mt-12">
            {projects.map((project, index) => (
              <div key={index} className="w-full max-w-4xl">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-kalnia text-2xl font-medium w-40">
                    {project.name}
                  </p>
                  <p className="text-[#646464] max-w-68 w-full">
                    {project.desc}
                  </p>
                  <p className="text-[#646464] w-24 text-right">
                    {project.tech}
                  </p>
                </div>
                {index < 2 && (
                  <div className="border-t-2 border-gray-400 mt-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen bg-[#f4f4f4] flex items-center justify-center"
      >
        <div className="max-w-6xl w-full m-auto flex flex-col items-center">
          <div className="w-[85%]">
            <p className="text-[#646464]">CONTACT</p>
          </div>
          <div className="flex flex-col gap-16">
            <h1 className="text-8xl font-bold font-kalnia">
              Let's work together
            </h1>
            <div className="flex flex-row justify-between max-w-5xl w-full items-center">
              <div className="flex flex-col gap-8">
                <p className="max-w-[420px] text-[#646464] font-kalnia">
                  Ready to create something amazing? Let's connect and discuss
                  your next project
                </p>
                <div className="flex flex-row gap-8">
                  <p className="font-kalnia underline underline-offset-2">
                    Gmail
                  </p>
                  <p className="font-kalnia underline underline-offset-2">
                    LinkedIn
                  </p>
                  <p className="font-kalnia underline underline-offset-2">
                    GitHub
                  </p>
                </div>
                <button className="py-2.5 px-6 bg-black text-white font-kalnia rounded w-[120px]">
                  Resume
                </button>
              </div>
              <form className="flex flex-col max-w-100 w-full text-[#646464]">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="border-b-2" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="border-b-2" />
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="border-b-2 rows-6"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
