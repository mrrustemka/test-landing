import { useState, useEffect } from "react";
import "./App.css";
import girl_1 from "./Images/girl-left.png";
import girl_2 from "./Images/girl-right.png";
import coin_1 from "./Images/coin-1.png";
import coin_2 from "./Images/coin-2.png";
import coin_3 from "./Images/coin-3.png";
import coin_4 from "./Images/coin-4.png";
import coin_5 from "./Images/coin-5.png";
import coin_6 from "./Images/coin-6.png";
import coin_7 from "./Images/coin-7.png";
import Header from "./Components/Header";
import Slogan from "./Components/Slogan";
import Form from "./Components/Form";

function App() {
  // State to store the horizontal position of the mouse
  const [mouseX, setMouseX] = useState(0);

  // Function to handle mouse movement
  const handleMouseMove = (event) => {
    const x = event.clientX; // Get horizontal mouse position
    setMouseX(x);
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate the background position based on mouseX
  const backgroundPosition_1 = Math.round(
    ((mouseX / window.innerWidth) * 100) / 7,
    2
  );
  const backgroundPosition_2 = 100 - backgroundPosition_1;

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // Randomly generate a set of coins once when the component mounts
    const coinImages = [coin_1, coin_2, coin_3, coin_4, coin_5, coin_6, coin_7];
    const generatedCoins = [];

    // Generate coins count
    for (let i = 0; i < 10; i++) {
      const randomCoin =
        coinImages[Math.floor(Math.random() * coinImages.length)];
      const randomPositionX = Math.round(
        Math.floor(Math.random() * (95 - 5 + 1)) + 5
      ); // Random horizontal position (percent)
      const animationDuration = Math.random() * 12 + 3; // Random fall duration (between 3s and 6s)

      generatedCoins.push({
        id: i,
        image: randomCoin,
        positionX: randomPositionX,
        animationDuration: animationDuration
      });
    }

    setCoins(generatedCoins);
  }, []);
  return (
    <div className="app">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${girl_1}), url(${girl_2})`,
          backgroundPosition:
            backgroundPosition_1 +
            "% bottom," +
            backgroundPosition_2 +
            "% bottom",
          backgroundSize: "20%",
          transition: "background-position ease-out",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="falling-coins-container">
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="falling-coin"
              style={{
                left: `${coin.positionX}vw`, // Set random horizontal position (in viewport width)
                animationDuration: `${coin.animationDuration}s`
              }}
            >
              <img src={coin.image} alt="coin" />
            </div>
          ))}
          <div className="content">
            <Header />
            <Slogan />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
