import { Heading } from "~/components/elements/Heading";

import { Envelope, MapTrifold, Phone } from "@phosphor-icons/react";
import { ContactForm } from "~/components/modules/ContactForm";

export function Contact() {
  return (
    <section
      className="mt-24 flex w-full flex-col items-center justify-center gap-9 px-20 max-[1234px]:flex-wrap max-md:px-4 md:justify-start"
      id="contato"
    >
      <Heading size="xl" className="w-fit max-md:text-center" color="text-black-900">
        Entre em contato conosco!
      </Heading>

      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <div>
          <div className="mt-5">
            <div className="mt-2 flex items-center space-x-2 text-gray-600">
              <MapTrifold className="h-6 w-6 text-gray-400" />
              <span>
                Av. Alcindo Cacela, 1523 - Umarizal, Belém - PA, Brasil,
                66040-020
              </span>
            </div>
            <div className="mt-2 flex items-center space-x-2 text-gray-600">
              <Envelope className="h-6 w-6 text-gray-400" />
              <a href="mailto:contato@parajas.com.br">contato@parajas.com.br</a>
            </div>
            <div className="mt-2 flex items-center space-x-2 text-gray-600">
              <Phone className="h-6 w-6 text-gray-400" />
              <a href="tel:+55 (91) 987095580">+55 (91) 987095580</a>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
