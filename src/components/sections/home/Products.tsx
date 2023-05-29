import { TreeEvergreen, TreePalm } from "@phosphor-icons/react";
import { Button } from "~/components/elements/Button";
import { Heading } from "~/components/elements/Heading";
import { Text } from "~/components/elements/Text";

export function Products() {
  return (
    <section
      className="mt-12 flex w-full flex-col items-center justify-center gap-9 px-20 py-12 max-[1234px]:flex-wrap max-md:px-4 md:justify-start"
      id="produtos"
    >
      <Heading size="xl" className=" w-fit" color="text-black-900">
        Conheça nossas soluções
      </Heading>
      <div className="flex flex-wrap justify-center gap-4">
        <Product
          title="Ceuci"
          description="Um cortador de folhas de bananeira que potencializa a economia de tempo e esforço. Contribuindo para a economia circular e a geração de renda em comunidades locais."
          icon={<TreePalm className="h-16 w-16 text-black-900" />}
        />
        <Product
          title="Gaia"
          description="Um sistema inovador de controle de frequência que utiliza a tecnologia de QR Code. Com o objetivo de promover a sustentabilidade e reduzir o impacto ambiental causado pelo consumo excessivo de papel."
          icon={<TreeEvergreen className="h-16 w-16 text-black-900" />}
        />
      </div>
    </section>
  );
}

type ProductProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function Product({ title, description, icon }: ProductProps) {
  return (
    <div className="flex max-w-xs flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-md max-md:gap-6">
      <div>
        {icon}
        <Heading size="lg" className=" w-fit" color="text-black-900">
          {title}
        </Heading>
      </div>
      <Text color="text-black-900 ">{description}</Text>
      <Button className="bg-yellow-300">Saiba mais</Button>
    </div>
  );
}
