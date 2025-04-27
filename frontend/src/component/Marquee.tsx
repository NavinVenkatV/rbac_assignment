import { motion} from "framer-motion"

const uMarquee = [
    '01.svg',
    '02.svg',
    '03.svg',
    '04.svg',
    '05.svg',
    '06.svg',
    '07.svg',
    '08.svg',
    '09.svg',
    '10.svg',
    '12.svg',
    '13.svg',
    '14.svg',
    '15.svg',
    '16.svg',
    '17.svg',
    '18.svg',
    '19.svg',
    '20.svg',
    '21.svg',
    '22.svg',
]

interface Typess {
    from : string, 
    to   : string
}

function Marquee({from, to} : Typess) {
    return (
    <div className="flex MyGradient bg-black">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {uMarquee.map((image, index) => {
          return <img className="h-40 w-56 pr-20" src={image} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {uMarquee.map((image, index) => {
          return <img className="h-40 w-56 pr-20" src={image} key={index} />;
        })}
      </motion.div>
    </div>
  );
}

export default Marquee


// import React from "react";
// import { motion } from "framer-motion";

// const MarqueeItem = ({ images, from, to }) => {
//   return (
//     <div className="flex MyGradient">
//       <motion.div
//         initial={{ x: `${from}` }}
//         animate={{ x: `${to}` }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="flex flex-shrink-0"
//       >
//         {images.map((image, index) => {
//           return <img className="h-40 w-56 pr-20" src={image} key={index} />;
//         })}
//       </motion.div>

//       <motion.div
//         initial={{ x: `${from}` }}
//         animate={{ x: `${to}` }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="flex flex-shrink-0"
//       >
//         {images.map((image, index) => {
//           return <img className="h-40 w-56 pr-20" src={image} key={index} />;
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default MarqueeItem;