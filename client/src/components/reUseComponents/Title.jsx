

const Title = ({title, white}) => {
    return (
        <div className={`text-5xl text-center font-bold mt-3 mb-4 text-back-main-color ${white && 'text-white'}`}>
            {title}
        </div>
    );
};

export default Title;