import { categories } from "../../../public/data/categories";
import { addHotel } from "../../api/hotels";
import { imageUpload } from "../../api/imageUpload";
import useAuth from "../../hooks/useAuth";
import { successPopup } from "../../popups/popups";

const RoomAddForms = () => {
  const {user} = useAuth()
  const handleHotelAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const hotelName = form.hotelName.value;
    const hotelLocation = form.hotelLocation.value;
    const totalRooms = form.totalRooms.value;
    const doubleBed = form.doubleBed.value;
    const singleBed = form.singleBed.value;
    const category = form.category.value;
    const bannerImg = form.bannerImg.files[0];
    const roomImage1 = form.roomImage1.files[0];
    const roomImage2 = form.roomImage2.files[0];
    const roomImage3 = form.roomImage3.files[0];
    const roomImage4 = form.roomImage4.files[0];
    const hotelDescription = form.hotelDescription.value;
    const host = {
      name:user?.displayName,
      image: user?.photoURL,
      email: user?.email
    }

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
      bannerImage,
      roomImg2: roomImg2?.data?.display_url,
      roomImg1: roomImg1?.data?.display_url,
      roomImg3: roomImg3?.data?.display_url,
      roomImg4: roomImg4?.data?.display_url,
      hotelDescription,
      host
    };

    console.log(hotelInfo);
    try {
      const data = await addHotel(hotelInfo)
      successPopup('Hotel Added Successfully')

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-8 rounded border border-gray-200">
      <h1 className="font-medium text-3xl">Fill Up With Your Hotel Info</h1>

      <form onSubmit={handleHotelAdd}>
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          {/* Hotel name */}
          <div>
            <label className="text-sm text-gray-700 block mb-1 font-medium">
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
            <label className="text-sm text-gray-700 block mb-1 font-medium">
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
            <label className="text-sm text-gray-700 block mb-1 font-medium">
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
              <label className="text-sm text-gray-700 block mb-1 font-medium">
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
              <label className="text-sm text-gray-700 block mb-1 font-medium">
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
            <label className="text-sm text-gray-700 block mb-1 font-medium">
              Hotel Besides On:
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
            <label className="text-sm text-gray-700 block mb-1 font-medium">
              Banner Image
            </label>
            <input
              type="file"
              name="bannerImg"
              id="bannerImg"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full text-xs"
            />
          </div>

          {/* Rooms Images */}
          <div>
            <label className="text-sm text-gray-700 block mb-1 font-medium">
              Add Images Of Hotel Rooms
            </label>
            <div className="flex bg-gray-100 border border-gray-200 rounded py-1 px-3 focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full text-xs">
              <input type="file" name="roomImage1" />
              <input type="file" name="roomImage2" />
              <input type="file" name="roomImage3" />
              <input type="file" name="roomImage4" />
            </div>
          </div>
        </div>
        {/* description */}

        <div>
          <label className="text-sm text-gray-700 block mb-1 font-medium">
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
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
          >
            Save
          </button>

          <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomAddForms;
