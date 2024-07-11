import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-screen w-screen bg-back-main-color flex flex-col justify-center content-center flex-wrap">
        <p className="font-sans text-white font-bold text-7xl">404</p>
        <p className="text-white">Not found anything</p>
      </div>

      <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <Link
          className="bg-white text-back-main-color px-5 py-3 rounded-lg font-bold text-sm"
          to={"/"}
        >
          Go Home
        </Link>
        <button onClick={() => navigate(-1)} className="bg-white ml-2 text-back-main-color px-5 py-3 rounded-lg font-bold text-sm">Go Back</button>
      </div>
    </>
  );
};

export default ErrorPage;
