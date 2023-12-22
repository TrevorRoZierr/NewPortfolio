import Link from "next/link";
import Navbar from "../components/Navbar";

const ProjLinks = (props: { linkName: string; projLinkName: string }) => {
  return (
    <div>
      <Link href={props.linkName} className="text-white text-[1.3rem] ml-3 underline sm:hover:tracking-[10px] sm:duration-300 sm:hover:font-semibold " target="_blank">
        {props.projLinkName}
      </Link>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <Navbar />
    <div className="bg-[url('https://wallpaperxyz.com/wp-content/uploads/Gif-Animated-Wallpaper-Background-Full-HD-Free-Download-for-PC-Macbook-261121-Wallpaperxyz.com-25.gif')] h-screen">
      <div className="flex justify-center items-center mt-[0rem] text-[3rem] font-semibold tracking-[5px] sm:mt-[0rem] sm:text-[6rem] sm:tracking-[5px]">
        <h1 className="text-white uppercase mt-[4rem] sm:mt-[6rem]">projects</h1>
      </div>
      <div className="flex flex-col mt-[20px] sm:mt-[220px] sm:ml-[300px]">
        <div className="flex justify-center items-center flex-row">
            <h1 className="text-white text-[1.8rem] font-semibold">1 - </h1>
          <ProjLinks
            linkName="https://grovetodolist.onrender.com/"
            projLinkName="To-Do List"
          />
        </div>
        <div className="flex justify-center items-center flex-row">
            <h1 className="text-white text-[1.8rem] font-semibold">2 - </h1>
          <ProjLinks
            linkName="https://sayyedsaad-portfolio.vercel.app/"
            projLinkName="Messenger Clone"
          />
        </div>
        <div className="flex justify-center items-center flex-row">
            <h1 className="text-white text-[1.8rem] font-semibold">3 - </h1>
          <ProjLinks
            linkName="https://sayyedsaad-portfolio.vercel.app/"
            projLinkName="Twitch Clone"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
