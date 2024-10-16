import "./App.css";
import Features from "./components/Features";
import Navbar from "./components/layouts/Navbar";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";

// Import FontAwesomeIcon and the specific icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane, faInstagram, faFacebookF, faGithub, faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import the LinkedIn icon

function App() {
  return (
    <>
      <div className="background-bg p-4 pl-3 pr-4">
        <Navbar />
        <header>
          <div className="h-screen pb-60 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl p-3 text-white p-2 md:text-7xl font-bold">
                When Innovation <br /> Meets
                <span className="bg-blue-200 text-black text-md  font-normal rounded-lg">
                  Investment
                </span>
              </h1>
              <p className="mt-4 text-lg text-white">
                Empowering Trading Through Advanced Technology
              </p>
              <button className="mt-8 bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                Open dApp
              </button>
            </div>
          </div>
        </header>

        {/* Other Components */}
        <Features />
        <Tokenomics />
        <Roadmap />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10">
          <div className="container mx-auto flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegramPlane} className="h-8 w-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="h-8 w-8" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} className="h-8 w-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
              </a>
            </div>
            <p className="text-center text-sm">“Designed for traders of today, just like you.”</p>
            <form className="mt-4">
              <label htmlFor="email" className="sr-only">
                What's your work email?
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                Get Started
              </button>
            </form>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
