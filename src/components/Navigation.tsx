import { Link } from "@tanstack/react-router";

function Navigation() {
  return (
    <div className="fixed top-[50px] left-[10px] flex flex-col px-5 py-2.5 bg-white rounded-md shadow-md gap-5">
      <Link
        to="/"
        className="[&.active]:font-bold text-[#0008fc] decoration-0 uppercase text-sm text-center"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="[&.active]:font-bold text-[#0008fc] decoration-0 uppercase text-sm text-center"
      >
        About
      </Link>
    </div>
  );
}

export default Navigation;
