export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl">
            Grand <span className="text-gold">Manor</span> Furniture
          </h3>
          <p className="mt-4 text-white/60 text-sm leading-relaxed">
            Crafting timeless pieces for the most discerning homes across South Africa.
          </p>
        </div>
        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Contact</h4>
          <p className="text-white/70 text-sm mb-2">
            WhatsApp:{" "}
            <a href="https://wa.me/27123456789" className="hover:text-gold">+27 12 345 6789</a>
          </p>
          <p className="text-white/70 text-sm">
            Phone:{" "}
            <a href="tel:+27123456789" className="hover:text-gold">+27 12 345 6789</a>
          </p>
        </div>
        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Showroom</h4>
          <p className="text-white/70 text-sm leading-relaxed">
            By appointment only<br />
            Sandton, Johannesburg<br />
            South Africa
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-white/40 text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Grand Manor Furniture. All Rights Reserved.
      </div>
    </footer>
  );
}
