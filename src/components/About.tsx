"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
export default function About() {
  return (
    <div>
      <div className="max-w-4xl">
        <Image
          src="https://avatars.githubusercontent.com/u/83528403?v=4"
          alt="dp"
          width={100}
          height={100}
          className="rounded-full my-6"
        />
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Seneth Mendis - a passionate developer,
          photographer, and a connoisseur of awesome design.
        </Paragraph>
        <Paragraph className=" mt-4">
          I am an undergraduate dedicated to web and mobile development, aiming
          to combine my technical and creative skills to make a meaningful
          impact. My expertise includes front-end and back-end technologies,
          with certifications in Flutter, Web Programming, React.js, and
          Node.js. Beyond development, I serve as President of the Photographic
          Club at SLIIT City University, channeling my passion for visual
          storytelling. As a committee member of the IT Committee in the
          Rotaract Club of SLIIT, I’ve cultivated leadership, teamwork, and
          project management skills. I’m motivated by continuous learning,
          creativity, and a strong focus on delivering user-centered solutions.
        </Paragraph>
      </div>
    </div>
  );
}
