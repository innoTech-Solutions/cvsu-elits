import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2F3233] text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-xl text-orange-400 font-bold">Elite League of Information Technology Students</h2>
          <p className="mt-4 text-base">Empowering IT students enthusiasts.</p>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl text-orange-400 font-bold mb-2">Contact Us</h3>
          <div className="flex items-center">
            <FaEnvelope className="text-white hover:text-orange-500 mr-4" />
            <p className="text-base">: contact@elits.com</p>
          </div>
          <div className="flex items-center mt-2">
            <FaPhone className="text-white hover:text-orange-500 mr-4" />
            <p className="text-base">: +1 (123) 456-7890</p>
          </div>
          <div className="mt-4 flex">
            <a href="#" className="text-white hover:text-orange-500 mr-4">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-orange-500 mr-4">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-orange-500 mr-4">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-orange-500 mr-4">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl text-orange-400 font-bold mb-2">Links</h3>
          <ul>
            <li><a href="#" className="text-base hover:text-orange-500 transition">Terms of Services</a></li>
            <li><a href="#" className="text-base hover:text-orange-500 transition">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-base">&copy; 2024 Elite League of Information Technology Students. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


