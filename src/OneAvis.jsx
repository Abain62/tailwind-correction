import React from "react";

// on récupère les données de chaque avis ce qui permet de rendre
// l'affichage dynamique
export default function OneAvis({ review }) {
  return (
    <div className="w-full h-auto max-md:w-auto bg-white p-4 mb-4 transition duration-300 ml-4 pl-2 shadow-xl h-21 max-md:25 mx-3 rounded-xl hover:cursor-pointer hover:scale-105 hover:shadow-2xl">
      <div className="review-info">
        <h2 className="review-name" class="font-semibold px-2 py-2">
          {review.name}
        </h2>
        <p className="review-review" class="text-gray-500 px-2">
          {review.review}
        </p>
      </div>
    </div>
  );
}
