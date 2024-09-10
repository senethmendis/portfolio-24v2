import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hello there! I&apos;m Seneth Mendis
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        Intern Software Engineer | Undergraduate | Proficient in JavaScript |{" "}
        Node | React | Flutter | NextJs
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Passionate about exploring diverse tech stacks 🛠️ | Constantly adapting
        and learning new technologies 💡
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Small Selection of My Projects
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
