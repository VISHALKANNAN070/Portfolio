import Header from "./Header"
const Hero = () => {
  return (
    <div className="min-h-screen bg-black">
    <Header/>
     <div className="absolute right-[80px] top-0 h-full w-[1px] bg-white"></div>
      <div className="absolute right-0 top-0 bg-white border-0 size-[80px]"></div>
        <div className="text-white absolute bottom-20 left-20">
            <p className="text-2xl mb-2">Hi, I'm Vishal Kannan,</p>
            <h1 className="text-[200px] font-light tracking-tight leading-tight">Web <br /> Developer</h1>
        </div>
    </div>
  )
}

export default Hero