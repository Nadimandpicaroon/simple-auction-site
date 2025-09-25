import bannerImg from "../../assets/Banner-min.jpg";

const Banner = () => {
  return (
    <div
      className="hero h-[500px] w-full"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content flex items-center justify-start text-white text-left w-full">
        <div className="max-w-lg ml-5">
          <h1 className="mb-5 text-4xl font-bold">
            Bid On Unique Items From Around The World
          </h1>
          <p className="mb-5">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </p>
          <button className="btn btn-primary rounded-4xl text-black bg-white">
            Explore Auctions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
