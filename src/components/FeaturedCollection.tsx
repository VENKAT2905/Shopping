import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface FeaturedCollectionProps {
  title: string;
  products: Product[];
}

export function FeaturedCollection({ title, products }: FeaturedCollectionProps) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
          <a href="#" className="hidden text-sm font-medium text-purple-600 hover:text-purple-500 md:block">
            View Collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}