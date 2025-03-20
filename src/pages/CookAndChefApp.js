import React from "react";
import img from './add_salt.avif';
import img1 from './logo_bg_remove.png';
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "John Doe",
    role: "Head Chef",
    image: "https://storage.googleapis.com/a1aa/image/Yo1mBIcOKfA1MSHOC_bjs_umaiQ8iDpGdYdPHIZ5RTA.jpg",
    description: "John is a seasoned chef with over 20 years of experience in the culinary industry. He specializes in Italian and French cuisine."
  },
  {
    name: "Jane Smith",
    role: "Pastry Chef",
    image: "https://storage.googleapis.com/a1aa/image/iQNHeGqqMXznc3ZpqEgm-Y4a2sCp7Z0uf1-Jo0-cb_s.jpg",
    description: "Jane is a talented pastry chef known for her exquisite desserts and pastries. She has won several awards for her innovative creations."
  },
  {
    name: "Mike Johnson",
    role: "Sous Chef",
    image: "https://storage.googleapis.com/a1aa/image/s78bDzx0dajJkUzKiXouFfP9FHb6dTGN2L2unZFTRtA.jpg",
    description: "Mike is a skilled sous chef who assists in the preparation and presentation of dishes. He is passionate about creating delicious and visually appealing meals."
  },
  {
    name: "Chef Akash",
    role: "Master Chef",
    image: "https://images.prestigeonline.com/wp-content/uploads/sites/4/2021/01/07141341/gordon-ramsay-masterclass-ft-blog0918-1200x900.jpg",
    description: "a professional cook who leads a kitchen team, overseeing all aspects of food preparation, and ensuring the quality of every dish served"
  },
];

const TeamMember = ({ member }) => {
  return (
    <div className="border shadow-lg rounded-lg p-4 bg-white transition duration-300 ease-in-out transform hover:scale-105">
      <div className="p-4 text-center">
        <img src={member.image} alt={member.name} className="w-24 h-24 object-cover mb-4 mx-auto rounded-full" />
        <h2 className="text-2xl font-medium">{member.name}</h2>
        <p className="text-gray-600">{member.role}</p>
        <p className="text-gray-700 mt-2">{member.description}</p>
      </div>
    </div>
  );
};
const CookAndChefApp = () => {
  const newLocal = (
    <div className="flex items-center mt-0">
      <img src={img1} alt="logo" className="h-12 w-12 " />
      <span className="ml-2 text-lg font-bold mt-6" style={{ fontFamily: 'Gim NightShade' }}>Progress Chef Manage</span>
    </div>
  );
  return (
    <div className="bg-white min-h-screen text-black">
      <header className="bg-[#cc3bcc] text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-lg">
        {newLocal}
        <p className="ml-20 mt-2 md:mt-0 md:ml-5 text-center md:text-left">
          Create unforgettable dining experiences.
        </p>
        <div className="md:mt-2 flex space-x-2">
          <Link to="/apply" className="bg-white text-black hover:bg-red-600 px-4 py-2 rounded mt-1 transition duration-300 ease-in-out transform hover:scale-105">Apply</Link>
        </div>
      </header>
      <div className="font-roboto">
        <header className="border-b">
          <div className="container mx-auto flex justify-between items-center py-4">
            <div className="text-red-600 text-3xl font-bold">Global Bites </div>
            <div className="flex space-x-4">
            <Link to="/recipe" className="bg-white  text-black hover:bg-red-600 px-4 py-2 rounded mt-1 transition duration-300 ease-in-out font-bold  transform hover:scale-105"><button>Good Recipe</button></Link>
              <Link to="/login" className="bg-white  text-black hover:bg-red-600 px-4 py-2 rounded mt-1 transition duration-300 ease-in-out transform hover:scale-105 font-bold"><button>Sign In</button></Link>
            </div>
          </div>
          <nav className="border-t">
            <div className="container mx-auto flex justify-between items-center py-2">
              <div className="flex space-x-4">
              <div className="relative group">
                  <Link to="/" className="text-gray-700 underline font-bold">Home</Link>
                </div>
                <div className="relative group">
                  <Link to="/Recipes" className="text-gray-700 underline font-bold">Recipes</Link>
                </div>
                <div className="flex space-x-4">
              <Link to="/chefacademy" className="text-gray-700 text-font-bold underline font-bold">Contact</Link>
            </div>
            <div className="flex space-x-4">
              <Link to="/experts" className="text-gray-700 text-font-bold underline font-bold"> Cook Experts</Link>
            </div>
              </div>
              <div className="relative">
                <input className="border rounded-full px-4 py-1" type="text" placeholder='Search for "Chef"' />
              </div>
            </div>
          </nav>
        </header>
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto flex items-center space-x-4">
            <div className="bg-red-600 text-white p-2 rounded">
              <i className="fas fa-e"></i>
            </div>
            <div className="text-gray-700">
              Unlock access to over 50,000+ expertly tested recipes. <Link to="/chefacademy" className="text-red-600 underline">Explore what's new ›</Link>
            </div>
          </div>
        </div>
        <main className="container mx-auto py-8">
          <div className="text-center">
            <div className="text-red-600 font-bold">Global Bites</div>
            <h1 className="text-4xl font-bold mt-2">About Global Bites</h1>
            <div className="my-4">
              <img className="mx-auto" src="https://media.istockphoto.com/id/1053423374/photo/coconut-chicken-in-a-spicy-cream-sauce-close-up-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=ROQpgzQqLsMnX4IGkrsrKJCOfz7-0P41K3nKKzgN_Pg=" alt="Epicurious logo" width="500" height="500" />
            </div>
            <div className="text-gray-700 font-bold">BY THE EDITORS OF GLOBAL BITES</div>
            <div className="text-gray-500">The art and science of preparing food for consumption by applying heat, which involves combining ingredients, using various techniques like boiling, baking, grilling, or roasting, to make food more palatable, digestible, and nutritious, often reflecting local cultures and traditions in its methods and ingredients. Cooking is an aspect of all human societies and a cultural universal The fundamental purpose of food webs is to describe feeding relationship among species in a community. Food webs can be constructed to describe the species interactions.</div>
          </div>
        </main>
      </div>

      <section className="relative bg-gray-900 text-white text-center py-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="relative z-10 mh-0">
          <h2 className="text-7xl font-extrabold animate-pulse" style={{ fontFamily: 'Gim NightShade' }}>Find a cook online</h2><br></br>
          <p className="md-0 text-2xl" style={{ fontFamily: 'Gim NightShade' }}>
            from a vast pool of over 50,000 culinary experts,
            specializing in a diverse array of cuisines. <br></br>
            The art of cooking is constantly evolving, blending tradition with innovation, <br></br>as chefs worldwide embrace new techniques, bold flavors, <br></br>and modern culinary trends.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link to="/Book" className="bg-pink-500 hover:bg-white text-black px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 font-bold">BookChef</Link>
            <Link to="/Home" className="bg-pink-500 hover:bg-white text-black px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 font-bold">HomeFood</Link>
          </div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="py-14 px-4 bg-white">
        <h3 className="text-3xl font-semibold text-center text-black">Meet Our Team</h3>
        <div className="mt-6 grid md:grid-cols-4 gap-4 max-h-3xl max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-200">
        <h3 className="text-3xl font-semibold text-center text-black">Cook Types</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-9 max-h-8xl max-w-4xl mx-auto">
          <div className="border shadow-lg rounded-lg p-4 bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 max-h-8xl">
              <p className="text-2xl font-medium text-center">👨‍🍳Chef</p>
              <p className="text-center">
                A chef is a professional cook responsible for preparing meals. Chefs work in various settings, such as restaurants, hotels, cruise ships
              </p>
            </div>
          </div>
          <div className="border shadow-lg rounded-lg p-4 bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 text-center">
              <p className="text-2xl font-medium text-center">🍽️Quality Cooking</p>
              <p className="text-center">
                They ensure that food is cooked in large quantities while
                maintaining quality.
              </p>
            </div>
          </div>
          <div className="border shadow-lg rounded-lg p-4 bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 text-center">
              <p className="text-2xl font-medium text-center">🏠Home Catering</p>
              <p className="text-center">They cater to dietary preferences and household needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-[#904390]">
        <h3 className="text-3xl font-semibold text-center text-white">What Our Customers Say</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-9 max-h-8xl max-w-4xl mx-auto">
          <div className="border shadow-lg rounded-lg p-4 bg-white transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 max-h-8xl">
              <p className="text-2xl font-medium text-center">👍Excellent Service</p>
              <p className="text-center">
                I was blown away by the quality of the cooks and the service they provided. Highly recommend!
              </p>
            </div>
          </div>
          <div className="border shadow-lg rounded-lg p-4 bg-white transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 text-center">
              <p className="text-2xl font-medium text-center">👌Delicious Food</p>
              <p className="text-center">
                The food was amazing and the presentation was top-notch. I will definitely be using this service again.
              </p>
            </div>
          </div>
          <div className="border shadow-lg rounded-lg p-4 bg-white transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 text-center">
              <p className="text-2xl font-medium text-center">👍Friendly Staff</p>
              <p className="text-center">The staff were friendly and accommodating. They made sure that all my needs were met.</p>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-gray-900 text-white py-10">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
       
        <div>
            <h2 class="text-2xl font-bold">Chef's Delight</h2>
            <p class="mt-2 text-gray-400">Bringing you the best recipes and culinary experiences.</p>
        </div>
        
  
        <div>
            <h3 class="text-xl font-semibold mb-3">Quick Links</h3>
            <ul class="space-y-2">
                <li><a href="#" class="hover:text-yellow-400">Home</a></li>
                <li><a href="chefacademy" class="hover:text-yellow-400">About</a></li>
                <li><a href="Recipes" class="hover:text-yellow-400">Recipes</a></li>
                <li><a href="chefacademy" class="hover:text-yellow-400">Contact</a></li>
            </ul>
        </div>
        <div>
            <h3 class="text-xl font-semibold mb-3">Contact Us</h3>
            <p class="text-gray-400">Email: contact@chefdelight.com</p>
            <p class="text-gray-400">Phone: +123 456 7890</p>
            <div class="mt-4 flex justify-center md:justify-start space-x-4">
                <a href="#" class="text-gray-400 hover:text-yellow-400 text-2xl"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-gray-400 hover:text-yellow-400 text-2xl"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-gray-400 hover:text-yellow-400 text-2xl"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </div>
    <div class="text-center mt-8 text-gray-500">
        <p>&copy; 2025 Chef's Delight. All Rights Reserved.</p>
    </div>
</footer>

    </div>
  );
};

export default CookAndChefApp;
