/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { useForm,  } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

import { env } from "../../env.mjs";
import { Button } from "../elements/Button";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  }) as any;
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey = env.NEXT_PUBLIC_FORM_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Parajas Contato",
      subject: "Nova mensagem",
      redirect_url: "https://parajas.com.br/",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      // @ts-expect-error - TODO: FIX THIS
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      // @ts-expect-error - TODO: FIX THIS
      setMessage(msg);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        ></input>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Nome Completo"
            autoComplete="false"
            className={`w-full rounded-md border-2 bg-white px-4 py-3 text-gray-950  outline-none placeholder:text-gray-200   focus:ring-4  ${
              errors.name
                ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                : "d border-gray-300 ring-gray-100 focus:border-gray-600"
            }`}
            {...register("name", {
              required: "O nome completo é obrigatório",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Endereço de Email
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Endereço de Email"
            // name="email"
            autoComplete="false"
            className={`w-full rounded-md border-2 bg-white px-4 py-3 text-gray-950 outline-none placeholder:text-gray-200 focus:ring-4  ${
              errors.email
                ? "border-red-600 ring-red-100 focus:border-red-600 "
                : "border-gray-300 ring-gray-100 focus:border-gray-600"
            }`}
            {...register("email", {
              required: "Coloque seu email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Coloque um email válido",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <textarea
            placeholder="Sua mensagem"
            className={`h-36 w-full rounded-md border-2 bg-white px-4 py-3 text-gray-950 outline-none placeholder:text-gray-200 focus:ring-4  ${
              errors.message
                ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                : "border-gray-300 ring-gray-100 focus:border-gray-600  dark:ring-0"
            }`}
            {...register("message", {
              required: "Coloque sua mensagem",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <Button>
          {isSubmitting ? (
            <svg
              className="mx-auto h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Enviar mensagem"
          )}
        </Button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-center text-sm text-green-500">
          {message || "Sucesso! Sua mensagem foi enviada."}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-center text-sm text-red-500">
          {message || "Erro! Sua mensagem não foi enviada."}
        </div>
      )}
    </>
  );
}
