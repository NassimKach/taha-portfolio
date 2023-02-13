type Props = {};

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Navbar({}: Props) {
  return (
    <div>
      <nav className="container flex items-center justify-between flex-wrap bg-[#1A1A1A] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl  z-10  tracking-tight">
            TAHA
          </span>
        </div>
        <div>
          <ul className=" flex items-center justify-between text-base z-10 text-white">
            {navLinks.map((link) => (
              <li key={link.name} className="z-10">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
