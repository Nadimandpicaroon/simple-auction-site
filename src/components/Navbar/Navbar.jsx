const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-base-100 shadow-sm px-6 py-3">
      {/* Left Section */}
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl font-bold text-orange-600">
          AuctionHub
        </a>
      </div>

      {/* Middle Section */}
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <a className="text-xl font-medium text-gray-500">Home</a>
          </li>
          <li>
            <a className="text-xl font-medium text-gray-500">Auctions</a>
          </li>
          <li>
            <a className="text-xl font-medium text-gray-500">Categories</a>
          </li>
          <li>
            <a className="text-xl font-medium text-gray-500">How To Works</a>
          </li>
        </ul>
      </div>

      {/* Right Section */}

      <div className="flex-1 flex px-2 gap-6 justify-end">
        {/* Notification */}
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>

        {/* Avatar */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="user avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
