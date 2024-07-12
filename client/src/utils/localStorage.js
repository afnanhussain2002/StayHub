const getBookedHotel = () => {
    const storedHotelString = localStorage.getItem("hotel");
    if (storedHotelString) {
      return JSON.parse(storedHotelString);
    }
    return [];
  };
  
  const saveHotelToLS = (hotel) => {
    const hotelStringified = JSON.stringify(hotel);
    localStorage.setItem("hotel", hotelStringified);
  };
  
  const addToLS = (bookedHotel) => {
    const booked = getBookedHotel();
    booked.push(bookedHotel);
    saveHotelToLS(booked);
  };
  const removeFromLS = id =>{
      const bookedHotel = getBookedHotel();
      const remaining = bookedHotel.filter(idx => idx !== id) ;
      saveHotelToLS(remaining)
  }
  
  export {addToLS, getBookedHotel, removeFromLS};