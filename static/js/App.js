import Slider from "react-slick";

import main1 from "./assets/img/main-1.png";
import main2 from "./assets/img/main-2.png";
import logo from "./assets/img/logo.png";
import footer from "./assets/img/footer.png";
import footer2 from "./assets/img/footer-2.png";
import telegram from "./assets/img/telegram.svg";
import twitter from "./assets/img/twitter.svg";
import medium from "./assets/img/medium.svg";
import prev from "./assets/img/prev.svg";
import next from "./assets/img/next.svg";

import slider1 from "./assets/img/001.png";
import slider2 from "./assets/img/002.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import { useRef } from "react";

const settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

function App() {
  const slider = useRef(null);
  return (
    <div className="App">
      <header className="w-full h-[1080px] bg-[url('./assets/img/bg.png')] bg-no-repeat bg-cover">
        <ul className="flex justify-center gap-10 pt-8 flex-col px-5 md:pt-12 md:flex-row">
          <li>
            <a
              href="https://t.me/PickleRickSol"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#43fe2e] shadow-btn rounded-xl text-black flex items-center px-5 py-3 gap-2 text-sm"
            >
              <div className="bg-black rounded-full p-[6px]">
                <img
                  className="w-[18px] h-[18px]"
                  src={telegram}
                  alt="telegram"
                />
              </div>
              TELEGRAM
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/PickleRickSolX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#43fe2e] shadow-btn rounded-xl text-black flex items-center px-5 py-3 gap-2 text-sm"
            >
              <div className="bg-black rounded-full p-[6px]">
                <img
                  className="w-[18px] h-[18px]"
                  src={twitter}
                  alt="twitter"
                />
              </div>
              TWITTER
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#43fe2e] shadow-btn rounded-xl text-black flex items-center px-5 py-3 gap-2 text-sm"
            >
              <div className="bg-black rounded-full p-[6px]">
                <img className="w-[18px] h-[18px]" src={medium} alt="medium" />
              </div>
              BUY NOW
            </a>
          </li>
        </ul>
        <div className="max-w-2xl mx-auto pt-16">
          <img className="w-full buzz" src={logo} alt="logo" />
          <p className="text-center py-10 w-full">
            Smart contract:{" "}
            <span className="text-[#43fe2e] ca">
              0x00000000000000000000000000000
            </span>
          </p>
        </div>
      </header>

      <main className="container mx-auto px-3 mt-[120px] md:px-5 md:mt-[80px]">
        <div className="bg-black border relative border-[#43fe2e] max-w-6xl mx-auto mt-[-550px] min-h-[700px] rounded-xl p-3 md:p-5 lg:p-12 lg:rounded-3xl">
          <Slider {...settings} ref={slider} className="pt-5 md:pt-10">
            <div>
              <div>
                <h2 className="text-center text-xl uppercase md:text-3xl">
                  <span className="text-[#43fe2e]">Rick Sanchez's</span>{" "}
                  complexity mirrors the intricate depth of{" "}
                  <span className="text-[#43fe2e]">Solana's </span>
                  innovative blockchain ecosystem.
                </h2>
                <div className="flex flex-col-reverse pt-8 gap-10 lg:flex-row">
                  <div className="w-full lg:max-w-xl">
                    <h4 className="text-xl">
                      <span className="text-[#43fe2e]">pickle rick </span>
                      on solana
                    </h4>
                    <p className="font-thin pt-5">
                      A brilliant and eccentric scientist, Rick Sanchez mirrors
                      the multifaceted depth of Solana's innovative blockchain
                      ecosystem.
                      <br />
                      <br />
                      With unmatched intellect and scientific prowess, he
                      navigates a multiverse of infinite possibilities,
                      seamlessly hopping across dimensions with his trademark
                      cynical humor and unapologetic demeanor. Beneath his
                      abrasive exterior lies a deep emotional complexity,
                      grappling with existential questions and resorting to
                      alcohol as a coping mechanism.
                    </p>
                  </div>
                  <div>
                    <img
                      className="rounded-xl h-[300px] mx-auto"
                      src={slider1}
                      alt="slider"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-16">
                <h2 className="text-center text-xl uppercase md:text-3xl">
                  <span className="text-[#43fe2e]">pickle rick </span>{" "}
                  tokenomics
                </h2>
                <div className="pt-8 flex gap-10 flex-col lg:flex-row">
                  <div>
                    <img
                      className="rounded-xl h-[300px] mx-auto"
                      src={slider2}
                      alt="slider"
                    />
                  </div>
                  <div className="w-full lg:max-w-xl">
                    <h4 className="text-xl">
                      <span className="text-[#43fe2e]">Total Supply:</span>{" "}
                      100,000,000
                    </h4>
                    <p className="font-thin pt-5">
                      Tax 0-0 <br /> Liquidity: 100% Burnt
                    </p>
                    <h4 className="text-xl mt-10">
                      How to buy{" "}
                      <span className="text-[#43fe2e]">pickle rick</span>{" "}
                    </h4>
                    <p className="font-thin pt-5">
                      Step 1: Using a Phantom wallet or any wallet that can be
                      used for Solana
                      <br />
                      Step 2: Prepare some SOL and connect your wallet to
                      Raydium or Jupiter DEX
                      <br />
                      Step 3: Paste $PICKLERICK contract and swap SOL for tokens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

          <div className="hidden absolute max-w-[200px] top-[-150px] right-[-100px] md:block">
            <img src={main1} alt="main-1" />
          </div>
          <div className="hidden absolute max-w-[250px] bottom-[-80px] left-[-100px] md:block">
            <img src={main2} alt="main-2" />
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-3 pt-[150px] pb-12 md:px-5">
        <div className="max-w-6xl mx-auto flex items-center gap-8 flex-col lg:flex-row lg:justify-between lg:gap-12">
          <div className="max-w-[300px]">
            <img className="w-full" src={logo} alt="logo" />
          </div>
          <span className="hidden w-[2px] h-[80px] bg-[#43fe2e] lg:block"></span>
          <div>
            <h4 className="text-center">Follow us for more!</h4>
            <ul className="flex gap-8 mt-5 flex-col md:flex-row">
              <li>
                <a
                  href="https://t.me/PickleRickSol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#43fe2e] shadow-btn rounded-xl text-black flex items-center px-3 py-3 gap-2 text-sm"
                >
                  <div className="bg-black rounded-full p-[6px]">
                    <img
                      className="w-[13px] h-[13px]"
                      src={telegram}
                      alt="telegram"
                    />
                  </div>
                  TELEGRAM
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/PickleRickSolX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#43fe2e] shadow-btn rounded-xl text-black flex items-center px-3 py-3 gap-2 text-sm"
                >
                  <div className="bg-black rounded-full p-[6px]">
                    <img
                      className="w-[13px] h-[13px]"
                      src={twitter}
                      alt="twitter"
                    />
                  </div>
                  TWITTER
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#43fe2e] shadow-btn rounded-xl text-black flex items-center px-3 py-3 gap-2 text-sm"
                >
                  <div className="bg-black rounded-full p-[6px]">
                    <img
                      className="w-[13px] h-[13px]"
                      src={medium}
                      alt="medium"
                    />
                  </div>
                  BUY NOW
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center pt-[100px] text-sm font-thin">
          <span>Copyright @ 2023 by Pickle Rick</span>
        </p>
      </footer>

      <div className="pt-20 hidden sm:block">
        <div className="relative">
          <img src={footer} alt="footer" />
          <img
            className="max-w-[200px] absolute right-0 top-[-160px]"
            src={footer2}
            alt="footer-2"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
