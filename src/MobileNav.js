// import React, { useState } from 'react';
// import './utilitycss/MobileNav.css';

// const MobileNav = () => {
//   const [isHidden, setIsHidden] = useState(false);

//   const handleClick = () => {
//     setIsHidden(true);
//   };

//   const containerStyle = {
//     opacity: isHidden ? 0 : 1,
//     transition: 'opacity 0.5s ease-in-out',
//   };

//   return (
//     <div style={containerStyle}>
//       <div className='md:hidden fixed top-0 left-0 w-full h-full z-50 bg-white/90 items-center flex justify-center'>
//         {isHidden ? null : (
//           <div>
//             <button onClick={handleClick} className='text-center'>
//               X marks the spot!
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MobileNav;
