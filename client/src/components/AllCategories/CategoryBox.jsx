

const CategoryBox = ({label, icon:Icon, description, selected}) => {
    return (
        <div className={`flex flex-col bg-white border-4 rounded-lg border-back-main-color gap-2 p-3 hover:text-neutral-800 cursor-pointer ${selected ? 'border-b-neutral-800 text-neutral-800' : ''}`}>
            <div className="text-back-main-color">
        <Icon size={50}/>

            </div>
        <div className="text-2xl font-bold text-back-main-color">{label}</div>
        <p className="text-xl font-semibold">{description}</p>
      </div>
    );
};

export default CategoryBox;