import Title from "../reUseComponents/Title";


const FindHotelCountries = () => {
    return (
    <section className="max-w-7xl mx-auto mt-8">
    <Title title={'World Best Hotels'}/>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-white font-bold">
        <div className="bg-[url('https://i.ibb.co/Ydj8jVS/barcelona-beach.jpg')] rounded-md bg-cover bg-center h-64 col-span-2 hover:scale-105 transition-transform duration-500 ease-in-out">
            <p className="p-2 bg-back-main-color w-32 rounded-md text-center m-1">SPAIN</p>
        </div>
        <div className="bg-[url('https://i.ibb.co/30msFZs/10-hotels1.jpg')] rounded-md bg-cover bg-center h-64 hover:scale-105 transition-transform duration-500 ease-in-out">
            <p className="p-2 bg-back-main-color w-32 rounded-md text-center m-1">BANGLADESH</p>
        </div>
        <div className="bg-[url('https://i.ibb.co/3R1K73J/singapore-thefullertonbayhotel-19.jpg')] rounded-md bg-cover bg-center h-64 hover:scale-105 transition-transform duration-500 ease-in-out">
            <p className="p-2 bg-back-main-color w-32 rounded-md text-center m-1">SINGAPORE</p>
        </div>
        <div className="bg-[url('https://www.shikhar.com/blog/wp-content/uploads/2016/06/Hotel-Main-Article-1.jpg')] rounded-md bg-cover bg-center h-64 hover:scale-105 transition-transform duration-500 ease-in-out">
            <p className="p-2 bg-back-main-color w-32 rounded-md text-center m-1">INDIA</p>
        </div>
        <div className="bg-[url('https://i.ibb.co/hC41VnV/d174c426c82d8eb398c299b2e35f9aaa.png')] rounded-md bg-cover bg-center h-64 hover:scale-105 transition-transform duration-500 ease-in-out">
            <p className="p-2 bg-back-main-color w-32 rounded-md text-center m-1">USA</p>
        </div>
    </div>
    
    </section>
    );
};

export default FindHotelCountries;