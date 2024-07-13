import { FaSearch } from "react-icons/fa";
const SearchByLocation = () => {
  return (
    <div className="flex justify-center">
     <input type="text" placeholder="Search...." className="input input-bordered w-full max-w-xs placeholder:text-back-main-color" />
      <button className="btn bg-back-main-color border-none text-white text-xl ml-1"><FaSearch/></button>
    </div>
  );
};

export default SearchByLocation;
