const Contact = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-between">
      <h2 className="absolute text-[220px] -top-10 text-white opacity-10">
        Contact
      </h2>
      <div className="max-w-[60%] mt-40">
        <p className="text-white text-8xl font-extralight">
          Let's talk about an idea, project or collaboration through —
        </p>
        <a
          href="mailto:vishalkannan070@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Vishal"
          className="text-white text-8xl font-normal "
        >
          <p className=" max-w-[60%]">
            vishalkannan070 <br /> @gmail.com
          </p>
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-white/20 p-10">
        <p className="text-gray-400 text-center md:text-left">
          © 2025 Vishal Kannan — All rights reserved on original content.
        </p>
        <a
          href="#top"
          className="text-gray-400 hover:text-white transition-colors mt-4 md:mt-0"
        >
          Back To Top ↑
        </a>
      </div>
    </div>
  );
};

export default Contact;
