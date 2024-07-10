

const ImageBG = ({ children }) => {
  return (
    <div className={`bg-[url('https://i.ibb.co/74Vr28t/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-105762-2301.jpg')] bg-cover bg-center`}>
      <div className="bg-black bg-opacity-40">{children}</div>
    </div>
  );
};

export default ImageBG;
