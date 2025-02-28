import React from 'react';
import { FeaturedCollection } from '../components/FeaturedCollection';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Floral Print Anarkali',
    description: 'Beautiful floral print anarkali suit with embroidered details',
    price: 4999,
    images: ['https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80'],
    category: 'Ethnic Wear',
    subcategory: 'Anarkali Suits',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Blue'],
    fabric: 'Georgette',
    careInstructions: 'Dry clean only',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Designer Saree',
    description: 'Elegant designer saree with intricate embroidery',
    price: 7999,
    images: ['https://images.unsplash.com/photo-1583391733975-0a131c8db4ec?auto=format&fit=crop&q=80'],
    category: 'Ethnic Wear',
    subcategory: 'Sarees',
    sizes: ['Free Size'],
    colors: ['Red', 'Green'],
    fabric: 'Silk',
    careInstructions: 'Dry clean only',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Contemporary Jumpsuit',
    description: 'Modern jumpsuit with elegant design',
    price: 3999,
    images: ['https://images.unsplash.com/photo-1583391733912-8ee5c451b1f5?auto=format&fit=crop&q=80'],
    category: 'Western Wear',
    subcategory: 'Jumpsuits',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy'],
    fabric: 'Crepe',
    careInstructions: 'Machine wash cold',
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Statement Necklace',
    description: 'Handcrafted statement necklace',
    price: 1999,
    images: ['https://images.unsplash.com/photo-1583391733928-0ee4582b6c4e?auto=format&fit=crop&q=80'],
    category: 'Accessories',
    subcategory: 'Jewelry',
    sizes: ['One Size'],
    colors: ['Gold'],
    fabric: 'N/A',
    careInstructions: 'Store in jewelry box',
    inStock: true,
    featured: true
  }
];

export function HomePage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1589810635657-232948472d98?auto=format&fit=crop&q=80"
            alt="Fashion Collection"
          />
          <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            New Summer Collection
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-100">
            Discover our latest collection featuring stunning ethnic and western wear perfect for every occasion.
          </p>
          <div className="mt-10">
            <a
              href="#featured"
              className="inline-block bg-purple-600 py-3 px-8 rounded-md text-white font-medium hover:bg-purple-700"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/category/ethnic" className="relative rounded-lg overflow-hidden">
            <div className="h-80 w-full">
              <img
                src="https://images.unsplash.com/photo-1583391733912-8ee5c451b1f5?auto=format&fit=crop&q=80"
                alt="Ethnic Wear"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Ethnic Wear</h3>
            </div>
          </a>
          <a href="/category/western" className="relative rounded-lg overflow-hidden">
            <div className="h-80 w-full">
              <img
                src="https://images.unsplash.com/photo-1583391733975-0a131c8db4ec?auto=format&fit=crop&q=80"
                alt="Western Wear"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Western Wear</h3>
            </div>
          </a>
          <a href="/category/accessories" className="relative rounded-lg overflow-hidden">
            <div className="h-80 w-full">
              <img
                src="https://images.unsplash.com/photo-1583391733928-0ee4582b6c4e?auto=format&fit=crop&q=80"
                alt="Accessories"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Accessories</h3>
            </div>
          </a>
        </div>
      </div>

      {/* Featured Collection */}
      <div id="featured">
        <FeaturedCollection title="Featured Collection" products={FEATURED_PRODUCTS} />
      </div>
    </div>
  );
}