import { Link } from "react-router-dom";

const HotelsCard = ({ hotel }) => {
  return (
    <div className="p-4 w-96">
      <div className="h-full border-2 border-back-main-color rounded-lg overflow-hidden">
        <img
          className="lg:h-64 md:h-36 w-full object-cover object-center"
          src={hotel.bannerImage.data.display_url}
          alt={hotel.hotelName}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-black mb-1">
            {hotel.category}
          </h2>

          <p className="leading-relaxed mb-3 text-back-main-color font-semibold text-2xl">
            {hotel.hotelName}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link to={`/hotel/${hotel._id}`}>
              <button className="bg-back-main-color p-2 text-white font-bold rounded-md">
                Details
              </button>
            </Link>
            <span className="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-black">
              {hotel.host.name}
            </span>
            <span className=" inline-flex items-center leading-none">
              <img
                width={30}
                height={30}
                className="rounded-lg"
                src={hotel.host.image}
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsCard;
