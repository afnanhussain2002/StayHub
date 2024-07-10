import { useEffect, useState } from "react";
import { getAllHotels } from "../../api/hotels";
import Title from "../reUseComponents/Title";
import HotelsCard from "./HotelsCard";


const GetAllHotels = () => {
    const [allHotels, setAllHotels] = useState([])

    useEffect(() =>{
        getAllHotels()
        .then(data =>{
            setAllHotels(data)
        })
    }, [])
    return (
        <div className="mt-8">
      
        <Title title={'Best Hotels'}/>

        <div className="flex flex-wrap max-w-7xl mx-auto">
            {allHotels.map(hotel => <HotelsCard key={hotel._id} hotel={hotel}></HotelsCard>)}
        </div>
     
       </div>
    );
};

export default GetAllHotels;