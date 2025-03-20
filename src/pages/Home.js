import React, { useState } from "react";
import { Link } from "react-router-dom";

const restaurants = [
    { id: 1, name: "Briyani", image: "https://www.shutterstock.com/image-photo/hyderabadi-chicken-biryani-aromatic-flavorful-600nw-2497040151.jpg", rating: 8.5 },
    { id: 2, name: "Special Dosa", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvc2F8ZW58MHx8MHx8fDA%3D", rating: 4.2 },
    { id: 3, name: "Dark Cakes", image: "https://media.istockphoto.com/id/492428226/photo/black-forest-chocolate-cake-on-wooden-table.jpg?s=612x612&w=0&k=20&c=EizWzRYCoSfoPx-vDJIycRG2x6hltfR050mCQ7xrZgg=", rating: 7.5 },
    { id: 4, name: "Crispy Snacks", image: "https://t3.ftcdn.net/jpg/01/73/46/26/360_F_173462647_kCLLkyCw3jg9cTPXhc8D0sZ3H1VSaZvB.jpg", rating: 4.7 },
    { id: 5, name: "Fish Fry", image: "https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg", rating: 6.5 },
    { id: 6, name: "Sweets and Deserts", image: "https://i.ytimg.com/vi/ZuuDGI9e1T8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCtDNnLlRYQdRbPkfPnt7jVItvWeg", rating: 3.9 },
];

const menuItems = [
    // first id 1
  { id: 1, name: "Dham Biriyani",     price: 150, restaurantId: 1 },
  { id: 2, name: "Mattan Briyani",    price: 250, restaurantId: 1 },
    { id: 3, name: "Hyderabadi Biriyani",      price: 200, restaurantId: 1 },
    { id: 4, name: " Awadhi Biriyani",         price: 300, restaurantId: 1 },
    { id: 5, name: " Kolkata Biriyani", price: 100, restaurantId: 1 },
    { id: 6, name: "Malabar biryani", price: 350, restaurantId: 1 },
    { id: 3, name: "Lucknowi Biriyani",        price: 200, restaurantId: 1 },
    { id: 5, name: "Thalassery Biriyani",      price: 100, restaurantId: 1 },
    { id: 6, name: "Memoni Biriyani",          price: 350, restaurantId: 1 },



  { id: 3, name: "Pasta Alfredo", price: 200, restaurantId: 2 },
    { id: 4, name: "Masala Dosa", price: 300, restaurantId: 2 },
    { id: 5, name: "Onion Dosa", price: 100, restaurantId: 2 },
    { id: 6, name: "Ghee Roast", price: 350, restaurantId: 2 },
    { id: 3, name: "Rava Dosa", price: 200, restaurantId: 2 },
    { id: 4, name: "Mysore Masala Dosa", price: 300, restaurantId: 2 },
    {id: 5, name: "Neer Dosa", price: 100, restaurantId: 2 },
    { id: 6, name: "Set Dosa", price: 350, restaurantId: 2 },
    
    { id: 3, name: "Black Forest Cake", price: 200, restaurantId: 3 },
    { id: 4, name: "Red Velvet Cake", price: 300, restaurantId: 3 },
    { id: 5, name: "Vanilla Cake", price: 100, restaurantId: 3 },
    { id: 6, name: "Strawberry Cake", price: 350, restaurantId: 3 },
    { id: 3, name: "Pineapple Cake", price: 200, restaurantId: 3 },
    { id: 4, name: "Butterscotch Cake", price: 300, restaurantId: 3 },
    { id: 5, name: "Mango Cake", price: 100, restaurantId: 3 },
    { id: 6, name: "Blueberry Cake", price: 350, restaurantId: 3 },
  { id: 4, name: "Chocolate Cake", price: 300, restaurantId: 3 },



  { id: 5, name: "Crispy Fries", price: 100, restaurantId: 4 },
  { id: 6, name: "Onion Rings", price: 350, restaurantId: 4 },
  { id: 3, name: "Cheese Balls", price: 200, restaurantId: 4 },
  { id: 4, name: "Garlic Bread", price: 300, restaurantId: 4 },
  { id: 5, name: "Corn Fritters", price: 100, restaurantId: 4 },
  { id: 6, name: "Chicken Nuggets", price: 350, restaurantId: 4 },
  { id: 3, name: "Veg Spring Rolls", price: 200, restaurantId: 4 },
  { id: 4, name: "Paneer Tikka", price: 300, restaurantId: 4 },
  { id: 5, name: "Chilli Chicken", price: 100, restaurantId: 4 },
  { id: 6, name: "Fish Fry", price: 350, restaurantId: 4 },
  { id: 3, name: "Chicken 65", price: 200, restaurantId: 4 },
  { id: 4, name: "Gobi Manchurian", price: 300, restaurantId: 4 },
  { id: 5, name: "Chilli Paneer", price: 100, restaurantId: 4 },
  { id: 6, name: "Chicken Lollipop", price: 350, restaurantId: 4 },
  { id: 3, name: "Honey Chilli Potato", price: 200, restaurantId: 4 },
  { id: 5, name: "Crispy Fries", price: 100, restaurantId: 4 },


  { id: 6, name: "Fish Curry", price: 350, restaurantId: 5 },
  { id: 3, name: "Fish Fry", price: 200, restaurantId: 5 },
  { id: 4, name: "Fish Biryani", price: 300, restaurantId: 5 },
  { id: 5, name: "Fish Tikka", price: 100, restaurantId: 5 },
  { id: 6, name: "Prawn Curry", price: 350, restaurantId: 5 },
  { id: 3, name: "Prawn Fry", price: 200, restaurantId: 5 },
  { id: 4, name: "Prawn Biryani", price: 300, restaurantId: 5 },
  { id: 5, name: "Prawn Tikka", price: 100, restaurantId: 5 },
  { id: 6, name: "Crab Curry", price: 350, restaurantId: 5 },
  { id: 3, name: "Crab Fry", price: 200, restaurantId: 5 },


  { id: 7, name: "Gulab Jamun", price: 120, restaurantId: 6 },
  { id: 8, name: "Rasgulla", price: 150, restaurantId: 6 },
  { id: 9, name: "Jalebi", price: 100, restaurantId: 6 },
    { id: 10, name: "Rasmalai", price: 200, restaurantId: 6 },
    { id: 11, name: "Kaju Katli", price: 250, restaurantId: 6 },
    { id: 12, name: "Gajar Halwa", price: 300, restaurantId: 6 },
    { id: 13, name: "Kheer", price: 150, restaurantId: 6 },
    { id: 14, name: "Ladoo", price: 100, restaurantId: 6 },
    { id: 15, name: "Barfi", price: 200, restaurantId: 6 },
    { id: 16, name: "Peda", price: 250, restaurantId: 6 },
    { id: 17, name: "Modak", price: 300, restaurantId: 6 },        
];

const FoodOrderApp = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");

  const selectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setCart([]); // Clear cart when switching restaurants
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const placeOrder = () => {
    if (!address) {
      alert("Please enter a delivery address!");
      return;
    }
    alert("Order placed successfully! 🎉");
    setCart([]); // Clear cart after order
    setAddress(""); // Clear address field
  };

  return (
    <div>
      <header className="bg-[#5e175e] text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-lg">
        <p className="ml-20 mt-2 md:mt-0 md:ml-5 text-center text-3xl font-bold md:text-left">
          Order Home Food 
        </p>
        <div className="flex space-x-4">
          <div className="relative group">
            <Link to="/" className="underline font-bold text-white">Home</Link>
          </div>
          <div className="relative group">
            <Link to="/Recipes" className="text-white underline font-bold">Recipes</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/chefacademy" className="text-white text-font-bold underline font-bold">Contact</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/experts" className="text-white text-font-bold underline font-bold">Cook Experts</Link>
          </div>
        </div>
      </header>
      <div className="p-6">
        {/* Restaurant Listing */}
        {!selectedRestaurant ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Shrimathi Home Food</h2>
            <div className="grid grid-cols-3 gap-4">
              {restaurants.map((restaurant) => (
                <button 
                  key={restaurant.id} 
                  onClick={() => selectRestaurant(restaurant)}
                  className="bg-white p-4 shadow-lg rounded w-full text-left"
                >
                  <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded" />
                  <h3 className="text-xl mt-2">{restaurant.name}</h3>
                  <p className="text-gray-500">⭐ {restaurant.rating}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Back Button */}
            <button onClick={() => setSelectedRestaurant(null)} className="bg-gray-500 text-white px-4 py-2 rounded mb-4">
              ⬅ Back to Collection
            </button>

            {/* Restaurant Menu */}
            <h2 className="text-2xl font-bold mb-4">{selectedRestaurant.name} - Menu</h2>
            {menuItems.filter(item => item.restaurantId === selectedRestaurant.id).map((item) => (
              <div key={item.id} className="p-4 border-b flex justify-between">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
                <button onClick={() => addToCart(item)} className="bg-green-500 px-3 py-1 text-white rounded">
                  Add to Cart
                </button>
              </div>
            ))}

            {/* Order Summary */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Your Order</h2>
              <div className="p-4 bg-white shadow rounded">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <p>{item.name} - ₹{item.price}</p>
                      <button onClick={() => removeFromCart(index)} className="text-red-500">❌</button>
                    </div>
                  ))
                ) : (
                  <p>No items in cart</p>
                )}
                <p className="font-bold mt-2">Total: ₹{cart.reduce((total, item) => total + item.price, 0)}</p>
              </div>

              {/* Address and Checkout */}
              <div className="mt-4">
                <h3 className="text-xl font-bold">Delivery Address</h3>
                <input 
                  type="text" 
                  placeholder="Enter Address" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                  className="border p-2 w-full rounded mt-2" 
                />
                <h3 className="text-xl font-bold mt-4">Phone Number</h3>
                <input type="interger" placeholder="Phone Number" className="border p-2 w-full rounded mt-2" />
                <button 
                  onClick={placeOrder} 
                  className="bg-blue-500 px-4 py-2 text-white rounded mt-2 w-full"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold">Chef's Delight</h2>
            <p className="mt-2 text-gray-400">Bringing you the best recipes and culinary experiences.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="chefacademy" className="hover:text-yellow-400">About</a></li>
              <li><a href="Recipes" className="hover:text-yellow-400">Recipes</a></li>
              <li><a href="chefacademy" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400">Email: contact@chefdelight.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          <p>&copy; 2025 Chef's Delight. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FoodOrderApp;