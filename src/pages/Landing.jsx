import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.jpg";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Luxury living room"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-6 animate-fade-in">
          Grand Manor Furniture
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight animate-fade-up">
          Luxury Crafted For <span className="text-gold italic">Exceptional</span> Living
        </h1>
        <p className="mt-6 text-white/80 max-w-xl text-base md:text-lg animate-fade-up">
          Discover timeless furniture designed for modern elegance.
        </p>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <button
            onClick={() => navigate("/collection")}
            className="gold-btn px-12 md:px-16 py-5 text-sm md:text-base rounded-sm"
          >
            Let's Decorate
          </button>
        </div>
      </div>
    </section>
  );
}
