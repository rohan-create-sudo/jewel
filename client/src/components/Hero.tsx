import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // 1. Ring appears and rotates 3D
    tl.fromTo(".hero-ring",
      { scale: 0, opacity: 0, rotateY: -180, rotateX: 0 },
      { scale: 1, opacity: 1, rotateY: 360, duration: 2.2, ease: "power3.inOut" }
    )
    // 2. Ring slides left and tilts
    .to(".hero-ring", {
      xPercent: -60,
      rotateX: 20,
      rotateZ: -15,
      duration: 1.5,
      ease: "power3.inOut"
    })
    // 3. Brand name emerges from inside the ring
    .fromTo(".hero-brand",
      { opacity: 0, xPercent: -30, scale: 0.9 },
      { opacity: 1, xPercent: 0, scale: 1.1, duration: 1.5, ease: "power3.out" },
      "-=1.2"
    )
    // 4. Ring fades out smoothly, brand centers and scales down
    .to(".hero-ring", { opacity: 0, scale: 0.8, duration: 1.2, ease: "power2.inOut" }, "+=0.8")
    .to(".hero-brand", { xPercent: 0, x: 0, scale: 1, duration: 1.5, ease: "power3.inOut" }, "-=1.2")
    // 5. Background image fades in
    .to(".hero-bg", { opacity: 0.35, duration: 2, ease: "power2.inOut" }, "-=1")
    // 6. CTA button appears with upward fade
    .fromTo(".hero-cta", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, 
      "-=1.5"
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center perspective-1000"
    >
      {/* Background Image - initially invisible */}
      {/* dark luxury jewelry showcase background */}
      <img 
        src="https://pixabay.com/get/g30cff5c36f2eeaa8c74ea03608ef8a60543a8e637bf7bcff15316799d46b25bedbd9f944d90f248e3879f8980d014c54ec7683466a49a4600f55e0043d33e534_1280.jpg"
        alt="Luxury Jewelry Background"
        className="hero-bg absolute inset-0 w-full h-full object-cover opacity-0"
      />
      <div className="hero-bg absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 opacity-0" />

      {/* Center Stage Container */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-5xl">
        
        {/* 3D Golden Ring Element */}
        <div className="hero-ring absolute preserve-3d w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border-[12px] md:border-[20px] border-transparent"
             style={{ 
               background: "linear-gradient(#000, #000) padding-box, linear-gradient(135deg, #d4af37 0%, #f5d77a 50%, #b8860b 100%) border-box",
               boxShadow: "0 0 60px rgba(212,175,55,0.3), inset 0 0 60px rgba(212,175,55,0.3)"
             }}
        >
          {/* Inner ring highlight */}
          <div className="absolute inset-2 border border-[#f5d77a]/30 rounded-full" />
        </div>

        {/* Brand Name */}
        <div className="hero-brand flex flex-col items-center justify-center relative z-20">
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif gold-gradient-text tracking-tighter leading-none text-center">
            REVA
          </h1>
          <p className="text-white tracking-[0.4em] uppercase text-sm md:text-xl mt-4 font-light">
            Jewels
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="hero-cta absolute bottom-24 z-20">
        <a 
          href="#collections"
          className="group relative inline-flex items-center justify-center px-10 py-4 font-sans uppercase tracking-[0.2em] text-sm text-white border border-[#d4af37]/50 hover:border-[#d4af37] transition-all duration-500 overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          <span className="relative">Explore Collection</span>
        </a>
      </div>
    </section>
  );
}
