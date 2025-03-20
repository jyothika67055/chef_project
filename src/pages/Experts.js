import React from 'react';
import { Link } from 'react-router-dom';  

function Main() {
  const chefs = [
    {
      name: "Chef Matt Moran",
      image: "https://storage.googleapis.com/a1aa/image/Yo1mBIcOKfA1MSHOC_bjs_umaiQ8iDpGdYdPHIZ5RTA.jpg",
      bio: "From farm boy to successful chef, Matt was raised on a dairy farm before leaving school at 15 to pursue his career in food. He has worked for many of the top restaurants in Australia and has also opened his own restaurant, Aria, which has won multiple awards. Trained under top chefs like Marco Pierre White and Albert Roux, he later opened a chain of successful restaurants globally."
    },
    {
      name: "Hell's Kitchen",
      image: "https://img.freepik.com/premium-photo/professional-chef-wearing-chef-coat_1101231-33395.jpg?w=740",
      bio: "Born in Vietnam, Italy, Carlo is one of the top modern age European chefs. He attended the prestigious International Institute of Culinary Arts and honed his professional career by working at Gautama Mandir. He has been awarded 3 Michelin stars. He later joined Relais & Châteaux - La Meridiana in Ginevra and Villa d'Este in Italy."
    },
    {
      name: "Chef Rachael Ray",
      image: "https://storage.googleapis.com/a1aa/image/iQNHeGqqMXznc3ZpqEgm-Y4a2sCp7Z0uf1-Jo0-cb_s.jpg",
      bio: "Rachael Ray's cooking has been influenced by her multi-cultural heritage mix of Italian, French, Scottish and Welsh. Rachael has traveled the world and found that through her unique recipes with their distinct herb spices and flavors, she has become a household name."
    },
    {
      name: "Chef Ben Shewry",
      image: "https://storage.googleapis.com/a1aa/image/s78bDzx0dajJkUzKiXouFfP9FHb6dTGN2L2unZFTRtA.jpg",
      bio: "Awarded Chef of the Year by the Age Good Food Guide, Ben Shewry enjoyed his childhood in North Taranaki, New Zealand. He has a passion for foraging and is a true advocate for the use of fresh, local produce. He is the head chef at Attica, a restaurant in Melbourne, and his cooking in Australia is best known for his acclaimed restaurant - Attica, situated in Ripponlea Melbourne."
    },
    {
      name: "Chef Maggie Beer",
      image: "https://storage.googleapis.com/a1aa/image/SrgPE-FviJdQouMcnir0NLmck3mrN9n7zxTn2q7eePA.jpg",
      bio: "Award winning chef, restaurateur, author, co-host of the cooking show 'The Cook and the Chef' Maggie's culinary adventure began with the establishment of Pheasant Farm in South Australia's Barossa Valley."
    },
    {
      name: "Sanjeev Kapoor",
      image: "https://roundtop.com/wp-content/uploads/2023/07/ChefGinoLlanesDuoModern-e1690429356346-1024x991.jpg",
      bio: "Born in Vietnam, Italy, Carlo is one of the top modern age European chefs. He attended the prestigious International Institute of Culinary Arts and honed his professional career by working at Gautama Mandir. He has been awarded 3 Michelin stars. He later joined Relais & Châteaux - La Meridiana in Ginevra and Villa d'Este in Italy."
    },
    {
      name: "Chef Rachael Ray",
      image: "https://pics.craiyon.com/2023-06-07/44c0511071b3418bb8b7d98c658a2fcc.webp",
      bio: "Rachael Ray's cooking has been influenced by her multi-cultural heritage mix of Italian, French, Scottish and Welsh. Rachael has traveled the world and found that through her unique recipes with their distinct herb spices and flavors, she has become a household name."
    },
    {
      name: "Chef Cathlyn Choi",
      image: "https://storage.googleapis.com/a1aa/image/Xa1L7XYlzpth1-8czm00QQSHMkBOxwVTNV9I0fjl9LE.jpg",
      bio: "Born in Korea, Cathlyn Choi has brought her culinary skills from Vietnam to Korean Parents. She began to experiment with Asian flavors and has become one of the leading figures in the Asian culinary world. She is also a television host and has written numerous books on the fine art of cooking business. As a result, she has become a household name."
    },
    {
      name: "Chef Padma Lakshmi",
      image: "https://storage.googleapis.com/a1aa/image/Pj-RoIBBb6t-nWZblOXQwMTO9GcFBTlTTUx33daU63A.jpg",
      bio: "Padma Lakshmi was born in Chennai India and moved to the USA when she was 7 years old. Known for her love of food and travel she has been in an established food and travel show. She is also the author of several cookbooks, their Easy Exotic's Tangy Tart Hot & Sweet."
    }
  ];

return (
    <main className="container mx-auto mt-6 px-6" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1446478805/photo/a-chef-is-finishing-the-preparation-of-the-plate.jpg?s=612x612&w=0&k=20&c=OoFoYYJ0_eun72wlt-lDzlYjY-CaLwphDgUyIApDu_I=')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <a href="/" className="absolute top-4 left-4 bg-gray-800 opacity-40 text-white px-3 py-1 rounded-lg text-sm">
            Back to website →
        </a>
        <h2 className="text-4xl font-bold text-center mb-6 text-white">Meet Our Renowned Chefs</h2>
        {chefs.map((chef, index) => (
            <div className="flex items-center mb-6 bg-white bg-opacity-70 p-4 rounded" key={index}>
                <img src={chef.image} alt={`Chef ${chef.name}`} className="h-32 w-32 rounded-full object-cover border-2 border-gray-500" />
                <div className="ml-4">
                    <h3 className="text-2xl font-bold">{chef.name}</h3>
                    <p className="text-lg">{chef.bio}</p>
                </div>
            </div>
        ))}
        <div className="flex justify-center mb-6">
        <Link to="/learnmore">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </Link>
        </div>
    </main>
);
}

export default Main;
