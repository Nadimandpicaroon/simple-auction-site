const Footer = () => {
  return (
    <div className="text-center my-4">
      <h1 className="text-4xl font-bold mb-2">
        <span className="text-blue-400"> Auction</span>
        <span className="text-yellow-500">Hub</span>
      </h1>
      <span className="text-md font-medium mb-3">
        <p>Bid. Win. Won.</p>
      </span>
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <a className="text-sm font-medium text-black">Home</a>
          </li>
          <li>
            <a className="text-sm  font-medium text-black">Auctions</a>
          </li>
          <li>
            <a className="text-sm  font-medium text-black">Categories</a>
          </li>
          <li>
            <a className="text-sm font-medium text-black">How To Works</a>
          </li>
        </ul>
      </div>
      <span>© 2025 AuctionHub. All rights reserved</span>
    </div>
  );
};

export default Footer;
