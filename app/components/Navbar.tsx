import Link from "next/link";
import classes from "./Navbar.module.css";


const Anchor = (props: { name: string; linkName: string }) => {
  return (
    <Link
      href={props.linkName}
      style={{ border: "2px solid black" }}
      className="sm:mr-[50px] sm:text-[1.2rem] sm:font-[400] sm:px-[20px] sm:py-[10px] sm:rounded-br-[20px] sm:rounded-tl-[20px] sm:text-black sm:duration-300 sm:hover:text-[1.4rem] sm:hover:underline sm:hover:px-[25px] sm:hover:py-[15px] sm:hover:font-bold sm:hover:rounded-br-none sm:hover:rounded-tl-none sm:hover:rounded-bl-[20px] sm:hover:rounded-tr-[20px] sm:hover:bg-black sm:hover:text-red-700 mr-2 ml-2 p-2 font-semibold text-[12px] rounded-br-[20px]
      rounded-tl-[20px] hover:bg-black hover:text-red-700"
    >
      {props.name}
    </Link>
  );
};

const Navbar = () => {
  return (
    <div>
      <header className="sm:flex sm:justify-between sm:items-center sm:w-full sm:h-[200px] bg-white h-[170px]">
        <h1
          className={classes.logo}
          style={{ fontSize: "3rem", marginLeft: "30px" }}
        >
          Sayyed Saad
        </h1>
        <nav className="sm:mr-[6rem] flex justify-center items-center mt-[2rem]">
          <Anchor name="Home" linkName="/" />
          <Anchor name="Projects" linkName="/projects" />
          <Anchor name="Certificates" linkName="/certificates" />
          <Anchor name="Resume" linkName="/resume" />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
