import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart size={20} className="text-gray-600" />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">
          <Link to={`/product/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <p className="mt-1 text-sm font-medium text-gray-900">₹{product.price}</p>
      </div>
    </div>
  );
}