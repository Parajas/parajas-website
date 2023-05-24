/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { Heading } from "~/components/elements/Heading";
import { Text } from "~/components/elements/Text";

export function About() {
  return (
    <section className="relative flex w-full min-h-[calc(100vh_-_250px)] items-center justify-center gap-9 bg-[url('/static/textures/lines.webp')] p-20 max-[1234px]:flex-wrap max-md:px-4 max-md:py-16" id="sobre">
      <img
        src="/static/elements/plant_1.svg"
        alt="imagem de uma planta"
        className="absolute -left-12 top-0 h-48 max-[1234px]:hidden xl:top-12"
      />
      <img
        src="/static/elements/plant_2.svg"
        alt="imagem de uma planta"
        className="absolute -left-12 bottom-2 h-48 max-[1234px]:hidden"
      />
      <img
        src="/static/elements/plant_3.svg"
        alt="imagem de uma planta"
        className="absolute -top-10 right-0 h-48 max-[1234px]:hidden xl:top-2"
      />
      <img
        src="/static/elements/plant_4.svg"
        alt="imagem de uma planta"
        className="absolute -bottom-4 right-0 h-48 max-[1234px]:hidden"
      />
      <div className="flex flex-col gap-4 max-sm:items-center md:w-[40%]">
        <Heading
          size="xl"
          className=" w-fit bg-yellow-300"
          color="text-black-900"
        >
          Quem Somos?
        </Heading>

        <Text className="text-white md:text-base">
          Somos uma empresa comprometida em trazer soluções sustentáveis de
          equipamentos, impulsionando o desenvolvimento e o impacto positivo em
          comunidades locais. Nosso foco está alinhado com os Objetivos de
          Desenvolvimento Sustentável (ODS) da ONU, buscando oferecer soluções
          inovadoras que contribuam para um futuro mais sustentável.
        </Text>
        <Text className="text-white md:text-base">
          Nosso compromisso com a sustentabilidade não se limita apenas aos
          produtos que desenvolvemos. Também buscamos incorporar práticas
          sustentáveis em todas as etapas do nosso negócio, desde a produção até
          a logística. Valorizamos a economia circular, o uso eficiente de
          recursos naturais e a redução do impacto ambiental.
        </Text>
      </div>

      <Image
        src="/static/images/about.webp"
        alt=""
        width={500}
        height={500}
        quality={100}
      />
    </section>
  );
}
