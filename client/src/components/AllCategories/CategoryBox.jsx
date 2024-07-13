

const CategoryBox = ({label, icon:Icon, description, image, selected}) => {
    return (
        <div className="card bg-base-100 image-full">
  <figure>
    <img
      src={image}
      alt="Shoes" className="w-full"/>
  </figure>
  <div className="card-body flex flex-col justify-end">
    <h2 className="card-title">{label}</h2>
    <p>{description}</p>
  </div>
</div>
    );
};

export default CategoryBox;