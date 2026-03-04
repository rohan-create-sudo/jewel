import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Ethereal Diamonds",
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f6612058b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Aura Gold",
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00f7?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Midnight Pearl",
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop",
  },
];

export function FeaturedCollection() {
  return (
    <section id="collections" className="py-32 bg-[#050505] relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4">Curated Selection</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Featured Collections</h3>
          </div>
          <button className="text-white hover:text-[#d4af37] flex items-center gap-2 uppercase tracking-widest text-sm transition-colors group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer block border border-white/5 bg-black gold-border-glow"
            >
              <div className="relative h-[450px] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {/* stunning high jewelry photography */}
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
              <div className="p-8 text-center relative z-20 bg-gradient-to-t from-black via-black to-transparent">
                <p className="text-[#d4af37] text-xs uppercase tracking-[0.2em] mb-2">{item.category}</p>
                <h4 className="text-xl font-serif text-white">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
