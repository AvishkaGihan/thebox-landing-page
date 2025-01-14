import architectureImg from "../assets/images/architecture-university.jpg";
import cityImg from "../assets/images/modern-city.jpg";
import complexImg from "../assets/images/sustainable-complex.jpg";

import Headphones from "../assets/icons/headphone.svg";
import Wrench from "../assets/icons/wrench.svg";

import Building from "../assets/icons/Building.svg";
import Settings from "../assets/icons/Settings.svg";
import Users from "../assets/icons/Users.svg";
import Tools from "../assets/icons/Tools.svg";
import Compass from "../assets/icons/Compass.svg";
import Zap from "../assets/icons/Zap.svg";

import HappyClients from "../assets/images/happy-clients.png";
import ProjectsCompleted from "../assets/images/projects-completed.png";
import AwardsWin from "../assets/images/awards-win.png";
import YearsInBusiness from "../assets/images/years-in-business.png";

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

export const services = [
  { id: 1, title: "Construction", icon: Building },
  { id: 2, title: "Renovation", icon: Settings },
  { id: 3, title: "Consultation", icon: Users },
  { id: 4, title: "Repair Services", icon: Tools },
  { id: 5, title: "Architecture", icon: Compass },
  { id: 6, title: "Electric", icon: Zap },
];

export const metrics = [
  {
    number: "84",
    label: "Happy Clients",
    icon: HappyClients,
    className:
      "translate-x-1/4 translate-y-3 sm:translate-x-1/2 sm:translate-y-1/4 z-10",
    iconPosition: "right-top",
  },
  {
    number: "123",
    label: "Projects Completed",
    icon: ProjectsCompleted,
    className: "-translate-x-1/4",
    iconPosition: "left-top",
  },
  {
    number: "37",
    label: "Awards Win",
    icon: AwardsWin,
    className: "translate-x-1/4 -translate-y-1/5 z-10",
    iconPosition: "right-top",
  },
  {
    number: "30",
    label: "Years in Business",
    icon: YearsInBusiness,
    className:
      "sm:-translate-x-1/4 sm:-translate-y-1/2 -translate-y-6 -translate-x-6",
    iconPosition: "right-bottom",
  },
];
