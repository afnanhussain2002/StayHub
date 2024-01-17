import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-black flex flex-col justify-center content-center flex-wrap">
        <p className="font-sans text-white font-bold text-7xl">404</p>
        <p className="text-white">Not found anything</p>
      </div>

      <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <Link
          className="bg-white text-black px-5 py-3 rounded-lg font-bold text-sm"
          to={"/"}
        >
          Go Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
