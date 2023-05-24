import { Button } from "~/components/elements/Button";
import { Heading } from "~/components/elements/Heading";
import { Text } from "~/components/elements/Text";

export function Hero() {
  const handleGoAbout = () => {
    const about = document.getElementById("sobre");
    about?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-[url('/static/images/cotijuba-bg.webp')] bg-cover bg-center px-20 transition-shadow max-md:gap-4 max-md:px-4 ">
      <Heading asChild size="6xl" className="text-white">
        <strong className="text-5xl max-md:text-center max-md:text-2xl">
          UM MUNDO MAIS{" "}
          <span className="bg-yellow-300 text-black-900">SUSTENTÁVEL</span> É{" "}
          <br /> POSSÍVEL E NECESSÁRIO!
        </strong>
      </Heading>
      <Text className="text-center text-xl text-yellow-300 max-md:text-base">
        Vamos juntos nessa jornada?
      </Text>

      <Button
        className="w-48 max-w-[12rem] bg-yellow-300 text-black-900"
        onClick={handleGoAbout}
      >
        Saiba mais
      </Button>
    </section>
  );
}
