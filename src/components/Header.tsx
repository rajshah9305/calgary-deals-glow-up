
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-black">Calgary Deals</span>
            <span className="text-xs text-muted-foreground font-medium">PREMIUM</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium text-black hover:text-orange-500 transition-colors">
            Home
          </a>
          <a href="/deals" className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors">
            All Deals
          </a>
          <a href="/search" className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors">
            Search
          </a>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for deals, brands..."
              className="pl-10 pr-4 bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-black hover:text-orange-500">
            Sign In
          </Button>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white font-medium">
            Sign Up
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
