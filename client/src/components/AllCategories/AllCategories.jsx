import { categories } from "../../../public/data/categories";
import CategoryBox from "./CategoryBox";

const AllCategories = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-3 mt-12 px-10 py-20 lg:grid-cols-3">
     {categories.slice(0,6).map(category => <CategoryBox key={category.label} icon={category.icon} label={category.label} description={category.description}/>)}
    </div>
  );
};

export default AllCategories;
