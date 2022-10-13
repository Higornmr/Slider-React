import { useState, useEffect, useRef } from "react";
import "./App.css";
import { motion } from "framer-motion";

import image1 from "../src/images/BurguerpedidosREACT.png";
import image2 from "../src/images/Dark mode.png";
import image3 from "../src/images/Todolist REACT.png";
import image4 from "../src/images/Todolist.png";
import image5 from "../src/images/Facebook.png";
import image6 from "../src/images/Gerador de Senha.png";
import image7 from "../src/images/Mario.png";


const images = [ image1, image2, image3, image4, image5, image6, image7];

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className="App">

      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div 
        className="inner" 
        drag="x"
        dragConstraints={{right: 0, left: -width}}
        initial={{ x:100}}
        animate={{ x:0}}
        transition={{ duration: 0.8 }}
        >

          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Texto alt" />
            </motion.div>
          ))}
      
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
