import React from "react";

// on récupère les données de chaque logement ce qui permet de rendre
// l'affichage dynamique
export default function OneLogement({ listing }) {
  return (
    <div
      className="product-card"
      class="bg-white ml-5 pl-2 shadow-xl h-70 min-w-62.5 mx-3 rounded-xl hover:cursor-pointer"
    >
      <img
        src={listing.image}
        alt={listing.title}
        className="product-image"
        class="h-40 w-55 rounded-xl mx-auto mt-4 object-cover"
      />
      <div className="product-info" class="ml-4 pt-3">
        <h2 className="product-name" class="font-semibold text-lg">
          {listing.title}
        </h2>
        <p className="product-location" class="text-gray-500">
          {listing.location}
        </p>
        <p className="product-price" class="text-orange-600 font-bold">
          {listing.price}
        </p>
      </div>
    </div>
  );
}
