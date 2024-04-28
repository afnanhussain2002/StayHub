import BookNowbtn from "../BookNowbtn/BookNowbtn";


const WhyChoseUs = () => {
    return (
        <section className="bg-[url('https://sheribyrnehaber.com/wp-content/uploads/2019/11/hotelroom-2048x1360.jpeg')] bg-cover bg-center mt-4">
        <div className="w-full h-96 backdrop-brightness-50">
        <div className="max-w-7xl mx-auto">
        </div>
           <div className="text-center text-white font-semibold ">
           <h3 className="pt-14 tracking-widest">WHY CHOSE US</h3>
           <h1 className="text-6xl max-w-5xl mx-auto py-8">Contact us now to get the latest deals and for the next booking</h1>
           <BookNowbtn/>
           </div>
        </div>
    </section>
    );
};

export default WhyChoseUs;