import profilePic from "../assets/profile-pic.png";

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-row items-center justify-center m-auto bg-[#F5F5F5]">
      <h2 className="absolute text-[220px] top-0 text-black opacity-20">About</h2>
      <div className=" flex flex-row items-center justify-between gap-20 mt-20">
        <div className="m-20">
          <img src={profilePic} alt="Vishal" className="h-145 w-130 rotate-15" />
        </div>
        <div className="">
          <p className="max-w-[750px] text-5xl font-light text-[#111111] text-left leading-18">
            I'm Vishal, an engineering student passionate about creating
            practical and innovative tech solutions, with interests in
            full-stack development and AI.
          </p>
        </div>  
      </div>
    </div>
  );
};

export default About;
