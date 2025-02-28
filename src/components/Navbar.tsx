import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Navbar() {
  const cart = useStore((state) => state.cart);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            SOCH
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/category/ethnic" className="text-gray-600 hover:text-purple-600">
              Ethnic Wear
            </Link>
            <Link to="/category/western" className="text-gray-600 hover:text-purple-600">
              Western Wear
            </Link>
            <Link to="/category/accessories" className="text-gray-600 hover:text-purple-600">
              Accessories
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-purple-600">
              Blog
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-purple-600">
              <Search size={20} />
            </button>
            <Link to="/wishlist" className="text-gray-600 hover:text-purple-600">
              <Heart size={20} />
            </Link>
            <Link to="/account" className="text-gray-600 hover:text-purple-600">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-purple-600 relative">
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}