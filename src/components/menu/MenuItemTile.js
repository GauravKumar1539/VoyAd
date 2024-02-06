"use client";
import AddToCartButton from "@/components/menu/AddToCartButton";
import { useState } from 'react';

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;
  const [selectedSize, setCategory] = useState('');
  
  console.log(sizes);

  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;

  return (
    <div
      className="bg-gray-200 p-4 rounded-lg text-center
      group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all"
    >
      <div className="text-center">
        <img
          src={image}
          className="max-h-auto max-h-24 block mx-auto"
          alt=""
        />
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <select
        value={selectedSize}
        onChange={(ev) => setCategory(ev.target.value)}
      >
        <option value="">Select a size</option>
        {sizes?.length > 0 &&
          sizes.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
      </select>
      <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}
