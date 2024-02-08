const AboutSection = () => {
  return (
    <section className="mt-9 max-w-7xl mx-auto flex gap-6 ">
      <div className="flex-1">
        <h3 className="text-back-main-color font-semibold tracking-widest">
          ABOUT US
        </h3>

        <h2 className="text-4xl font-semibold py-4">
          Welcome StayHub Hotel In Street Golapganj
        </h2>

        <p className="text-xl">
          At StayHub, we redefine hospitality with a commitment to excellence.
          Our meticulously curated selection of hotels ensures a delightful stay
          for every traveler. <br />
          With a passion for unparalleled service and memorable experiences,
          StayHub is your trusted partner in crafting unforgettable moments on
          your journey. Welcome to a world of comfort and convenience
        </p>
      </div>
      <div className="flex-1 relative bottom-28">
        <img
          src="https://ihg.scene7.com/is/image/ihg/even-hotels-eugene-5405616297-4x3"
          alt="hotel"
          className="border-8 border-back-main-color"
        />
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.kl_6Mvtc_bWcWtpzuBpliwHaFj&pid=Api&P=0&h=220"
          alt="hotel"
          className="border-8 border-back-main-color w-96 relative right-20 bottom-16"
        />
      </div>
    </section>
  );
};

export default AboutSection;
