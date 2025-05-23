import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Home, User, Folder, Mail } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4 mr-1" /> },
    { name: "About", path: "/about", icon: <User className="w-4 h-4 mr-1" /> },
    { name: "Projects", path: "/project", icon: <Folder className="w-4 h-4 mr-1" /> },
    { name: "Contact", path: "/contactform", icon: <Mail className="w-4 h-4 mr-1" /> },
  ];

  const linkClasses = ({ isActive }) =>
    `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-pink-500 text-white"
        : "text-gray-700 hover:bg-purple-100"
    }`;

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-pink-500 font-[cursive] tracking-wider">
        Delish Kumar
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className={linkClasses}>
              {item.icon}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-[72px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={linkClasses}
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
