// Hämta Mantine's färdiga bilduppvisare (en karusell som snurrar
import { Carousel } from "@mantine/carousel";
// Hämta Mantine's bild-komponent (för att visa en enskild bild)
import { Image } from "@mantine/core";
// Hämta Mantine's grund-styling för carousellen (BEHÖVS för att den ska fungera)
import "@mantine/carousel/styles.css";

// Skapa en EGEN komponent som heter CustomCarousel
// Den tar emot en prop som heter "images" - det är en lista med bild-addresser
// Om ingen lista skickas med, använd en tom lista [] som standard
function CustomCarousel({ images = [] }) {
  // Returnera det som ska synas på skärmen
  return (
    <Carousel withIndicators height={400} loop>
      {/* Gå igenom varje bild-address i listan "images" */}
      {/* För varje bild-address, skapa en slide (en bildruta) */}
      {images.map((imageUrl, index) => (
        <Carousel.Slide key={index}>
          {/* En bildruta i carousellen */}
          {/* key = unikt nummer så React vet vilken slide som är vilken */}
          {/* Visa själva bilden */}
          {/* src = bildens address (var på internet bilden finns) */}
          {/* alt = text som syns om bilden inte laddas (beskriver bilden) */}
          {/* fit="cover" = bilden fyller hela ytan, beskärs om den är för stor */}
          {/* h="100%" = höjden fyller hela föräldern (hela bildrutan) */}
          {/* w="100%" = bredden fyller hela föräldern */}
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
// Gör så att andra filer (som LandingPage) kan använda den här komponenten
export default CustomCarousel;
