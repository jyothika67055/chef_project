import React from "react";
import start from './start_from_basic.png';
import img2 from './Advanced.png';
import img3 from './international.png';
import img4 from './food1.png';
import img5 from './food2.png';
import img6 from './food3.png';

const ChefAcademy = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex flex-col justify-between">

      <header className="bg-white shadow-md py-5 px-9 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="info@italianchefscademy.it" className="text-red-500">Mail: info@italianchefscademy.it</a>
          <span>Phone: 06 3349 6189</span>
          <span>Whatsapp: (+91) 6363948815</span>
        </div>
        <div className="space-x-4">
          <span className="ml-3 text-lg font-bold mt-6" style={{ fontFamily: 'revert-layer' }}>Progress Chef Manage</span>
        </div>
      </header>


      <main className="flex-grow flex flex-col justify-center items-center text-center py-12 px-6">
        <h1 className="text-6xl font-bold mb-4">International Dishes</h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          International cuisine is celebrated worldwide through various prestigious awards that recognize exceptional dishes and their cultural significance. Thailand’s Phanaeng Curry, a creamy and spicy delight made with coconut milk, also featured among the top five. Additionally, Black Cod with Miso, a fusion of Japanese and Peruvian flavors popularized by chef Nobuyuki Matsuhisa, gained global acclaim for its culinary innovation. These dishes not only showcase exquisite flavors but also highlight the diverse culinary traditions celebrated worldwide.
        </p>

        <h2 className="text-4xl font-semibold mb-6">Dishes gained global recognition</h2>
        <p className="mb-8 text-lg">Feb 23 - May 6</p>

   
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src={start} alt="Start from basic" className="rounded-lg shadow-md h-48 w-48" />
            <p className="mt-2 font-bold text-1xl">Gordon Ramsay</p>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src={img2} alt="Advanced" className="rounded-lg shadow-md h-48 w-48" />
            <p className="mt-2 font-bold text-1xl">Nobu Matsuhisa</p>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src={img3} alt="International" className="rounded-lg shadow-md h-48 w-48" />
            <p className="mt-2 font-bold text-1xl">Bun Maditory</p>
          </div>
        </div>

        <br></br>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src={img4} alt="Start from basic" className="rounded-lg shadow-md h-48 w-48" />
            <p className="mt-2 font-bold text-1xl">Cacio e Pepe</p>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src={img6} alt="International" className="rounded-lg shadow-md h-48 w-48" />
            <p className="mt-2 font-bold text-1xl">Omakase Sushi</p>
          </div>
          <div className="transform transition-transform duration-300 hover:scale-105">
            <img src={img5} alt="Advanced" className="rounded-lg shadow-md h-48 w-48" />
            <p className="mt-2 font-bold text-1xl">Chocolate Bomb</p>
          </div>
        </div>
      </main>


      <footer className="bg-white py-6 text-center text-sm border-t">
        <p>Expat Deli (Aus) Pty Ltd &copy; 2008 Expat Deli. All Rights Reserved</p>
        <p className="mt-2">Your details are safe with us</p>
      </footer>
    </div>
  );
};

export default ChefAcademy;
