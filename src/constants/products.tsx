import sidefolioAceternity from "public/images/sidefolio-aceternity.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import Link from "next/link";

export const products = [
  {
    href: "https://fake-apple-website.vercel.app/",
    title: "Fake Apple Website",
    description: "Apple website clone when the iPhone 15 got released",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["React", "Tailwindcss", "Treejs", "R3F"],
    slug: "fakeapple",

    content: (
      <div>
        <p>
          This repository contains a clone of the Apple website, created for
          educational purposes. It aims to replicate the design and
          functionality of the original site using modern web development
          technologies. <br />
          <Link
            target="_blank"
            href="https://github.com/senethmendis/fake-apple-website?tab=readme-ov-file"
          >
            Check github
          </Link>
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/senethmendis/t-shirt-customizer",
    title: "T-Shirt Customizer",
    description: "small t-shirt customizer can changed color and design",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["React", "Tailwindcss", "GSAP", "Treejs", "R3F"],
    slug: "tshirtcustomizer",
    github: true,
    content: (
      <div>
        <p>
          This repository features a T-shirt customization application built
          with React and Three.js. Users can design their own T-shirts in 3D,
          choosing colors, patterns, and text for a personalized experience.{" "}
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/senethmendis/chat-app-react-firebase",
    title: "Firebase Chat App",
    description: "Chat with added contact and shear files with others",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["React", "Firebase", "Zustand", "React-toastify"],
    slug: "chatapp",
    github: true,
    content: (
      <div>
        <p>
          This repository contains a real-time chat application built with React
          and Firebase. It features user authentication, live messaging, and a
          responsive UI to facilitate seamless communication.{" "}
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/senethmendis/space-x-mobile-app-flutter?tab=readme-ov-file",
    title: "FLutter Space-X Mobile App",
    description: "First App with Flutter.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Flutter", "Dart"],
    slug: "flutterspacex",
    github: true,
    content: (
      <div>
        <p>
          Mobile app using flutter and dart with space-x rocket API. Can check
          for etaisl about the rockets and status of the lunched pads{" "}
        </p>
      </div>
    ),
  },
];
