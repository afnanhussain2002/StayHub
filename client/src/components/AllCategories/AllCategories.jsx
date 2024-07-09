import { categories } from "../../../public/data/categories";
import Title from "../reUseComponents/Title";
import CategoryBox from "./CategoryBox";

const AllCategories = () => {
  return (
    <div className="gap-3 mt-12 px-10 py-20">
    <Title title={'Category of Hotel'} white/>
    <div className="max-w-7xl mx-auto grid gap-3 grid-cols-2 lg:grid-cols-3">
     {categories.slice(0,6).map(category => <CategoryBox key={category.label} icon={category.icon} label={category.label} description={category.description}/>)}
    </div>
    
    </div>
  );
};

export default AllCategories;