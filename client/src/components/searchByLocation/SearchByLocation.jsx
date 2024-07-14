import { FaSearch } from "react-icons/fa";
import { getSearchHotel } from "../../api/hotels";
import { useEffect, useState } from "react";

const SearchByLocation = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() =>{
    if (searchTerm === '') {
    return setSearchResults([])
    }else{
      getSearchHotel(searchTerm)
    .then(data =>{
      setSearchResults(data.data)
    })
    }
  },[searchTerm])
  const handleChange = e =>{
    setSearchTerm(e.target.value)
  }

 
  return (
    <>
    <div className="flex justify-center">
     <input onChange={handleChange} type="text" placeholder="Search...." className="input input-bordered w-full max-w-xs text-back-main-color placeholder:text-back-main-color" />
      <button className="btn bg-back-main-color border-none text-white text-xl ml-1"><FaSearch/></button>
    </div>
    {
      searchResults.length > 0 ?
      <div className="bg-white w-80 rounded-md absolute left-[315px]">
        {searchResults?.map(item => <div key={item._id} className="flex justify-start gap-1">
          <img src={item.bannerImage.data.display_url} alt="" className="w-10 h-8 rounded-md"/>
          <p className="text-black">{item.hotelName}</p>
        </div>)}
      </div>
      :
      <>
   
      </>
    }
    
    </>
  );
};

export default SearchByLocation;
