import Link from "next/link";
import Navbar from "../components/Navbar";

const Certifcates = () => {
  return (
    <div className="bg-[url('https://preview.redd.it/1920x1080-topography-wallpapers-made-by-me-request-for-v0-j8m6ykh6ar1a1.jpg?width=640&crop=smart&auto=webp&s=c3e4e9e6a60581cf1399fc84e2f56702972c8868')]  sm:w-full sm:h-full h-full w-full">
      <Navbar />
      <div className="flex justify-center items-center">
        <h1 className="text-white sm:text-[6rem] text-[2.2rem] uppercase tracking-[5px] font-bold sm:tracking-[8px] mt-[3rem] sm:mt-[5rem]">
          Certificates
        </h1>
      </div>
      <div className="sm:mt-[2rem] mt-[2rem] flex justify-center items-center flex-col">
        <ImageOfCert linkName="https://www.coursera.org/account/accomplishments/verify/AKQBHZAEE8H9" photo="/first.png" photoName="Frontend" />
        <ImageOfCert linkName="https://www.coursera.org/account/accomplishments/verify/65PPZ5ES33Z3" photo="/second.png" photoName="Backend" />
      </div>
      <div className="flex justify-center items-center">
        <h2 className="text-white font-medium text-md sm:text-lg capitalize sm:pb-10 pb-8 ">Click certificates to view them properly ↑↑↑</h2>
      </div>
    </div>
  );
};

const ImageOfCert = (props: { linkName: string, photo: string, photoName: string }) => {
  return (
    <Link href={props.linkName} target="_blank">
      <img
        className="sm:w-[400px] sm:h-[300px] w-[350px] h-[250px] opacity-30 rounded-[10px] mb-[3rem] duration-300 hover:w-[380px] hover:h-[280px] sm:hover:w-[450px] sm:hover:h-[350px] sm:hover:opacity-100 hover:p-9"
        src={props.photo}
        alt={props.photoName}
      />
    </Link>
  );
};

export default Certifcates;
