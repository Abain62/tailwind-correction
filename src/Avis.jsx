import React from "react";
import OneAvis from "./OneAvis";

export default function Avis() {
  // tableau de données simulant la réponse de notre serveur
  const reviews = [
    {
      id: 1,
      name: "Sophie L.",
      review: "Super séjour ! Maison très propre et bien située.",
    },
    {
      id: 2,
      name: "Thomas B.",
      review: "Hôte très sympathique, je recommande à 100% !",
    },
    { id: 3, name: "Emma D.", review: "Excellente expérience, on reviendra." },
  ];
  return (
    <section class="flex flex-col flex-1 w-full h-50 w-150 content-start items-start gap-2 bg-gray-50">
      <div class="text-start px-6 pt-6">
        <h3 class="font-semibold text-2xl">Avis Clients</h3>
      </div>

      <div className="flex-row max-md:flex-col max-md:gap-5 max-md:w-full flex mt-5 pb-5 w-full ">
        {reviews.map((review) => (
          <OneAvis review={review} key={review.id} />
        ))}
      </div>
    </section>
  );
}
