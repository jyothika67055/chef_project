import { useState } from "react";
import { Eye } from "lucide-react";
import img5 from './chef_img.jpg';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e3e6d1] p-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="relative">
          <img
            src={img5} alt="logo"
            className="w-full h-full object-cover"
          />
          <a href="/" className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
            Back to website →
          </a>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center">Create an account</h2>
          <p className="text-center text-sm mt-2">
            Already have an account? <a href="/LoginIt" className="text-red-500 cursor-pointer">login</a>
          </p>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input className="border p-2 rounded w-full" placeholder="First name" />
              <input className="border p-2 rounded w-full" placeholder="Last name" />
            </div>
            <input className="border p-2 rounded w-full" placeholder="Email address" type="email" />
            <div className="relative">
              <input
                className="border p-2 rounded w-full"
                placeholder="Enter your password"
                type={passwordVisible ? "text" : "password"}
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <Eye className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <p className="text-sm">
                I agree to the <span className="text-red-500">terms and conditions</span>
              </p>
            </div>
            <button className="w-full bg-black text-white p-2 rounded">Create account</button>
            <div className="flex items-center justify-center text-sm text-gray-600 mt-4">
              <span className="mx-2">or register with</span>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <button className="flex items-center gap-2 px-4 bg-gray-200 text-black p-2 rounded">
                <img src="https://yt3.googleusercontent.com/K8WVrQAQHTTwsHEtisMYcNai7p7XIlyEAdZg86qYw78ye57r5DRemHQ9Te4PcD_v98HB-ZvQjQ=s900-c-k-c0x00ffffff-no-rj" alt="Google" className="w-5 h-5" /> Google
              </button>
              <button className="flex items-center gap-2 px-4 bg-gray-200 text-black p-2 rounded">
                <img src="https://cdn3d.iconscout.com/3d/free/preview/free-instagram-3d-logo-download-in-png-blend-fbx-gltf-file-formats--social-media-pack-logos-2447888.png?f=webp&h=700" alt="Apple" className="w-5 h-5" /> Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;