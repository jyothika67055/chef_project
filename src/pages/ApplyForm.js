import React, { useState } from 'react';
// import img2 from './food2_img.jpg';
import { Link } from 'react-router-dom';
// import img1 from './logo_bg_remove.png';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <>
      <nav className="bg-[#932093] p-4 text-white flex justify-between">
        <a className="text-xl font-bold" href="#">Chef Application</a>
        <div className="flex space-x-4 text-white">
          <Link to="/" className="underline font-bold text-white">Home</Link>
          <Link to="/Recipes" className="text-white underline font-bold">Recipes</Link>
          <Link to="/login" className="text-white underline font-bold">Sign In</Link>
        </div>
      </nav>

      <div className="container mx-auto mt-10 p-6 max-w-lg shadow-lg rounded-lg bg-white">
        <h2 className="text-2xl font-bold mb-4">Apply as a Chef</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block font-medium">First Name</label>
            <input type="text" name="firstName" className="w-full p-2 border rounded" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="block font-medium">Last Name</label>
            <input type="text" name="lastName" className="w-full p-2 border rounded" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="block font-medium">Email ID</label>
            <input type="email" name="email" className="w-full p-2 border rounded" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="block font-medium">Phone Number</label>
            <input type="tel" name="phone" className="w-full p-2 border rounded" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="block font-medium">Upload Resume</label>
            <input type="file" name="resume" className="w-full p-2 border rounded" accept=".pdf,.doc,.docx" onChange={handleChange} required />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
        
      </div>
      <br></br>
      
      <footer class="bg-[#390d39] text-white py-10">
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
    </>
  );
};

export default ApplyForm;