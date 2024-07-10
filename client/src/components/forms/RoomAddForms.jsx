import { categories } from "../../../public/data/categories";
import { addHotel } from "../../api/hotels";
import { imageUpload } from "../../api/imageUpload";
import useAuth from "../../hooks/useAuth";
import { successPopup } from "../../popups/popups";

/* import { PiSpinnerBallFill } from "react-icons/pi";
console.log(PiSpinnerBallFill); */

const RoomAddForms = () => {
  const { user, loading } = useAuth();
  const handleHotelAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const hotelName = form.hotelName.value;
    const hotelLocation = form.hotelLocation.value;
    const totalRooms = form.totalRooms.value;
    const doubleBed = form.doubleBed.value;
    const singleBed = form.singleBed.value;
    const category = form.category.value;
    const doubleBedPrice = form.doubleBedPrice.value;
    const singleBedPrice = form.singleBedPrice.value;
    const bannerImg = form.bannerImg.files[0];
    const roomImage1 = form.roomImage1.files[0];
    const roomImage2 = form.roomImage2.files[0];
    const roomImage3 = form.roomImage3.files[0];
    const roomImage4 = form.roomImage4.files[0];
    const hotelDescription = form.hotelDescription.value;
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    // const banner = await imageUpload(bannerImg)

    // const rooms = await imageUpload(roomsImages)
    const bannerImage = await imageUpload(bannerImg);
    const roomImg1 = await imageUpload(roomImage1);
    const roomImg2 = await imageUpload(roomImage2);
    const roomImg3 = await imageUpload(roomImage3);
    const roomImg4 = await imageUpload(roomImage4);

    const hotelInfo = {
      hotelName,
      hotelLocation,
      totalRooms,
      doubleBed,
      singleBed,
      category,
      singleBedPrice,
      doubleBedPrice,
      bannerImage,
      roomImg2: roomImg2?.data?.display_url,
      roomImg1: roomImg1?.data?.display_url,
      roomImg3: roomImg3?.data?.display_url,
      roomImg4: roomImg4?.data?.display_url,
      hotelDescription,
      host,
    };

    console.log(hotelInfo);
    try {
      const data = await addHotel(hotelInfo);
      successPopup("Hotel Added Successfully");
      form.reset()
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-8 rounded-lg border border-gray-200 bg-back-main-color mt-10">
      <h1 className="font-bold text-white text-3xl">
        Fill Up With Your Hotel Info
      </h1>

      <form onSubmit={handleHotelAdd}>
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          {/* Hotel name */}
          <div>
            <label className="text-sm text-white block mb-1 font-bold">
              Hotel Name
            </label>
            <input
              type="text"
              name="hotelName"
              id="name"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your hotel name"
            />
          </div>
          {/* Hotel Location */}
          <div>
            <label className="text-sm text-white block mb-1 font-bold">
              Hotel Location
            </label>
            <input
              type="text"
              name="hotelLocation"
              id="email"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your hotel location"
            />
          </div>
          {/* Total Rooms */}
          <div>
            <label className="text-sm text-white block mb-1 font-bold">
              Total Rooms
            </label>
            <input
              type="number"
              name="totalRooms"
              id="totalRooms"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Total rooms in Hotel "
            />
          </div>
          {/* single and double rooms */}
          <div className="flex justify-between">
            <div>
              <label className="text-sm text-white block mb-1 font-bold">
                Double Bed Rooms
              </label>
              <input
                type="number"
                name="doubleBed"
                id="doubleBed"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Total double bed"
              />
            </div>
            <div>
              <label className="text-sm text-white block mb-1 font-bold">
                Single Bed Rooms
              </label>
              <input
                type="number"
                name="singleBed"
                id="singleBed"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Total single bed"
              />
            </div>
          </div>

          {/* categories */}

          <div className="flex flex-col">
            <label className="text-sm text-white block mb-1 font-bold">
              Hotel Besides On
            </label>
            <select
              id="category"
              name="category"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            >
              {categories.map((category, index) => (
                <option key={index} value={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          {/* Hotel images */}

          {/* Banner Image */}
          <div>
            <label className="text-sm text-white block mb-1 font-bold">
              Banner Image
            </label>
            <input
              type="file"
              name="bannerImg"
              id="bannerImg"
              className="bg-gray-100 border border-gray-200 rounded block focus:ring-blue-500 focus:border-blue-500 text-back-main-color w-full text-xs cursor-pointer file:bg-back-main-color file:text-white file:border-none file:p-1 "
            />
          </div>

          {/* Rooms Images */}
          <div>
            <label className="text-sm text-white block mb-1 font-bold">
              Add Images Of Hotel Rooms
            </label>
            <div className="flex flex-col gap-1 bg-gray-100 border border-gray-200 rounded py-1 px-3 focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full text-xs">
              <input type="file" name="roomImage1" className="file:bg-back-main-color file:text-white file:rounded file:border-none"/>
              <input type="file" name="roomImage2" className="file:bg-back-main-color file:text-white file:rounded file:border-none"/>
              <input type="file" name="roomImage3" className="file:bg-back-main-color file:text-white file:rounded file:border-none"/>
              <input type="file" name="roomImage4" className="file:bg-back-main-color file:text-white file:rounded file:border-none"/>
            </div>
          </div>
          {/* price */}
          <div className="flex justify-between">
            <div>
              <label className="text-sm text-white block mb-1 font-bold">
                Double Bed Rooms Price
              </label>
              <input
                type="number"
                name="doubleBedPrice"
                id="doubleBedPrice"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Per night double bed"
              />
            </div>
            <div>
              <label className="text-sm text-white block mb-1 font-bold">
                Single Bed Rooms Price
              </label>
              <input
                type="number"
                name="singleBedPrice"
                id="singleBedPrice"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Per night single bed"
              />
            </div>
          </div>
        </div>
        {/* description */}

        <div className="mt-4">
          <label className="text-sm text-white block mb-1 font-bold">
            Hotel Description
          </label>
          <textarea
            type="text"
            name="hotelDescription"
            id="hotelDescription"
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full h-28"
            placeholder="Hotel Description"
          />
        </div>

        <div className="space-x-4 mt-8">
          <button
            type="submit"
            className="py-2 px-4 bg-white text-back-main-color font-bold rounded"
          >
            {loading ? 'Adding...' : 'Submit Hotel'}
           
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomAddForms;
