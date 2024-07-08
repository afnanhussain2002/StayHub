const Product = ({ room }) => {
  return (
    <div className="p-4 w-1/3">
      <div className="h-full border-2 border-back-main-color rounded-lg overflow-hidden">
        <img
          className="lg:h-64 md:h-36 w-full object-cover object-center"
          src={room.image}
          alt={room.title}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-black mb-1">
            {room.category}
          </h2>
        
          <p className="leading-relaxed mb-3 text-back-main-color font-semibold text-2xl">{room.title}</p>
          <div className="flex items-center flex-wrap ">
            <button className="bg-back-main-color p-2 text-white font-bold rounded-md">
              Details
            </button>
            <span className="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-black">
              {room.host.name}
            </span>
            <span className=" inline-flex items-center leading-none">
              <img
                width={30}
                height={30}
                className="rounded-lg"
                src={room.host.image}
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
