export const HEADER = [
  {
    id: 0,
    name: "Application",
    heading: (
      <>
        Applications of Our <br className="max-lg:hidden" /> Technology
      </>
    ),

    desc: "Explore how our cutting-edge voice solutions integrate seamlessly into diverse environments, transforming traditional devices and improving user experiences across industries.",
    image: "/application.jpg",
  },
  {
    id: 1,
    name: "Product",
    heading: (
      <>
        Products of Our <br className="max-lg:hidden" /> Technology,
      </>
    ),
    desc: "SAMA Next Gen delivers unmatched scalability, adapting seamlessly to diverse needs across size, power, cost, ecosystems, unique connectivity capabilities, and customizations. Our solutions are purpose-built to address the specific requirements of our customers, ensuring maximum flexibility and value.",
    image: "/productHero.jpeg",
  },
  {
    id: 2,
    name: "About",
    heading: (
      <>
        Get to know our <br className="max-lg:hidden" /> Story
      </>
    ),
    desc: "SAMA is a trusted Original Design Manufacturer (ODM) and system integrator, delivering cutting-edge audio modules for diverse applications. With expertise in connected speakers and offline voice-enabled home appliances, we bring seamless functionality to everyday devices.",
    image: "/meeting.jpg",
  },
];
export type HeaderType = (typeof HEADER)[0];
