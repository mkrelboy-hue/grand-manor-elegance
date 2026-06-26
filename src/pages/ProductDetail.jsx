import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products, formatZAR, WHATSAPP_URL, PHONE_URL } from "../data/products.js";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  const [active, setActive] = useState(0);

  if (!product) {
    return (
      <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
        <h1 className="font-display text-3xl">Piece not found</h1>
        <Link to="/collection" className="text-gold mt-4 inline-block">← Back to collection</Link>
      </section>
    );
  }

  const next = () => setActive((a) => (a + 1) % product.images.length);
  const prev = () => setActive((a) => (a - 1 + product.images.length) % product.images.length);

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Link to="/collection" className="text-xs tracking-widest uppercase text-white/50 hover:text-gold">
          ← Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
              <img
                src={product.images[active]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/60 border border-gold/40 text-gold hover:bg-gold hover:text-black transition"
              >‹</button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/60 border border-gold/40 text-gold hover:bg-gold hover:text-black transition"
              >›</button>
            </div>
            <div className="grid grid-cols-5 gap-3 mt-4">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden border-2 transition ${
                    active === i ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:pl-8 flex flex-col justify-center">
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Grand Manor</p>
            <h1 className="font-display text-3xl md:text-5xl leading-tight">{product.title}</h1>
            <p className="mt-6 text-3xl text-gold font-light">{formatZAR(product.price)}</p>
            <div className="h-px bg-white/10 my-8" />
            <p className="text-white/70 leading-relaxed text-base">{product.description}</p>

            <ul className="mt-8 space-y-2 text-sm text-white/60">
              <li>— Handcrafted by master artisans</li>
              <li>— Premium materials sourced globally</li>
              <li>— White-glove delivery across South Africa</li>
              <li>— Lifetime craftsmanship guarantee</li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn px-8 py-4 text-sm rounded-sm text-center flex-1"
              >
                Purchase Now
              </a>
              <a
                href={PHONE_URL}
                className="gold-outline-btn px-8 py-4 text-sm rounded-sm text-center flex-1"
              >
                Call For Assistance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
