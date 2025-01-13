import architectureImg from "../assets/images/architecture-university.jpg";
import cityImg from "../assets/images/modern-city.jpg";
import complexImg from "../assets/images/sustainable-complex.jpg";

import Headphones from "../assets/icons/headphone.svg";
import Wrench from "../assets/icons/wrench.svg";

export const navItems = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact Us", href: "#", highlight: true },
];

export const projects = [
  {
    title: "The National University of Architecture",
    image: architectureImg,
  },
  {
    title: "Modern City Center",
    image: cityImg,
  },
  {
    title: "Sustainable Living Complex",
    image: complexImg,
  },
];

export const reputationItems = [
  {
    icon: Headphones,
    title: "Best Services",
    description: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  },
  {
    icon: Headphones,
    title: "Best Teams",
    description: "Cursus semper tellus volutpat aliquet lacus.",
  },
  {
    icon: Wrench,
    title: "Best Designs",
    description: "Ultricies at ipsum nunc, tristique nam lectus.",
  },
];
