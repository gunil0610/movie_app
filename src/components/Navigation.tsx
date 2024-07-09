import { Link } from "@tanstack/react-router";

function Navigation() {
  return (
    <div className="fixed top-[50px] left-[10px] flex flex-col gap-5 rounded-md bg-white py-2.5 px-5 shadow-md">
      <Link
        to="/"
        search={{ page: 0, limit: 20 }}
        className="text-center text-sm uppercase text-[#0008fc] decoration-0 [&.active]:font-bold"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-center text-sm uppercase text-[#0008fc] decoration-0 [&.active]:font-bold"
      >
        About
      </Link>
    </div>
  );
}

export default Navigation;
