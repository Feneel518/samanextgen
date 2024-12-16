export const PRODUCTS = [
  {
    id: "ivm",
    name: "Voice assistance Unplugged!",
    mainHeading: "Integrated Voice Module",
    paragraph1:
      "The Integrated Voice Module offers a seamless solution for voice-activated control, with Aster, Bellis, and Dahlia tailored for diverse needs. From simple setups to advanced integrations, these modules bring effortless, intuitive smart control to your devices.",
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
          <>
            Built with a{" "}
            <span className="underline underline-offset-4">
              single digital microphone
            </span>
          </>,
          <>
            <span className="underline underline-offset-4">
              Single-language support
            </span>{" "}
            for precise voice control
          </>,
          <>
            Ideal for integration into existing appliances like{" "}
            <span className="underline underline-offset-4">fans </span>{" "}
          </>,
          <>
            Supports seamless communication via{" "}
            <span className="underline underline-offset-4">UART</span> or
            similar protocols
          </>,
          <>
            <span className="underline underline-offset-4">
              Compact voice module
            </span>{" "}
            for simplifying and smartening home appliances{" "}
          </>,
          <>
            <span className="underline underline-offset-4">
              Offline voice processing
            </span>{" "}
            for consistent and{" "}
            <span className="underline underline-offset-4">
              reliable performance
            </span>{" "}
            without internet{" "}
          </>,
          <>
            Equipped with{" "}
            <span className="underline underline-offset-4">
              noise suppression
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-4">
              active gain control
            </span>{" "}
            for clear command recognition
          </>,
          // "Built with a single digital microphone",
          // "Single-language support for precise voice control",
          // "Ideal for integration into existing appliances like fans",
          // "Supports seamless communication via UART or other protocols",
          // "Compact voice module for simplifying and smartening home appliances",
          // "Offline voice processing for consistent and reliable performance without internet",
          // "Equipped with noise suppression and active gain control for clear command recognition",
        ],
      },
      {
        name: "Bellis",
        features: [
          <>
            Offline voice processing with{" "}
            <span className="underline underline-offset-4">
              dual digital microphones
            </span>
          </>,
          <>
            Supports seamless connectivity via{" "}
            <span className="underline underline-offset-4">UART</span> or
            similar protocols
          </>,
          <>
            <span className="underline underline-offset-4">Dual-language</span>{" "}
            recognition for versatility among diverse users{" "}
          </>,
          <>
            Improved{" "}
            <span className="underline underline-offset-4">far-field</span>{" "}
            recognition and superior command accuracy
          </>,
          <>
            Advanced voice module for{" "}
            <span className="underline underline-offset-4">
              enhanced voice control
            </span>{" "}
            in smart home devices{" "}
          </>,
          <>
            Equipped with{" "}
            <span className="underline underline-offset-4">
              noise suppression
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-4">
              active gain control
            </span>{" "}
            for clear voice input{" "}
          </>,
          <>
            Ideal for upgrading traditional appliances like fans into{" "}
            <span className="underline underline-offset-4">
              modern smart systems
            </span>{" "}
          </>,
          // "Offline voice processing with dual digital microphones",
          // "Supports seamless connectivity via UART or similar protocols",
          // "Dual-language recognition for versatility among diverse users",
          // "Improved far-field recognition and superior command accuracy",
          // "Advanced voice module for enhanced voice control in smart home devices",
          // "Equipped with noise suppression and active gain control for clear voice input",
          // "Ideal for upgrading traditional appliances like fans into modern smart systems",
        ],
      },
      {
        name: "Dahlia",
        features: [
          <>
            Excels in{" "}
            <span className="underline underline-offset-4">far-field</span>{" "}
            voice recognition for larger spaces
          </>,
          <>
            Offline voice processing with{" "}
            <span className="underline underline-offset-4">
              four digital microphones
            </span>
          </>,
          <>
            Transforms appliances like{" "}
            <span className="underline underline-offset-4">fans</span> into
            intelligent systems
          </>,
          <>
            <span className="underline underline-offset-4">Premium voice</span>{" "}
            module with next-generation voice capabilities
          </>,
          <>
            <span className="underline underline-offset-4">Multi-language</span>{" "}
            recognition for diverse users and global applications
          </>,
          <>
            Supports seamless integration via{" "}
            <span className="underline underline-offset-4">UART</span> or other
            communication protocols
          </>,
          <>
            Advanced{" "}
            <span className="underline underline-offset-4">
              noise suppression
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-4">
              active gain control
            </span>{" "}
            for crystal-clear voice input
          </>,
          // "Offline voice processing with four digital microphones",
          // "Excels in far-field voice recognition for larger spaces",
          // "Transforms appliances like fans into intelligent systems",
          // "Premium voice module with next-generation voice capabilities",
          // "Multi-language recognition for diverse users and global applications",
          // "Supports seamless integration via UART or other communication protocols",
          // "Advanced noise suppression and active gain control for crystal-clear voice input",
        ],
      },
    ],
  },
  {
    id: "avm",
    name: "Your voice can help you!",
    mainHeading: "Accessory Voice Module.",
    paragraph1:
      "The Accessory Voice Module is a versatile, all-in-one solution designed to simplify and modernize the way you interact with IR-enabled devices. With advanced offline voice recognition and seamless mobile application integration, it eliminates the need for handheld remotes while delivering a customizable experience tailored to your needs.",
    paragraph2:
      "The Accessory Voice Module brings offline voice processing to control IR-enabled devices such as ACs, TVs, fans, and lights effortlessly through voice commands or a mobile application. With support for OTA updates and single-language recognition, it also offers the flexibility to select multiple languages to suit diverse requirements. Its mobile application allows comprehensive control over connected devices, including playback and streaming functionality for speakers, which can be designed to integrate Bluetooth and Wi-Fi audio streaming. Equipped with advanced noise cancellation and signal amplification algorithms, this module ensures exceptional voice clarity even in noisy environments. Its versatile design makes it suitable for integration into various IoT applications. This module is highly customizable to meet the unique demands of your business.",
    image: "/accessory1.png",
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
          <>
            Supports{" "}
            <span className="underline underline-offset-4">
              Multiple Languages
            </span>
          </>,
          <>
            <span className="underline underline-offset-4">Customizable</span>{" "}
            to meet business-specific needs
          </>,
          <>
            Supports{" "}
            <span className="underline underline-offset-4">
              Over-the-Air (OTA)
            </span>{" "}
            updates for ongoing improvements
          </>,
          <>
            Equipped with{" "}
            <span className="underline underline-offset-4">
              two Digital microphones
            </span>{" "}
            for superior voice capture{" "}
          </>,
          <>
            Control devices using{" "}
            <span className="underline underline-offset-4">
              simple voice commands
            </span>{" "}
            or a{" "}
            <span className="underline underline-offset-4">
              mobile application
            </span>{" "}
          </>,
          <>
            Can be integrated into{" "}
            <span className="underline underline-offset-4">IoT devices</span>{" "}
            like speakers, enabling Bluetooth and Wi-Fi audio streaming{" "}
          </>,
          <>
            Innovative voice module enabling offline voice processing for
            controlling{" "}
            <span className="underline underline-offset-4">
              IR-enabled devices
            </span>{" "}
            (ACs, TVs, fans, lights){" "}
          </>,
          <>
            Utilizes <span className="underline underline-offset-4">AGC</span>{" "}
            (Active Gain Control),{" "}
            <span className="underline underline-offset-4">AEC</span> (Acoustic
            Echo Cancellation),{" "}
            <span className="underline underline-offset-4">VNR</span> (Voice to
            Noise Ratio Estimator), and{" "}
            <span className="underline underline-offset-4">NS</span> (Noise
            Suppression) for enhanced voice clarity in noisy environments.
          </>,
          // "Supports Multiple Languages",
          // "Customizable to meet business-specific needs",
          // "Voice control for playback functions in IoT devices",
          // "Supports Over-the-Air (OTA) updates for ongoing improvements",
          // "Equipped with two Digital microphones for superior voice capture",
          // "Control devices using simple voice commands or a mobile application",
          // "Can be integrated into IoT devices like speakers, enabling Bluetooth and Wi-Fi audio streaming",
          // "Innovative voice module enabling offline voice processing for controlling IR-enabled devices (ACs, TVs, fans, lights)",
          // "Utilizes AGC(Active Gain Control), AEC (Acoustic Echo Cancellation), VNR (Voice to Noise Ratio Estimator), and NS (Noise Suppression) for enhanced voice clarity in noisy environments.",
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
      <div>
        Offline voice processing with
        <div className="underline underline-offset-2">
          four digital microphones
        </div>
      </div>,
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
