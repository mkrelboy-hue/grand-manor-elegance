import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const link = ({ isActive }) =>
    `tracking-widest text-xs uppercase transition-colors ${
      isActive ? "text-gold" : "text-white/80 hover:text-gold"
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-ink/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-xl md:text-2xl">
          Grand <span className="text-gold">Manor</span>
          <span className="hidden sm:inline"> Furniture</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={link} end>Home</NavLink>
          <NavLink to="/collection" className={link}>Collection</NavLink>
          <a href="#contact" className="tracking-widest text-xs uppercase text-white/80 hover:text-gold">Contact</a>
        </nav>
        <button
          className="md:hidden text-gold"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gold mb-1.5" />
          <span className="block w-6 h-0.5 bg-gold mb-1.5" />
          <span className="block w-6 h-0.5 bg-gold" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink">
          <div className="flex flex-col px-6 py-4 gap-4">
            <NavLink to="/" onClick={() => setOpen(false)} className={link} end>Home</NavLink>
            <NavLink to="/collection" onClick={() => setOpen(false)} className={link}>Collection</NavLink>
            <a href="#contact" onClick={() => setOpen(false)} className="tracking-widest text-xs uppercase text-white/80">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
