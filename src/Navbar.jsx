

const Navbar = ({search,setSearch}) => {
    return (
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">World Tour</a>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search Country..."
                        className="input input-bordered w-24 md:w-auto"
                        onChange={(e)=>setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
};

export default Navbar;