import { useEffect, useState } from "react";
import { getAllHotels } from "../../api/hotels";


const GetAllHotels = () => {
    const [allHotels, setAllHotels] = useState([])

    useEffect(() =>{
        getAllHotels()
        .then(data =>{
            console.log(data)
        })
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default GetAllHotels;