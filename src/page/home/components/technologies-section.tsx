import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import { DiJqueryLogo } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaLess,
  FaNodeJs,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiExpress,
  SiFastify,
  SiStyledcomponents,
  SiVtex,
  SiWoocommerce,
} from "react-icons/si";

const technologies = [
  { id: 1, name: "HTML", icon: <FaHtml5 size={96} /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt size={96} /> },
  { id: 3, name: "JavaScript", icon: <IoLogoJavascript size={96} /> },
  { id: 4, name: "JQuery", icon: <DiJqueryLogo size={96} /> },
  { id: 5, name: "TypeScript", icon: <SiTypescript size={96} /> },
  { id: 6, name: "ReactJS", icon: <RiReactjsFill size={96} /> },
  { id: 7, name: "NextJS", icon: <RiNextjsFill size={96} /> },
  { id: 8, name: "NodeJS", icon: <FaNodeJs size={96} /> },
  { id: 9, name: "ExpressJS", icon: <SiExpress size={96} /> },
  { id: 10, name: "FastifyJS", icon: <SiFastify size={96} /> },
  { id: 11, name: "Sass", icon: <FaSass size={96} /> },
  { id: 12, name: "Less", icon: <FaLess size={96} /> },
  { id: 13, name: "Styled Components", icon: <SiStyledcomponents size={96} /> },
  { id: 14, name: "Bootstrap", icon: <FaBootstrap size={96} /> },
  { id: 15, name: "Tailwind CSS", icon: <RiTailwindCssFill size={96} /> },
  { id: 16, name: "Wordpress", icon: <FaWordpress size={96} /> },
  { id: 17, name: "VTEX", icon: <SiVtex size={96} /> },
  { id: 18, name: "Woocommerce", icon: <SiWoocommerce size={96} /> },
];

export function TechnologiesSection() {
  return (
    <section className="mb-32 max-w-5xl mx-auto">
      <Splide
        options={{
          perPage: 4,
          perMove: 1,
          arrows: false,
          pagination: false,
          autoplay: true,
          pauseOnHover: false,
          interval: 3500,
          type: "loop",
        }}
      >
        {technologies.map((technologies) => {
          return (
            <SplideSlide key={technologies.id}>
              <div className="flex flex-col items-center">
                {technologies.icon}
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}
