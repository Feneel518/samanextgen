export const PRODUCTS = [
  {
    name: "Integrated Voice Module",
    mainHeading: "Integrated Voice Module: Smart voice control made simple.",
    paragraph1:
      "The Integrated Voice Module is a versatile solution designed to bring smart voice control to your devices. Engineered for seamless integration, it enables voice-activated functionalities with robust processing capabilities, making everyday interactions effortless and intuitive.",
    paragraph2:
      "The Integrated Voice Module offers offline voice processing, allowing reliable performance without internet dependency. It provides precise control for devices like fans and supports communication via UART or other protocols for seamless on device communication. Equipped with single-language support, it also offers the flexibility to upgrade to multiple languages. Advanced features like noise suppression and active gain control ensure clear voice recognition even in noisy environments. Use of digital microphone delivers high-quality audio input for optimal performance.",
    image: "/circuit.png",
    imageTitle: "Integrated Voice Module",
    imageDesc:
      "The SAMA Voice Module simplifies home control, appliance interactions smarter and more convenient.",
    featurepoints: [
      "Versatile solution",
      "Seamless Integration",
      "Robust Processing Capabilities",
    ],
    components: [
      {
        name: "Aster",
        features: [
          "Compact voice module for simplifying and smartening home appliances",
          "Offline voice processing for consistent and reliable performance without internet",
          "Built with a single digital microphone",
          "Supports seamless communication via UART or other protocols",
          "Ideal for integration into existing appliances like fans",
          "Single-language support for precise voice control",
          "Equipped with noise suppression and active gain control for clear command recognition",
        ],
      },
      {
        name: "Bellis",
        features: [
          "Advanced voice module for enhanced voice control in smart home devices",
          "Offline voice processing with dual digital microphones",
          "Improved far-field recognition and superior command accuracy",
          "Supports seamless connectivity via UART or similar protocols",
          "Dual-language recognition for versatility among diverse users",
          "Equipped with noise suppression and active gain control for clear voice input",
          "Ideal for upgrading traditional appliances like fans into modern smart systems",
        ],
      },
      {
        name: "Dahlia",
        features: [
          "Premium voice module with next-generation voice capabilities",
          "Offline voice processing with four digital microphones",
          "Excels in far-field voice recognition for larger spaces",
          "Multi-language recognition for diverse users and global applications",
          "Supports seamless integration via UART or other communication protocols",
          "Transforms appliances like fans into intelligent systems",
          "Advanced noise suppression and active gain control for crystal-clear voice input",
        ],
      },
    ],
  },
];

const components = [
  {
    name: "Aster",
    features: [
      "Built with a single digital microphone",
      "Single-language support for precise voice control",
      "Offline voice processing for consistent and reliable performance without internet",
      "Compact voice module for simplifying and smartening home appliances",
      "Supports seamless communication via UART or other protocols",
      "Ideal for integration into existing appliances like fans",
      "Equipped with noise suppression and active gain control for clear command recognition",
    ],
  },
  {
    name: "Bellis",
    features: [
      "Offline voice processing with dual digital microphones",
      "Dual-language recognition for versatility among diverse users",
      "Advanced voice module for enhanced voice control in smart home devices",
      "Improved far-field recognition and superior command accuracy",
      "Supports seamless connectivity via UART or similar protocols",
      "Ideal for upgrading traditional appliances like fans into modern smart systems",
      "Equipped with noise suppression and active gain control for clear voice input",
    ],
  },
  {
    name: "Dahlia",
    features: [
      "Offline voice processing with four digital microphones",
      "Multi-language recognition for diverse users and global applications",
      "Premium voice module with next-generation voice capabilities",
      "Excels in far-field voice recognition for larger spaces",
      "Supports communication via UART or other protocols, ensuring seamless on-device connectivity.",
      "Transforms appliances like fans into intelligent systems",
      "Advanced noise suppression and active gain control for crystal-clear voice input",
    ],
  },
];

export type ProductType = (typeof PRODUCTS)[0];
export type ProductComponentsType = (typeof components)[0];
