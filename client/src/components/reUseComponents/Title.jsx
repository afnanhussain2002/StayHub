const Title = ({ title, white, left, small }) => {
  return (
    <div
      className={`${left ? "text-left" : "text-center"} ${small ? "text-3xl" : "text-5xl"} tracking-widest font-bold mt-3 mb-4 text-back-main-color ${
        white && "text-white"
      } ${left && "text-left"}`}
    >
      {title}
    </div>
  );
};

export default Title;
