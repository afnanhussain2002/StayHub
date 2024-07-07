import { BiSolidOffer } from "react-icons/bi";
import { FaConciergeBell, FaCalendarAlt } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";
import { TbMassage } from "react-icons/tb";
import { GiWineBottle } from "react-icons/gi";

const MainFeatures = () => {
  return (
    <section className="max-w-7xl mx-auto grid gap-4 lg:grid-cols-3">
      <div className="space-y-3 border-2 border-back-main-color rounded-lg p-2">
        <BiSolidOffer className="text-4xl text-back-main-color border-2 rounded-lg border-back-main-color" />

        <h3 className="text-3xl font-semibold">Exclusive Rewards Program</h3>
        <p className="text-xl">
          Enjoy special perks and discounts through our loyalty program,
          granting you access to exclusive offers, room upgrades, and
          complimentary amenities with every stay.
        </p>
      </div>
      <div className="space-y-3 border-2 border-back-main-color rounded-lg p-2">
        <FaConciergeBell className="text-4xl text-back-main-color border-2 rounded-lg border-back-main-color" />

        <h3 className="text-3xl font-semibold">
          Personalized Concierge Service
        </h3>
        <p className="text-xl">
          Our dedicated concierge team is here to cater to your every need,
          offering personalized recommendations, transportation arrangements,
          and ensuring a seamless and stress-free stay.
        </p>
      </div>
      <div className="space-y-3 border-2 border-back-main-color rounded-lg p-2">
        <IoIosWifi className="text-4xl text-back-main-color border-2 rounded-lg border-back-main-color" />

        <h3 className="text-3xl font-semibold">Tech-Enabled Rooms</h3>
        <p className="text-xl">
          Experience modern convenience with state-of-the-art technology in our
          rooms, featuring smart controls for lighting, temperature, and
          entertainment. Stay connected with high-speed Wi-Fi and enjoy an
          immersive in-room experience.
        </p>
      </div>
      <div className="space-y-3 border-2 border-back-main-color rounded-lg p-2">
        <FaCalendarAlt className="text-4xl text-back-main-color border-2 rounded-lg border-back-main-color" />

        <h3 className="text-3xl font-semibold">Flexible Check-In/Check-Out</h3>
        <p className="text-xl">
          Tailor your stay to your schedule with our flexible check-in/check-out
          options. Whether you're an early bird or a night owl, StayHub
          accommodates your preferences to maximize your comfort.
        </p>
      </div>
      <div className="space-y-3 border-2 border-back-main-color rounded-lg p-2">
        <TbMassage className="text-4xl text-back-main-color border-2 rounded-lg border-back-main-color" />

        <h3 className="text-3xl font-semibold">
          Wellness Center and Spa Facilities
        </h3>
        <p className="text-xl">
          Rejuvenate your mind and body in our wellness oasis. Enjoy access to
          fitness centers with cutting-edge equipment, relaxing spa treatments,
          and wellness programs designed to enhance your overall well-being
          during your stay.
        </p>
      </div>
      <div className="space-y-3 border-2 border-back-main-color rounded-lg p-2">
        <GiWineBottle className="text-4xl text-back-main-color border-2 rounded-lg border-back-main-color" />

        <h3 className="text-3xl font-semibold">Culinary Excellence</h3>
        <p className="text-xl">
          Delight your taste buds with our diverse culinary offerings. From
          gourmet dining to casual fare, our on-site restaurants showcase a
          range of culinary experiences, ensuring a delectable journey for every
          palate.
        </p>
      </div>
    </section>
  );
};

export default MainFeatures;
