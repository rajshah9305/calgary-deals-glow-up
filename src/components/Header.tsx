
import { Search, ShoppingBag, User, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Enhanced with better spacing */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white shadow-lg shadow-orange-500/25">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-black tracking-tight">Calgary Deals</span>
              <span className="text-xs text-orange-600 font-semibold tracking-widest uppercase">Premium</span>
            </div>
          </div>

          {/* Navigation - Enhanced typography */}
          <nav className="hidden lg:flex items-center gap-12">
            <a href="/" className="text-base font-semibold text-black hover:text-orange-600 transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/deals" className="text-base font-medium text-gray-600 hover:text-orange-600 transition-all duration-300 relative group">
              All Deals
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/search" className="text-base font-medium text-gray-600 hover:text-orange-600 transition-all duration-300 relative group">
              Search
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Enhanced Search Bar */}
          <div className="hidden xl:flex flex-1 max-w-lg mx-12">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-600 transition-colors" />
              <Input
                placeholder="Search premium deals, brands..."
                className="pl-12 pr-4 h-12 bg-gray-50/50 border-0 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:shadow-lg transition-all duration-300 rounded-2xl text-base"
              />
            </div>
          </div>

          {/* Actions - Enhanced with better spacing */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium px-6 py-2 rounded-xl transition-all">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105">
              Sign Up
            </Button>
            <Button variant="ghost" size="sm" className="lg:hidden p-2">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
