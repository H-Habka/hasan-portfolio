import AOS from "aos";
import "aos/dist/aos.css";
import background from "./images/bg.webp";

import {
  HeaderSection,
  AboutMeSection,
  ContactSection,
  FloatingNavLink,
  CarosalSection,
  ExperinceSection
} from "./components";

const rhinoImages = [
  {
    id: 0,
    image: "rhino13.webp",
  },
  {
    id: 1,
    image: "rhino1.webp",
  },
  {
    id: 2,
    image: "rhino2.webp",
  },
  {
    id: 3,
    image: "rhino3.webp",
  },
  {
    id: 4,
    image: "rhino4.webp",
  },
  {
    id: 5,
    image: "rhino5.webp",
  },
  {
    id: 6,
    image: "rhino6.webp",
  },
  {
    id: 7,
    image: "rhino7.webp",
  },
  {
    id: 8,
    image: "rhino8.webp",
  },
  {
    id: 9,
    image: "rhino9.webp",
  },
  {
    id: 10,
    image: "rhino10.webp",
  },
  {
    id: 11,
    image: "rhino11.webp",
  },
  {
    id: 12,
    image: "rhino12.webp",
  },
];

const realDesignImages = [
  {
    id: 0,
    image: "real-design6.webp",
  },
  {
    id: 1,
    image: "real-design1.webp",
  },
  {
    id: 2,
    image: "real-design2.webp",
  },
  {
    id: 3,
    image: "real-design3.webp",
  },
  {
    id: 4,
    image: "real-design4.webp",
  },
  {
    id: 5,
    image: "real-design5.webp",
  },
];

function App() {
  AOS.init({
    easing: "ease-in-out",
  });
  return (
    <div
      className="w-screen overflow-x-hidden bg-one"
      style={{ backgroundImage: "url(" + background + ")" }}
    >
      <FloatingNavLink />
      <HeaderSection />
      <AboutMeSection />
      <CarosalSection
        imagesFolder="rhino"
        title="Rhino Design"
        data={rhinoImages}
      />
      <ExperinceSection />
      <div className="mt-20" />
      <CarosalSection
        imagesFolder="realDesign"
        title="Real Design"
        data={realDesignImages}
      />
      <ContactSection />
    </div>
  );
}

export default App;
