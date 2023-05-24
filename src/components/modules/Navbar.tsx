import { Heading } from "../elements/Heading";
import { Text } from "../elements/Text";
import { clsx } from "clsx";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between px-20 shadow-md backdrop-blur-[18px] max-md:px-4">
      <Heading size="xl" className="text-white">
        Parajás
      </Heading>

      <div className="flex items-center space-x-10">
        <ButtonNavbar text="Início" href="#" active />
        <ButtonNavbar text="Quem somos" href="#sobre" />
        <ButtonNavbar text="Soluções" href="#solucoes" />
        <ButtonNavbar text="Equipe" href="#contato" />
        <ButtonNavbar text="Contato" href="#contato" />
      </div>
    </nav>
  );
}

type ButtonNavbarProps = {
  text: string;
  href: string;
  active?: boolean;
};

function ButtonNavbar({ text, href, active }: ButtonNavbarProps) {
  return (
    <a href={href} className="group relative flex flex-col items-center gap-1">
      <Text
        size="lg"
        className={clsx("transition-colors group-hover:text-gray-100", {
          "text-gray-500": !active,
          "text-white": active,
        })}
      >
        {text}
      </Text>
      <span
        className={clsx(
          "absolute -bottom-1 h-0 w-0 bg-yellow-300 transition-all group-hover:h-[1px] group-hover:w-10/12",
          {
            "h-[1px] w-10/12": active,
          }
        )}
      />
    </a>
  );
}
