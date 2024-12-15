export const PRODUCTS = [
  {
    name: "Voice assistance Unplugged!",
    mainHeading: "Integrated Voice Module.",
    paragraph1:
      "The Integrated Voice Module is a versatile solution designed to bring smart voice control to your devices. Engineered for seamless integration, it enables voice-activated functionalities with robust processing capabilities, making everyday interactions effortless and intuitive.",
    paragraph2:
      "The Integrated Voice Module offers offline voice processing, allowing reliable performance without internet dependency. It provides precise control for devices like fans and supports communication via UART or other protocols for seamless on device communication. Equipped with single-language support, it also offers the flexibility to upgrade to multiple languages. Advanced features like noise suppression and active gain control ensure clear voice recognition even in noisy environments. Use of digital microphone delivers high-quality audio input for optimal performance.",
    image: "/circuit.png",
    imageTitle: "Integrated Voice Module",
    imageDesc:
      "The SAMA Voice Module simplifies home control, appliance interactions smarter and more convenient.",
    featurepoints: [
      "Offline Voice Processing",
      "Effortless Device Integration",
      "Multilingual Flexibility",
    ],
    components: [
      {
        name: "Aster",
        features: [
          "Built with a single digital microphone",
          "Single-language support for precise voice control",
          "Ideal for integration into existing appliances like fans",
          "Supports seamless communication via UART or other protocols",
          "Compact voice module for simplifying and smartening home appliances",
          "Offline voice processing for consistent and reliable performance without internet",
          "Equipped with noise suppression and active gain control for clear command recognition",
        ],
      },
      {
        name: "Bellis",
        features: [
          "Offline voice processing with dual digital microphones",
          "Dual-language recognition for versatility among diverse users",
          "Improved far-field recognition and superior command accuracy",
          "Ideal for upgrading traditional appliances like fans into modern smart systems",
          "Supports seamless connectivity via UART or similar protocols",
          "Equipped with noise suppression and active gain control for clear voice input",
          "Advanced voice module for enhanced voice control in smart home devices",
        ],
      },
      {
        name: "Dahlia",
        features: [
          "Offline voice processing with four digital microphones",
          "Multi-language recognition for diverse users and global applications",
          "Transforms appliances like fans into intelligent systems",
          "Excels in far-field voice recognition for larger spaces",
          "Supports seamless integration via UART or other communication protocols",
          "Premium voice module with next-generation voice capabilities",
          "Advanced noise suppression and active gain control for crystal-clear voice input",
        ],
      },
    ],
  },
  {
    name: "Your voice can help you!",
    mainHeading: "Accessory Voice Module.",
    paragraph1:
      "The Accessory Voice Module is a versatile, all-in-one solution designed to simplify and modernize the way you interact with IR-enabled devices. With advanced offline voice recognition and seamless mobile application integration, it eliminates the need for handheld remotes while delivering a customizable experience tailored to your needs.",
    paragraph2:
      "The Accessory Voice Module brings offline voice processing to control IR-enabled devices such as ACs, TVs, fans, and lights effortlessly through voice commands or a mobile application. With support for OTA updates and single-language recognition, it also offers the flexibility to select multiple languages to suit diverse requirements. Its mobile application allows comprehensive control over connected devices, including playback and streaming functionality for speakers, which can be designed to integrate Bluetooth and Wi-Fi audio streaming. Equipped with two PDM microphones for superior voice recognition and active gain control, the module ensures reliable performance in various environments. Perfect for IoT integration, this module is highly customizable to meet the unique demands of your business.",
    image: "/accessory.jpg",
    imageTitle: "Integrated Voice Module",
    imageDesc:
      "The SAMA Voice Module simplifies home control, appliance interactions smarter and more convenient.",
    featurepoints: [
      "Offline Voice Processing",
      "IR Learning Capability",
      "Complimentary Mobile Application",
    ],
    components: [
      {
        name: "Eruca",
        features: [
          "Equipped with two PDM microphones for superior voice capture",
          "Single-language support with an option to select multiple languages",
          "Supports Over-the-Air (OTA) updates for ongoing improvements",
          "Utilizes AGC(Active Gain Control), AEC (Acoustic Echo Cancellation), VNR (Voice to Noise Ratio Estimator), and NS (Noise Suppression) for enhanced voice clarity in noisy environments.",
          "Can be integrated into IoT devices like speakers, enabling Bluetooth and Wi-Fi audio streaming",
          "Innovative voice module enabling offline voice processing for controlling IR-enabled devices (ACs, TVs, fans, lights)",
          "Control devices using simple voice commands or a mobile application",
          "Voice control for playback functions in IoT devices",
          "Customizable to meet business-specific needs",
          "Redefines convenience and functionality for connected devices",
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
