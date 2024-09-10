import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Link from "next/link";
import { Download } from "lucide-react";
export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        <a
          href="/Seneth Mendis CV.pdf"
          download="Seneth Mendis CV"
          className=" flex items-center gap-3"
        >
          <Download size={20} />
          Dowload CV
        </a>
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
