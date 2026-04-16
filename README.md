# GruppExamMovie4Life

https://www.figma.com/make/ClSUuWEx49jQDUAUCb7Fbs/Design-Movie4Life-Website?t=lxXat579fnEnKmCM-1

## Mappstruktur – Skillnader mellan vår kod och Figma
#### Vår mappstruktur:
Vi har byggt upp vår app. med en tydlig och organiserad mappstruktur. Vi skapar separata mappar för olika delar av appen – Components/ för återanvändbara komponenter som Carousel och MovieCard, hooks/ för våra egna hooks som useFetchMovies, pages/ för olika sidor som LandingPage och SearchPage, och utils/ för hjälpfunktioner som shuffle Array. 

Genom att göra denna struktur gör det lättare för oss att hitta kod och återanvända komponenter. Våra komponenter är mindre och fokuserade på en specifik uppgift, vilket gör dem lättare att underhålla och testa.

### Figma:
Figma är ett designverktyg, inte ett kodverktyg. 
Men i grunden är konceptet liknande – man grupperar saker i mappar.

### Importera kod:
Här är en stor skillnad. Vi importerar aktivt kod mellan våra filer. Till exempel importerar vi CustomCarousel från mantine Component in i LandingPage, och vi importerar useFetchMovies från hooks-mappen. 

Eftersom den lägger in information direkt i kodfilen istället för att importera. Figma importerar CSS från tex tailwind.

### API-anrop:
Vi använder API-anrop i vår kod. Vår useFetchMovies-hook hämtar data från en extern URL med axios. Figma kan inte göra API-anrop eftersom den inte har en Key, men den kan skapa upp koden för att göra en fetch. 

### Div-element:
Både vi och Figma använder div-element, men på olika sätt. I Figma använder sig av många div-element. Vi försöker att använda så lite div som möjligt. I Bästa mån.

### Återanvändning av kod:
Vi återanvänder betydligt mer kod (komponenter) än i Figma. MovieCards kan återanvändas både på startsidan, sökresultatsidan och Watch listsidan. Däremot i Figma kod, så har figma Array med flera objekt som den använder sig direkt istället för att återanvända en fil som håller på all information. 
 
### CSS-hantering:
Vi har gjort enskilda mappar för våra CSS filer och jsx filer, så att det är lätt att finna vilken CSS fil som tillhör vilken jsx. 
Medans i koden från figma så finner vi inte CSS filerna, det ligger en tailwind CSS som vi inte har tillgång till. Men i pages, så har du bara TX:s filer. Figma importerar. 

Men figma har en bättre theme.css där den har all lagt in rot CSS och bas CSS, där dom sätter upp h taggar, labels etc.…  

Sammanfattning: Skillnaden mellan vår kod och figma. Är mer uppdelat, så att den känns mer lättläst än figma kod. Då figma skickar mycket information direkt in i TX:s och använder sig mycket av div element med klassnamn, som blir dålig bem. Exempelvis blir detta att figma kod känns tyngre att läsa och återskapa Jesper läs det själv.   
