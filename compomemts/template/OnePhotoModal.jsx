"use client";

///--------------------------------------------- з можливістю приблизити тест (3)

import React, { useState, useRef, useEffect } from "react";
import styles from "../../style/portfolioOne.module.scss";
import Image from "next/image";

const OnePhotoModal = ({ isOpen, setIsOpen, currentImg }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const imageRef = useRef(null);
  const frameRef = useRef(null);

  const handleCloseModal = () => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    const newScale = scale - e.deltaY * 0.01;
    setScale(Math.min(Math.max(newScale, 1), 2));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      const imageWidth = imageRef.current.offsetWidth * scale;
      const imageHeight = imageRef.current.offsetHeight * scale;

      const containerWidth = imageRef.current.parentNode.offsetWidth;
      const containerHeight = imageRef.current.parentNode.offsetHeight;

      const maxX = Math.max(0, (imageWidth - containerWidth) / 2);
      const minX = -maxX;

      const maxY = Math.max(0, (imageHeight - containerHeight) / 2);
      const minY = -maxY;

      const finalX = Math.min(Math.max(e.clientX - startPos.x, minX), maxX);
      const finalY = Math.min(Math.max(e.clientY - startPos.y, minY), maxY);

      setPosition({
        x: finalX,
        y: finalY,
      });
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className={styles.photo_modal_wrap}>
          <div className={styles.photo_modal_block}>
            <div className={styles.photo_modal_close_button_wrap}>
              <button
                onClick={handleCloseModal}
                className={styles.photo_modal_close_button}
              >
                Close
              </button>
            </div>
            <div
              className={styles.photo_modal_image_block}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <Image
                alt={currentImg}
                width={1000}
                height={1000}
                ref={imageRef}
                className={styles.photo_modal_image}
                src={currentImg}
                style={{
                  transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                }}
                onDragStart={handleDragStart}
                // onWheel={handleWheel}
                // onMouseDown={handleMouseDown}
                // onMouseMove={handleMouseMove}
                // onMouseUp={handleMouseUp}
                // onMouseLeave={handleMouseUp}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OnePhotoModal;

///--------------------------------------------- з можливістю приблизити тест (1)

// import React, { useState, useRef, useEffect } from 'react';
// import styles from "../../style/portfolioOne.module.scss";

// const OnePhotoModal = ({ isOpen, setIsOpen, currentImg }) => {
// const [scale, setScale] = useState(1);
// const [position, setPosition] = useState({ x: 0, y: 0 });
// const [isDragging, setIsDragging] = useState(false);
// const [startPos, setStartPos] = useState({ x: 0, y: 0 });

// const imageRef = useRef(null);
// const frameRef = useRef(null);

//     const handleCloseModal = () => {
//         setIsOpen(false);
//         setScale(1);
//         setPosition({ x: 0, y: 0 });
//     }

//     const handleWheel = e => {
//         const newScale = scale - e.deltaY * 0.01;
//         setScale(Math.min(Math.max(newScale, 1), 5));
//     }

//     const handleMouseDown = e => {
//         setIsDragging(true);
//         setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
//     }

//     const handleMouseMove = e => {
//         if (!isDragging) return;

//         if (frameRef.current) {
//             cancelAnimationFrame(frameRef.current);
//         }

//         frameRef.current = requestAnimationFrame(() => {
//             setPosition({
//                 x: e.clientX - startPos.x,
//                 y: e.clientY - startPos.y
//             });
//         });
//     }

//     const handleMouseUp = () => {
//         setIsDragging(false);
//         if (frameRef.current) {
//             cancelAnimationFrame(frameRef.current);
//         }
//     }

//     const handleDragStart = (e) => {
//         e.preventDefault();
//     }

//     useEffect(() => {
//         return () => {
//             if (frameRef.current) {
//                 cancelAnimationFrame(frameRef.current);
//             }
//         }
//     }, []);

//     return (
//         <>
//             {isOpen && (
//                 <div className={styles.photo_modal_wrap}>
//                     <div className={styles.photo_modal_block}>
//                         <div className={styles.photo_modal_close_button_wrap}>
//                             <button
//                                 onClick={handleCloseModal}
//                                 className={styles.photo_modal_close_button}>
//                                 Close
//                             </button>
//                         </div>
//                         <div
//                             className={styles.photo_modal_image_block}
//                             onWheel={handleWheel}
//                             onMouseDown={handleMouseDown}
//                             onMouseMove={handleMouseMove}
//                             onMouseUp={handleMouseUp}
//                             onMouseLeave={handleMouseUp}
//                         >
//                             <img
//                                 ref={imageRef}
//                                 className={styles.photo_modal_image}
//                                 src={currentImg}
//                                 style={{ transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)` }}
//                                 onDragStart={handleDragStart}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default OnePhotoModal;

///--------------------------------------------- з можливістю приблизити тест (2)

// import React, { useState, useRef, useEffect } from 'react';
// import styles from "../../style/portfolioOne.module.scss";

// const OnePhotoModal = ({ isOpen, setIsOpen, currentImg }) => {
//     const [scale, setScale] = useState(1);
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [isDragging, setIsDragging] = useState(false);
//     const [startPos, setStartPos] = useState({ x: 0, y: 0 });

//     const imageRef = useRef(null);
//     const frameRef = useRef(null);

//     const handleCloseModal = () => {
//         setIsOpen(false);
//         setScale(1);
//         setPosition({ x: 0, y: 0 });
//     }

//     const handleWheel = e => {
//         const newScale = scale - e.deltaY * 0.01;
//         setScale(Math.min(Math.max(newScale, 1), 5));
//     }

//     const handleMouseDown = e => {
//         setIsDragging(true);
//         setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
//     }

//     const handleMouseMove = e => {
//         if (!isDragging) return;

//         if (frameRef.current) {
//             cancelAnimationFrame(frameRef.current);
//         }

//         frameRef.current = requestAnimationFrame(() => {
//             const maxX = ((imageRef.current.offsetWidth * scale) - imageRef.current.offsetWidth) / 2;
//             const minX = -maxX;
//             const finalX = Math.min(Math.max(e.clientX - startPos.x, minX), maxX);

//             const maxY = ((imageRef.current.offsetHeight * scale) - imageRef.current.offsetHeight) / 2;
//             const minY = -maxY;
//             const finalY = Math.min(Math.max(e.clientY - startPos.y, minY), maxY);

//             setPosition({
//                 x: finalX,
//                 y: finalY
//             });
//         });
//     }

//     const handleMouseUp = () => {
//         setIsDragging(false);
//         if (frameRef.current) {
//             cancelAnimationFrame(frameRef.current);
//         }
//     }

//     const handleDragStart = (e) => {
//         e.preventDefault();
//     }

//     useEffect(() => {
//         return () => {
//             if (frameRef.current) {
//                 cancelAnimationFrame(frameRef.current);
//             }
//         }
//     }, []);

//     return (
//         <>
//             {isOpen && (
//                 <div className={styles.photo_modal_wrap}>
//                     <div className={styles.photo_modal_block}>
//                         <div className={styles.photo_modal_close_button_wrap}>
//                             <button
//                                 onClick={handleCloseModal}
//                                 className={styles.photo_modal_close_button}>
//                                 Close
//                             </button>
//                         </div>
//                         <div
//                             className={styles.photo_modal_image_block}
//                             onWheel={handleWheel}
//                             onMouseDown={handleMouseDown}
//                             onMouseMove={handleMouseMove}
//                             onMouseUp={handleMouseUp}
//                             onMouseLeave={handleMouseUp}
//                         >
//                             <img
//                                 ref={imageRef}
//                                 className={styles.photo_modal_image}
//                                 src={currentImg}
//                                 style={{ transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)` }}
//                                 onDragStart={handleDragStart}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default OnePhotoModal;

///-------------------------------- Без можливості приблизити

// import React, { useState, useEffect } from "react";
// import styles from "../../style/portfolioOne.module.scss";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { AiOutlineArrowRight } from "react-icons/ai";

// const OnePhotoModal = ({ isOpen, setIsOpen, currentImg, allPhotos }) => {
//   const [chosePhoto, setChosePhoto] = useState("");
//   useEffect(() => {
//     setChosePhoto(currentImg);
//   }, []);

//   if (!isOpen) return null;

//   const handlePrev = () => {
//     const indexInArray = allPhotos.findIndex((el) => el.imgUrl == chosePhoto);
//     if (indexInArray != 0) {
//       let idx = indexInArray - 1;
//       setChosePhoto(allPhotos[idx].imgUrl);
//     }
//   };

//   const handleNext = () => {
//     const indexInArray = allPhotos.findIndex((el) => el.imgUrl == chosePhoto);
//     if (indexInArray != allPhotos.length - 1) {
//       let idx = indexInArray + 1;
//       setChosePhoto(allPhotos[idx].imgUrl);
//     }
//   };

//   const handleCloseModal = (e) => {
//     if (e.target.id == "photo_modal_close") {
//       setIsOpen(!isOpen);
//     }
//   };
//   return (
//     <div className={styles.photo_modal_wrap}>
//       <div
//         className={styles.photo_modal_block}
//         id="photo_modal_close"
//         onClick={(e) => handleCloseModal(e)}
//       >
//         <div
//           className={styles.photo_modal_close_button_wrap}
//           id="photo_modal_close"
//         >
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className={styles.photo_modal_close_button}
//           >
//             Close
//           </button>
//         </div>
//         <div className={styles.photo_modal_image_block} id="photo_modal_close">
//           <img className={styles.photo_modal_image} src={currentImg} />
//         </div>
//         <div className={styles.photo_modal_button_wrap} id="photo_modal_close">
//           <button className={styles.photo_modal_button} onClick={handlePrev}>
//             <AiOutlineArrowLeft />
//           </button>
//           <button className={styles.photo_modal_button} onClick={handleNext}>
//             <AiOutlineArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnePhotoModal;
