import { type NextPage } from "next";

import { Default } from "~/components/layouts/Default";
import { Hero } from "~/components/sections/home/Hero";
import { About } from "~/components/sections/home/About";
import { Companies } from "~/components/sections/home/Companies";
import { Products } from "~/components/sections/home/Products";
import { Team } from "~/components/sections/home/Team";
import { Contact } from "~/components/sections/home/Contact";

const Home: NextPage = () => {
  return (
    <Default
      pageTitle="Parajás -  Soluções Sustentáveis"
      description="Nossa missão é desenvolver equipamentos inovadores que seguem as ODS da ONU, visando promover um futuro mais verde e sustentável para todos."
    >
      <Hero />
      <About />
      <Companies />
      <Products />
      <Team />
      <Contact />
    </Default>
  );
};

export default Home;
