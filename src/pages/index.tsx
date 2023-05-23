import { type NextPage } from "next";
import { Default } from "~/components/layouts/Default";

const Home: NextPage = () => {
  return (
    <Default
      pageTitle="Parajás -  Soluções Sustentáveis"
      description="Nossa missão é desenvolver equipamentos inovadores que seguem as ODS da ONU, visando promover um futuro mais verde e sustentável para todos."
    >
      <h1>Hello World!</h1>
    </Default>
  );
};

export default Home;
