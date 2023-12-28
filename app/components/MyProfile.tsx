import bg from "./assets/bg.gif";

const MyProfile = () => {
  return (
    <div className="sm:bg-black sm:w-full sm:h-screen">
      <div className="flex justify-center items-center">
        <img
          src="https://gifdb.com/images/high/black-sad-eye-art-f51auccfperavhav.gif"
          alt="background"
          className="sm:w-[400px] sm:h-[300px]"
        />
      </div>
      <div className="sm:flex sm:justify-center sm:items-center sm:mt-[10px] sm:flex-col flex justify-center items-center mt-[10px] flex-col">
        <h1
          className="sm:text-white sm:uppercase sm:font-semibold sm:mb-5 sm:text-[4rem] text-white text-[2rem] mb-3 uppercase font-semibold"
        >
          About me
        </h1>
        <p className="sm:text-white sm:text-[17px] sm:mb-3 text-white mb-1 text-[14px]">
          Hey there,
          <span className="sm:uppercase sm:text-[18px] sm:font-semibold sm:mx-1 sm:tracking-[2px] sm:text-green-700 text-green-700 text-[1rem] mx-1 uppercase tracking-[2px] font-semibold">
            Saad
          </span>
          here.
        </p>
        <p className="sm:text-white sm:text-[16px] sm:mb-1 text-white mb-1 text-[14px] text-center">
          I am a student and a fullstack developer. This is my another
          portfolio, made using NEXT JS ~ 14.
        </p>
        <p className="sm:text-white sm:text-[16px] sm:mb-1 text-white mb-1 text-[14px]">
          My main portfolio:{" "}
          <a
            className="sm:text-red-700 sm:underline sm:hover:text-[1.2rem] sm:hover:p-2 sm:duration-300 text-red-700 underline hover:text-[0.8rem] hover:p-2 duration-300"
            href="https://sayyedsaad-portfolio.netlify.app/"
            target="_blank"
          >
            Click Here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
