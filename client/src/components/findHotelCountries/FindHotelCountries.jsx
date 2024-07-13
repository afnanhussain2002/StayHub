import Title from "../reUseComponents/Title";


const FindHotelCountries = () => {
    return (
      /*   <section className="bg-white">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                        <img src="https://i.ibb.co/5TrBMzr/port-barcelona-evening-spain.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Spain</h3>
                    </a>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                        <img src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Gin</h3>
                    </a>
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                            <img src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Whiskey</h3>
                        </a>
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                            <img src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Vodka</h3>
                        </a>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                        <img src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                        <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Brandy</h3>
                    </a>
                </div>
            </div>
        </div>
    </section> */
    <section className="max-w-7xl mx-auto mt-8">
    <Title title={'World Best Hotels'}/>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-white font-bold">
        <div className="bg-[url('https://i.ibb.co/Ydj8jVS/barcelona-beach.jpg')] rounded-md bg-cover bg-center h-64 col-span-2">
            <p className="p-2 bg-back-main-color w-32 rounded-md text-center m-1">SPAIN</p>
        </div>
        <div className="bg-[url('https://i.ibb.co/30msFZs/10-hotels1.jpg')] rounded-md bg-cover bg-center h-64">
            <p className="p-2 bg-back-main-color w-32 rounded-md text-center m-1">BANGLADESH</p>
        </div>
        <div className="bg-[url('https://i.ibb.co/3R1K73J/singapore-thefullertonbayhotel-19.jpg')] rounded-md bg-cover bg-center h-64">
            <p className="p-2 bg-back-main-color w-32 rounded-md text-center m-1">SINGAPORE</p>
        </div>
        <div className="bg-[url('https://www.shikhar.com/blog/wp-content/uploads/2016/06/Hotel-Main-Article-1.jpg')] rounded-md bg-cover bg-center h-64">
            <p className="p-2 bg-back-main-color w-32 rounded-md text-center m-1">INDIA</p>
        </div>
        <div className="bg-[url('https://i.ibb.co/hC41VnV/d174c426c82d8eb398c299b2e35f9aaa.png')] rounded-md bg-cover bg-center h-64">
            <p className="p-2 bg-back-main-color w-32 rounded-md text-center m-1">USA</p>
        </div>
    </div>
    
    </section>
    );
};

export default FindHotelCountries;