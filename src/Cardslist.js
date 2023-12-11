import React from 'react';
import Cards from './Cards';
import CustomModal from './CustomModal';
import './Cardslist.css';
const cards = [
  { id: "Card 1", pdfUrl: "https://w0.peakpx.com/wallpaper/904/224/HD-wallpaper-black-panther-purple-color-supungraphics.jpg ",image:" https://res.cloudinary.com/dluyslfrm/image/upload/v1683466164/DSC_0581_vugije.jpg"},
  { id: "Card 2", pdfUrl: "https://w0.peakpx.com/wallpaper/904/224/HD-wallpaper-black-panther-purple-color-supungraphics.jpg ",image:"https://res.cloudinary.com/dluyslfrm/image/upload/v1683465985/DSC_0670_cgcpad.jpg"},
  { id: "Card 3", pdfUrl: " https://w0.peakpx.com/wallpaper/904/224/HD-wallpaper-black-panther-purple-color-supungraphics.jpg",image: "https://res.cloudinary.com/dluyslfrm/image/upload/v1683465468/WhatsApp_Image_2023-04-01_at_22.31.59_rmgoyb.jpg" },
  // { id: "Card 3", pdfUrl: "https://w0.peakpx.com/wallpaper/904/224/HD-wallpaper-black-panther-purple-color-supungraphics.jpg " },
  // { id: "Card 3", pdfUrl: "https://w0.peakpx.com/wallpaper/904/224/HD-wallpaper-black-panther-purple-color-supungraphics.jpg " },
  // { id: "Card 3", pdfUrl: "https://w0.peakpx.com/wallpaper/904/224/HD-wallpaper-black-panther-purple-color-supungraphics.jpg " },
  // { id: "Card 3", pdfUrl: "https://w0.peakpx.com/wallpaper/904/224/HD-wallpaper-black-panther-purple-color-supungraphics.jpg " },
  // { id: "Card 3", pdfUrl: "https://w0.peakpx.com/wallpaper/904/224/HD-wallpaper-black-panther-purple-color-supungraphics.jpg " },
  // { id: "Card 3", pdfUrl: "https://w0.peakpx.com/wallpaper/904/224/HD-wallpaper-black-panther-purple-color-supungraphics.jpg " },


];

export default function Cardslist() {
  return (
    <div className="card-list">
      
      {cards.map(card => (
        <>
          <Cards key={card.id} id={card.id} pdfUrl={card.pdfUrl} image={card.image} />

        </>
      ))}
      
    </div>
  );
}
