import { Link } from "react-router-dom";
import { sections, formatZAR } from "../data/products.js";

export default function Collection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-gold tracking-[0.4em] uppercase text-xs mb-4">The Collection</p>
        <h1 className="font-display text-4xl md:text-5xl">Curated Pieces for the Modern Manor</h1>
        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          Each piece in our collection is crafted by master artisans using the finest materials.
        </p>
      </div>

      {sections.map((section) => (
        <div key={section.name} className="mb-24">
          <div className="flex items-end justify-between border-b border-gold/20 pb-4 mb-10">
            <h2 className="font-display text-3xl md:text-4xl">{section.name}</h2>
            <span className="text-xs tracking-[0.3em] uppercase text-gold/70">
              {section.items.length} pieces
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:gap-12">
            {section.items.map((p) => (
              <Link
                to={`/product/${p.id}`}
                key={p.id}
                className="group block bg-neutral-950 border border-white/5 overflow-hidden hover:border-gold/40 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl md:text-2xl group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-gold text-lg md:text-xl font-medium">
                      {formatZAR(p.price)}
                    </span>
                    <span className="text-xs tracking-widest uppercase text-white/50 group-hover:text-gold">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
