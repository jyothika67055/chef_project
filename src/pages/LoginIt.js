import React from 'react';

const LoginIt = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center">
       <a href="/" className="absolute top-4 left-4 bg-gray-800 opacity-20 text-white px-3 py-1 rounded-lg text-sm">
        Back to website →
          </a>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1343554309/photo/chef-tasting-food-and-showing-ok-sign.jpg?s=2048x2048&w=is&k=20&c=XU1zC0JhwBznpE2HD9YN3Z5zMuUD7Xmkm70p2o6tElc=')",
          opacity: 0.5,
        }}
      ></div>
      <div className="relative z-10 bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mt-3 bg-gray-700 rounded text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mt-3 bg-gray-700 rounded text-white"
        />
        <button className="w-full bg-blue-500 p-3 mt-5 rounded">Login</button>
        <p className="text-blue-300 text-sm mt-3 cursor-pointer text-center">
          Forgot your password?
        </p>
      </div>
    </div>
  );
};

export default LoginIt;