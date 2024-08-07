import SearchByLocation from "../../../components/searchByLocation/SearchByLocation";
import useAuth from "../../../hooks/useAuth";
import DashboardBtn from "../../../sheard/BookNowbtn/BookNowbtn";

const HeroSection = () => {
  const { user } = useAuth();
  return (
    <section className="bg-[url('https://www.jetsetter.com/uploads/sites/7/2018/04/mcdO57rG.jpeg')] bg-cover bg-center">
      <div className="w-full h-full backdrop-brightness-50">
        <div className="max-w-7xl mx-auto">
          {user && (
            <div className="flex justify-end pt-4 pr-4">
             
            </div>
          )}
        </div>
        <div className="text-center py-20 text-white font-semibold lg:py-52">
          <h3 className="pt-14 tracking-widest">WELCOME TO STAYHUB</h3>
          <h1 className="text-4xl max-w-3xl mx-auto py-8 lg:text-6xl">
            Your Gateway to Exceptional Stays
          </h1>
        <SearchByLocation/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
