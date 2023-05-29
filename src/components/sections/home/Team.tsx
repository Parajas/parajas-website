import Image from "next/image";

import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Heading } from "~/components/elements/Heading";
import { Text } from "~/components/elements/Text";

const members = [
  {
    name: "Ryan Oliveira",
    photo: "/static/members/ryanoliveira.jpeg",
    links: {
      instagram: "https://www.instagram.com/ryanolivrr",
      linkendi: "https://www.linkedin.com/in/ryanolivr",
      github: "https://www.github.com/ryanolivrdev",
    },
    role: "CEO e Fundador",
  },
  {
    name: "Letícia Malato",
    photo: "/static/members/leticiamalato.jpeg",
    links: {
      instagram: "https://www.instagram.com/leticiamalato",
      linkendi: "https://www.linkedin.com/in/leticiamalato",
      github: "https://www.github.com/leticiamalato",
    },
    role: "CTO e Fundadora",
  },
  {
    name: "Letícia Lima",
    photo: "/static/members/leticialima.jpeg",
    links: {
      instagram: "https://www.instagram.com/lwtferr",
      github: "https://github.com/letyferr",
    },
    role: "CXO e Fundadora",
  },
  {
    name: "Miguel Angelim",
    photo: "/static/members/miguel.jpeg",
    links: {
      instagram: "https://www.instagram.com/mxguxll_",
      linkendi: "https://www.linkedin.com/in/miguel-cavalcante-292378235",
      github: "https://github.com/Miguelangell1",
    },
    role: "Eng. Hardware e Fundador",
  },
  {
    name: "Vinícius Casanova",
    photo: "/static/members/viniciuscasanova.jpeg",
    links: {
      instagram: "https://www.instagram.com/vini_casa",
      linkendi: "https://www.linkedin.com/in/vinicius-casanova-624716230",
      github: "https://github.com/Vini-Casanova",
    },
    role: "Eng. Hardware e Fundador",
  },
];

export function Team() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-9 px-20 mt-20  max-[1234px]:flex-wrap max-md:px-4 md:justify-start"
      id="equipe"
    >
      <Heading size="xl" className=" w-fit" color="text-black-900">
        Nosso Time
      </Heading>

      <div className="flex w-full flex-wrap max-w-4xl items-center justify-center gap-9">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}

type MemberCardProps = {
  name: string;
  photo: string;
  links: {
    instagram?: string;
    linkendi?: string;
    github?: string;
  };
  role: string;
};

function MemberCard({ name, photo, links, role }: MemberCardProps) {
  return (
    <div className="flex w-60 flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-md group">
      <Image
        src={photo}
        width={150}
        height={150}
        alt={name}
        className="rounded-full h-36 w-36 inline-block group-hover:shadow-xl transition group-hover:scale-105"
      />
      <Heading size="sm" className=" w-fit" color="text-black-900">
        {name}
      </Heading>
      <Text color="text-black-900 ">{role}</Text>
      <div className="flex items-center justify-center gap-4">
        {links.instagram && (
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramLogo
              className="h-8 w-8 text-black-900 transition-colors hover:text-yellow-300"
              aria-label="Instagram"
            />
          </a>
        )}

        {links.linkendi && (
          <a href={links.linkendi} target="_blank" rel="noopener noreferrer">
            <LinkedinLogo
              className="h-8 w-8 text-black-900 transition-colors hover:text-yellow-300"
              aria-label="Linkedin"
            />
          </a>
        )}

        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <GithubLogo
              className="h-8 w-8 text-black-900 transition-colors hover:text-yellow-300"
              aria-label="Github"
            />
          </a>
        )}
      </div>
    </div>
  );
}
