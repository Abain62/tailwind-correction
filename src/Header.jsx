const Header = () => {
  return (
    <header className="bg-white shadow-lg flex h-15 w-full pl-4 justify-between items-center">
      <div class="basis-52 text-start text-xl text-orange-600">
        <h2 class="font-bold">Airbed & Breakfast</h2>
      </div>
      <ul class="flex mr-5 justify-end gap-x-5 text-gray-500 hidden md:flex">
        <li class="basis-20 hover:text-black cursor-pointer">Maisons</li>
        <li class="basis-20 hover:text-black cursor-pointer">Appartements</li>
        <li class="basis-20 hover:text-black cursor-pointer">Villas</li>
      </ul>

      <button className="md:hidden mr-5 flex flex-col justify-center w-6 h-6 gap-1">
        <div className="w-5 h-0.5 bg-gray-500"></div>
        <div className="w-5 h-0.5 bg-gray-500"></div>
        <div className="w-5 h-0.5 bg-gray-500"></div>
      </button>
    </header>
  );
};

export default Header;
