import { Plant } from "@phosphor-icons/react";
import { Button } from "~/components/elements/Button";
import { Heading } from "~/components/elements/Heading";
import { Text } from "~/components/elements/Text";

export function Products() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-9 px-20 mt-12 max-[1234px]:flex-wrap max-md:px-4 md:justify-start"
      id="produtos"
    >
      <Heading size="xl" className=" w-fit" color="text-black-900">
        Conheça nossas soluções
      </Heading>

      <div className="flex max-w-xs flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-md max-md:gap-6">
        <div>
          <Plant className="h-16 w-16 text-black-900" />
          <Heading size="lg" className=" w-fit" color="text-black-900">
            Ceuci
          </Heading>
        </div>
        <Text color="text-black-900 ">
          Uma solução sustentável de cortador de folhas de bananeira,
          preservando o meio ambiente e otimizando a produção.
        </Text>
        <Button className="bg-yellow-300">Saiba mais</Button>
      </div>
    </section>
  );
}
