import { Diamond, Star, Award } from "lucide-react";

export function AboutCraftsmanship() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-32 bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-[#d4af37] tracking-[0.2em] text-sm uppercase">Our Philosophy</h2>
            <h3 className="text-4xl md:text-6xl font-serif leading-tight">
              Elegance is an <span className="italic text-[#d4af37]">Attitude</span>
            </h3>
            <p className="text-gray-400 font-light leading-relaxed max-w-md">
              At Reva Jewels, we believe that true luxury lies in the details. Each piece is meticulously crafted to be more than an accessory; it is a legacy meant to be passed down through generations. Our commitment to sourcing only the finest gems ensures unparalleled brilliance and timeless beauty.
            </p>
            <button className="border-b border-[#d4af37] text-white hover:text-[#d4af37] uppercase tracking-widest text-sm pb-1 transition-colors">
              Discover Our Story
            </button>
          </div>
          <div className="relative h-[600px] order-1 lg:order-2">
            <div className="absolute inset-0 border border-[#d4af37]/30 translate-x-4 translate-y-4" />
            {/* model wearing exquisite jewelry */}
            <img 
              src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2000&auto=format&fit=crop" 
              alt="Artisan Craftsmanship"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">The Art of Creation</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">Uncompromising quality at every step of our process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Diamond, title: "Finest Materials", desc: "Ethically sourced, conflict-free diamonds and precious metals of the highest purity." },
              { icon: Star, title: "Timeless Design", desc: "Classic silhouettes fused with modern sensibilities, ensuring lifelong relevance." },
              { icon: Award, title: "Master Artisans", desc: "Handcrafted by elite jewelers with decades of experience and obsessive attention to detail." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/10 transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h4 className="text-xl font-serif text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
