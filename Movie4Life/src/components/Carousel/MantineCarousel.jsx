// Hämta Mantine's bilduppvisare (karusell)
import { Carousel } from "@mantine/carousel";
// Hämta play-ikonen från Tabler
import { IconPlayerPlay } from "@tabler/icons-react";
// Hämta useState - ett verktyg för att komma ihåg saker i React
import { useState } from "react";
// Hämta Mantine's grundstyling för karusellen (behövs)
import "@mantine/carousel/styles.css";
// Hämta vår egen styling för karusellen
import "./mantineCarousel.css";

// En komponent som visar en karusell med filmtrailers
function CustomCarousel({ movies = [] }) {
  // hiddenOverlayIndex = vilket slide-nummer som har texten gömd
  const [hiddenOverlayIndex, setHiddenOverlayIndex] = useState(null);

  // autoPlayIndex = vilket slide-nummer som ska starta trailern direkt
  const [autoPlayIndex, setAutoPlayIndex] = useState(null);

  // När man klickar på play-knappen
  const handlePlayClick = (index) => {
    setHiddenOverlayIndex(index);
    setAutoPlayIndex(index);
  };

  // När man byter till en ny slide (bläddrar)
  const handleSlideChange = () => {
    setHiddenOverlayIndex(null);
    setAutoPlayIndex(null);
  };

  return (
    <Carousel
      withIndicators
      height={500}
      loop
      onSlideChange={handleSlideChange}
    >
      {movies.map((movie, index) => (
        <Carousel.Slide key={index}>
          <div className="trailer-container">
            <iframe
              className="trailer-iframe"
              src={
                autoPlayIndex === index
                  ? `${movie.Trailer_link}?autoplay=1`
                  : movie.Trailer_link
              }
              title={`Trailer for ${movie.Title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {hiddenOverlayIndex !== index && (
              <div className="trailer-overlay">
                <div className="trailer-content">
                  <div className="play-badge-wrapper">
                    <button
                      className="play-button"
                      onClick={() => handlePlayClick(index)}
                      aria-label={`Play trailer for ${movie.Title}`}
                      tabIndex={0}
                    >
                      <IconPlayerPlay size={24} fill="white" />
                    </button>
                    <span className="featured-badge">FEATURED TRAILER</span>
                  </div>
                  <h2 className="trailer-title">{movie.Title}</h2>
                  <p className="trailer-description">
                    {movie.Plot ||
                      "Watch the official trailer for this amazing movie"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
