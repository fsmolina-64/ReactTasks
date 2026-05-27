import React from 'react';
import './Gallery.css';

const imageList = [
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb',
  'https://images.unsplash.com/photo-1550439062-609e1531270e',
  'https://images.unsplash.com/photo-1605379399642-870262d3d051',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
  'https://images.unsplash.com/photo-1627398240309-089a144099b2',
  'https://images.unsplash.com/photo-1563206767-5b18f218e8de',
  'https://images.unsplash.com/photo-1580894732444-8ecded790047',
  'https://images.unsplash.com/photo-1551033406-611cf9a28f67',
];

function Gallery() {
  return (
    <div className="masonry-container">
      {imageList.map((img, index) => (
        <div key={`item-${index}`} className="masonry-item">
          <img src={`${img}?w=523&auto=format`} alt={`gallery-${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;