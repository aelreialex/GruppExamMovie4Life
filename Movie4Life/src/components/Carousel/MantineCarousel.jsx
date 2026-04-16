import { Carousel } from "@mantine/carousel";
import { IconPlayerPlay } from "@tabler/icons-react"; // ← Play ikon
import "@mantine/carousel/styles.css";
import "./mantineCarousel.css";

function CustomCarousel({ movies = [] }) {
  return (
    <Carousel withIndicators height={500} loop>
      {movies.map((movie, index) => (
        <Carousel.Slide key={index}>
          <div className="trailer-container">
            <iframe
              className="trailer-iframe"
              src={movie.Trailer_link}
              title={movie.Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="trailer-overlay">
              <div className="trailer-content">
                {/* PLAY-KNAPP OCH FEATURED BADGE I SAMMA RAD */}
                <div className="play-badge-wrapper">
                  <button className="play-button">
                    <IconPlayerPlay size={24} fill="white" />
                  </button>
                  <span className="featured-badge">FEATURED TRAILER</span>
                </div>

                <h2 className="trailer-title">{movie.Title}</h2>

                {/* <button className="watch-now-btn">WATCH NOW →</button> */}
              </div>
            </div>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
