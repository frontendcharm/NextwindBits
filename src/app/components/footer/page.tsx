import { FaGithub, FaInstagram, FaCodepen } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-sm mb-4">Follow me on:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/frontendcharm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com/frontendcharm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://codepen.io/frontendcharm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaCodepen size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
