import React from "react";

export default function Footer() {
  return (
    <footer class="flex flex-row flex-wrap basis-40 max-md:flex-col justify-evenly  items-center max-md:items-start bg-gray-800 mt-auto ">
      <div class="flex flex-col max-md:py-5 max-md:ml-10 ">
        <h3 class="text-amber-50 font-bold text-lg mb-4">À propos</h3>
        <p class="text-amber-50">
          Nous aidons les voyageurs à trouver le logement idéal.
        </p>
      </div>
      <div class="flex flex-col max-md:py-5 max-md:ml-10">
        <h3 class="text-amber-50 font-bold text-lg mb-4">Support</h3>
        <p class="text-amber-50 hover: cursor-pointer hover:underline">
          Contact
        </p>
        <p class=" text-amber-50 hover: cursor-pointer hover:underline">FAQ</p>
      </div>
      <div class="flex flex-col max-md:py-5 max-md:ml-10">
        <h3 class="text-amber-50 font-bold mb-4 text-lg">Suivez-nous</h3>
        <p class="text-amber-50 hover: cursor-pointer hover:underline">
          Facebook
        </p>
        <p class="text-amber-50 hover: cursor-pointer hover:underline">
          Instagram
        </p>
      </div>
      <div class="flex flex-col text-lg max-md:py-5 max-md:ml-10">
        <h3 class="text-amber-50 font-bold mb-4">Mentions légales</h3>
        <p class="text-amber-50 hover: cursor-pointer hover:underline">
          Conditions générales
        </p>
        <p class="text-amber-50 hover: cursor-pointer hover:underline">
          Politique de confidentialité
        </p>
      </div>
    </footer>
  );
}
