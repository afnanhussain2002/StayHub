

const Product = ({room}) => {
    return (
      <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={room.image} alt="blog"/>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{room.category}</h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
          <p className="leading-relaxed mb-3">{room.title}</p>
          <div className="flex items-center flex-wrap ">
            <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
             
            </a>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
              1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
              6
            </span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Product;