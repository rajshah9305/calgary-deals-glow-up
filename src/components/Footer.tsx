
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Calgary Deals</span>
                <span className="text-xs text-gray-400 font-medium">PREMIUM</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your ultimate destination for finding the best big brand deals in Calgary. 
              Save money on your favorite sports and lifestyle brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/deals" className="text-gray-400 hover:text-orange-500 transition-colors">All Deals</a></li>
              <li><a href="/search" className="text-gray-400 hover:text-orange-500 transition-colors">Search</a></li>
              <li><a href="/wishlist" className="text-gray-400 hover:text-orange-500 transition-colors">Wishlist</a></li>
            </ul>
          </div>

          {/* Popular Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Brands</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Nike</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Adidas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Under Armour</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Puma</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Calgary, AB, Canada</li>
              <li className="text-gray-400">Find the best deals from top retailers</li>
              <li className="text-gray-400">Updated daily with fresh discounts</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Calgary Deals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
