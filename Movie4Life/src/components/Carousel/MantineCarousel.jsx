import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import "@mantine/carousel/styles.css";

function CustomCarousel({ images = [] }) {
  return (
    <Carousel withIndicators height={400} loop>
      {images.map((imageUrl, index) => (
        <Carousel.Slide key={index}>
          <Image
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            fit="cover"
            h="100%"
            w="100%"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
