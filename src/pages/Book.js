import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample data for chefs
const teamMembers = [
  {
    name: "John Doe",
    role: "Head Chef",
    price: "$9000 per day",
    image: "https://storage.googleapis.com/a1aa/image/Yo1mBIcOKfA1MSHOC_bjs_umaiQ8iDpGdYdPHIZ5RTA.jpg",
    description: "John is a seasoned chef with over 20 years of experience in the culinary industry."
  },
  {
    name: "Jane Smith",
    role: "Pastry Chef",
    price: "$19000 for 4day",
    image: "https://storage.googleapis.com/a1aa/image/iQNHeGqqMXznc3ZpqEgm-Y4a2sCp7Z0uf1-Jo0-cb_s.jpg",
    description: "Jane is known for her exquisite desserts and has won awards for her innovative pastries."
  },
  {
    name: "Mike Johnson",
    role: "Sous Chef",
    price: "$4000 per day",
    image: "https://storage.googleapis.com/a1aa/image/s78bDzx0dajJkUzKiXouFfP9FHb6dTGN2L2unZFTRtA.jpg",
    description: "Mike is a skilled sous chef who helps prepare delicious and visually appealing meals."
  },
  {
    name: "Mike Johnson",
    role: "Sous Chef",
    price: "$9000 for 2 days",
    image: "https://img.freepik.com/premium-photo/cuisine-expert-chef_207634-10767.jpg",
    description: "Mike is a skilled sous chef who helps prepare delicious and visually appealing meals."
  },
  {
    name: "Mike Johnson",
    role: "Sous Chef",
    price: "97000 per day",
    image: "https://img.freepik.com/premium-photo/chef-work_53419-7642.jpg",
    description: "Mike is a skilled sous chef who helps prepare delicious and visually appealing meals."
  },
  {
    name: "Mike Johnson",
    role: "Sous Chef",
    price: "$3000 per day",
    image: "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Mike is a skilled sous chef who helps prepare delicious and visually appealing meals."
  },
];

// New sample data for the second row of chefs
const additionalTeamMembers = [
  {
    name: "Alice Brown",
    role: "Grill Chef",
    price: "$8000 per day",
    image: "https://images.stockcake.com/public/2/d/e/2de98e64-bed7-466a-9dbc-0ff69a1c011c_large/expert-chef-posing-stockcake.jpg",
    description: "Alice is an expert in grilling and has over 15 years of experience."
  },
  {
    name: "Bob White",
    role: "Sushi Chef",
    price: "$12000 per day",
    image: "https://img.freepik.com/premium-photo/happy-female-chef_102671-4560.jpg",
    description: "Bob is a master sushi chef with a passion for creating beautiful and delicious sushi."
  },
  {
    name: "Charlie Green",
    role: "Vegetarian Chef",
    price: "$5000 per day",
    image: "https://www.kindafrugal.com/wp-content/uploads/2024/03/%E2%80%8Ecooking.%E2%80%8E001.jpeg",
    description: "Charlie specializes in vegetarian cuisine and has won multiple awards for his dishes."
  },
  {
    name: "Diana Black",
    role: "Dessert Chef",
    price: "$10000 per day",
    image: "https://img.freepik.com/premium-photo/chef-demonstrating-expert-knife-skills-while-preparing-vegetables-professional-kitchen_661047-33445.jpg",
    description: "Diana is known for her creative and delicious desserts."
  },
  {
    name: "Eve Blue",
    role: "Seafood Chef",
    price: "$11000 per day",
    image: "https://img.freepik.com/premium-photo/chef-kitchen-cooking-food-with-flames-background_1006603-6842.jpg",
    description: "Eve is an expert in seafood cuisine with over 10 years of experience."
  },
  {
    name: "Frank Yellow",
    role: "BBQ Chef",
    price: "$7000 per day",
    image: "https://img.freepik.com/premium-photo/chef-cooking-kitchen-with-flames-background_1006603-7048.jpg?w=360",
    description: "Frank is a BBQ specialist known for his mouth-watering BBQ dishes."
  },
  
  
];

const App = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedChef, setSelectedChef] = useState(null);

  const handleChefClick = (chef) => {
    setSelectedChef(chef);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for Chef ${selectedChef.name}!`);
  };

  return (
    <div className="bg-white min-h-screen text-black">
      {/* Navbar */}
      <nav className="bg-[#5c195c] text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">Chef Booking</h1>
       <div className="md:mt-2 flex space-x-2">
                 <Link to="/apply" className="bg-white text-black hover:bg-red-600 px-4 py-2 rounded mt-1 transition duration-300 ease-in-out transform hover:scale-105">Apply</Link>
               </div>
      </nav>

      {/* Scrolling Text */}
      <section className=" bg-[#942894] py-4">
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-marquee py-2">
            <span className="px-8">👨‍🍳We offer the best chefs for your events!</span>
            <span className="px-8">🏠Book a professional chef today!</span>
            <span className="px-8">🍽️Make your occasion memorable with expert chefs!</span>
          </div>
        </div>
      </section>

      {/* Booking Form (Hidden Initially) */}
      {showBookingForm && selectedChef && (
        <div className="fixed  bottom-0 w-50 right-0 center-0 bg-[#5c195c] text-white p-4 z-50 radius-lg shadow-2xl to-transparent">
          <h2 className="text-2xl font-extrabold ">Book Chef {selectedChef.name}</h2>
          <form onSubmit={handleBookingSubmit} className="mt-4">
            <div>
              <label htmlFor="name" className="block font-bold">Your Name</label>
              <input
                type="text"
                id="name"
                required
                className="p-2 w-full rounded-lg mt-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="date" className="block font-bold">Preferred Date</label>
              <input
                type="date"
                id="date"
                required
                className="p-2 w-full rounded-lg mt-2 text-black"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block font-bold">Email</label>
              <input
                type="email"
                id="email"
                required
                className="p-2 w-full rounded-lg mt-2 text-black"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="number" className="block font-bold ">Phone Number</label>
              <input
                type="integer"
                id="number"
                required
                className="p-2 w-full rounded-lg mt-2 text-black"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="Address" className="block font-bold">Address</label>
              <input
                type="address"
                id="address"
                required
                className="p-2 w-full rounded-lg mt-2 text-black"
              />
               <div className="mt-4">
              <label htmlFor="specialRequests" className="block font-bold">Special Requests</label>
              <textarea
                id="specialRequests"
                className="p-2 w-full rounded-lg mt-2 text-black"
                placeholder="Enter any special requests"
              />
            </div>
            </div>
            <button type="submit" className="bg-[#771d77] text-white px-6 py-2 mt-4 font rounded-lg">
              Confirm Booking
            </button>
          </form>
        </div>
      )}

      {/* Chef Cards Section */}
      <section className="py-14 px-4 bg-gray-200">
        <h3 className="text-3xl text-center font-bold text-black">Book Our Experts Chef</h3>
        <div className="mt-6 flex overflow-x-auto py-4">
          {teamMembers.map((chef, index) => (
            <div
              key={index}
              className="inline-block w-64 p-4 bg-white rounded-lg shadow-lg mx-2 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => handleChefClick(chef)}
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-center">{chef.name}</h3>
              <p className="text-center text-gray-600">{chef.role}</p>
              <p className="text-center text-gray-600">{chef.price}</p> {/* Added price */}
            </div>
          ))}
        </div>
        <div className="mt-6 flex overflow-x-auto py-4">
          {additionalTeamMembers.map((chef, index) => (
            <div
              key={index}
              className="inline-block w-64 p-4 bg-white rounded-lg shadow-lg mx-2 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => handleChefClick(chef)}
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-center">{chef.name}</h3>
              <p className="text-center text-gray-600">{chef.role}</p>
              <p className="text-center text-gray-600">{chef.price}</p> {/* Added price */}
            </div>
          ))}
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

export default App;