import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl tracking-widest mb-6 text-[#d4af37]">REVA</h2>
            <p className="text-gray-400 font-light max-w-sm mb-6">
              Defining modern luxury through meticulous craftsmanship and extraordinary gems. A legacy of brilliance since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Collections</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Bridal</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">High Jewelry</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Fine Watches</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Gifts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 font-semibold">Customer Care</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Book an Appointment</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Reva Jewels. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
