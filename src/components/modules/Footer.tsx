/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

import { InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Heading } from "../elements/Heading";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div
          className="-mb-6 flex justify-center space-x-12"
          aria-label="Footer"
        >
          <div className="flex flex-col items-center gap-2">
            <Heading color="text-gray-950">PARAJÁS</Heading>
            <span className="text-gray-700">
            Soluções Sustentáveis
            </span>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center space-x-10">
          <a
            href="https://www.instagram.com/parajasbrasil"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo size={24} className="text-gray-700"/>
          </a>
          <a
            href="https://www.youtube.com/@Parajas-kt9ow"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeLogo size={24} className="text-gray-700"/>
          </a>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Parajás - Todos os direitos reservados.
        </p>
        <Link href="https://parajas.com.br">
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            Feito com ♥ por Parajás.
          </p>
        </Link>
      </div>
    </footer>
  );
}
