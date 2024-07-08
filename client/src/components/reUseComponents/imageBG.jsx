

const ImageBG = ({ children, image }) => {
  return (
    <div className={`bg-${image} bg-cover bg-center`}>
      <div className="bg-black bg-opacity-40">{children}</div>
    </div>
  );
};

export default ImageBG;
