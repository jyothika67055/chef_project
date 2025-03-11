import React from 'react';

function LearnMore() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <div className="container mx-auto mt-6 px-6 py-12 bg-white bg-opacity-90 rounded-lg shadow-2xl">
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-900 drop-shadow-lg">Learn More About Our Renowned Chefs</h2>
        <p className="text-lg text-center mb-6 text-gray-800">
          Here you can find more detailed information about our renowned chefs, their culinary journeys, and their signature dishes.<br></br> Our chefs are passionate about creating unique and delicious meals that will leave you wanting more.
        </p>
        <p className="text-lg text-center mb-6 text-gray-800">
          Each chef brings a unique flavor and style to the culinary world, and we are proud to showcase their talents.<br></br> From traditional dishes to modern twists, our chefs are always pushing the boundaries of culinary excellence.
        </p>
        <p className="text-lg text-center mb-6 text-gray-800">
          Stay tuned for more updates and delicious recipes from our chefs! We will be sharing behind-the-scenes stories, cooking tips, and <br></br>exclusive interviews with our chefs, so be sure to check back often.
        </p>
        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Chef Matt Moran</h3>
              <p className="text-lg mb-4 text-gray-700">
                Chef Matt Moran is a renowned Australian chef and restaurateur. He has worked in some of the top restaurants in Australia and has also opened his own restaurant, Aria, which has won multiple awards.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Chef Moran is known for his passion for using fresh, local ingredients and his commitment to sustainability. He has also been a judge on several cooking shows and has written several cookbooks.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Chef Rachael Ray</h3>
              <p className="text-lg mb-4 text-gray-700">
                Chef Rachael Ray is a celebrated American chef, author, and television personality. She has written several bestselling cookbooks and has hosted several cooking shows, including "30 Minute Meals" and "Rachael Ray's Kids Cook-Off".
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Chef Ray is known for her warm and engaging personality, as well as her emphasis on using fresh, seasonal ingredients. She has also been a vocal advocate for healthy eating and has worked with several charitable organizations to promote nutrition education.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Chef Ben Shewry</h3>
              <p className="text-lg mb-4 text-gray-700">
                Chef Ben Shewry is a highly acclaimed Australian chef and restaurateur. He is the owner and head chef of Attica, a restaurant in Melbourne that has been named one of the best restaurants in the world.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Chef Shewry is known for his innovative and creative approach to cooking, as well as his commitment to using local and sustainable ingredients. He has also been a judge on several cooking shows and has written several cookbooks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;