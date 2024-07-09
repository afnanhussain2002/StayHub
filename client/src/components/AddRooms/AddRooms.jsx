import RoomAddForms from "../forms/RoomAddForms";
import Container from "../reUseComponents/Container";

const AddRooms = () => {
  return (
    <>
      <section className="bg-[url('https://www.jetsetter.com/uploads/sites/7/2018/04/mcdO57rG.jpeg')] bg-cover bg-center">
        <div className="w-full h-full backdrop-brightness-50">
          <div className="max-w-7xl mx-auto"></div>
          <div className="text-center py-20 text-white font-semibold lg:py-52">
            <h3 className="pt-14 tracking-widest">Add hotels</h3>
            <h1 className="text-4xl max-w-5xl mx-auto py-8 lg:text-6xl">
              Add Your Hotels For Customer
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto">
      <RoomAddForms />

      </div>

      

      

    </>
  );
};

export default AddRooms;
