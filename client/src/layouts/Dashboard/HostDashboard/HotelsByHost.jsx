import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { getHostHotels } from "../../../api/hotels";
import TableForHostHotels from "./TableForHostHotels";

const HotelsByHost = () => {
  const { user } = useAuth();
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    getHostHotels(user?.email).then((data) => {
      setHotels(data);
    });
  }, [user]);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                     Remaining Double Bed 
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                     Remaining Single Bed 
                    </th>
                   
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Update
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hotels.map((hotel) => (
                    <TableForHostHotels
                      key={hotel._id}
                      hotel={hotel}
                    ></TableForHostHotels>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelsByHost;
