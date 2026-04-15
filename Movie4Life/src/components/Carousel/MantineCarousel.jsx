import { Carousel } from "@mantine/carousel";
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
                <span className="featured-badge">FEATURED TRAILER</span>
                {/* Dela upp titeln på två rader om den är lång */}
                <h2 className="trailer-title">
                  {movie.Title.includes("Echoes") ? (
                    <>
                      Echoes in the
                      <br />
                      Dark
                    </>
                  ) : (
                    movie.Title
                  )}
                </h2>
                <p className="trailer-description">
                  {movie.Plot ||
                    "A paranormal investigator discovers that the haunted house she's researching holds the key to her own past."}
                </p>
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
