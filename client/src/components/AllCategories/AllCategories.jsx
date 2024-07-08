import { categories } from "../../../public/data/categories";


const AllCategories = () => {

    return (
        <div>
            {categories.map(category => <div key={category.label}>

                
            
            
            </div>)}
        </div>
    );
};

export default AllCategories;