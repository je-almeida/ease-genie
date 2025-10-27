"use client"

import { type Provider } from "@supabase/supabase-js";
import { supabase } from "~/server/supabase/supabaseClient";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import * as React from 'react';
import Link from "next/link";
import Image from "next/image"
import { Button } from "~/components/ui/button";

import { DevLoginButtons } from "../_components/DevLoginButtons";
 
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form"
import { FloatingLabelInput  } from "~/components/ui/floating-label-input"

const LoginPage = () => {

  const signInWithOauth = (provider: Provider) => {
    void supabase().auth.signInWithOAuth({
      provider: provider,
    });
  };

  async function signInWithAzure() {
    const { data, error } = await supabase().auth.signInWithOAuth({
      provider: 'azure',
      options: {
        scopes: 'email',
      },
    })
  }

  const formSchema = z.object({
    username: z
    .string()
    .min(1, { message: "Digite um e-mail cadastrado." })
    .email("Este e-mail não é válido.")
    .refine((e) => e === "teste@gmail.com", "Esse e-mail não está cadastrado"),
    password: z
    .string()
    .min(1, { message: "Digite sua senha." })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "teste@gmail.com",
      password: "",
    },
    mode: 'onTouched',
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <main>
      <div className="columns-2">

        {/* ============  Form ============= */}
        <div className="p-gt h-screen flex flex-col flex-wrap justify-center content-center"> 
          <div className="flex flex-col justify-center content-center min-w-[320px] space-y-4">
            <Button  
              variant="outline" 
              onClick={() => {
                signInWithOauth("google");
              }}
            >
              <Image src="/assets/google-icon.svg" width="20" height="20" alt="Continuar com Google" priority={true}/> 
              Continuar com Google
            </Button>

            <Button 
              variant="outline"
              onClick={() => {
                signInWithAzure();
              }}
            >
              <Image src="/assets/microsoft-icon.svg" width="20" height="20" alt="Coontinuar com Microsoft" priority={true}/> 
              Continuar com Microsoft
            </Button>

            <span className="text-center">ou</span>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col justify-center">
                <FormField
                  control={form.control}
                  name= "username"
                  render={({ field }) => (
                    <FormItem>
                      <FloatingLabelInput {...field} type="email" id="username" label="E-mail" />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name= "password"
                  render={({ field }) => (
                    <FormItem>
                      <FloatingLabelInput {...field} type="password" id="password" label="Senha" />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Login</Button>
              </form>
            </Form>
            {process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" && (
              <DevLoginButtons />
            )}
          </div> 
        </div>

        {/* ============ Quote ============= */}
        <div className="bg-gradient p-gt h-screen flex flex-col justify-between items-end"> 
          <Image className="brightness-0 invert" src="/assets/logo.svg" width="135" height="48" alt="Ease Genie" priority={true}/> 
            <div className="text-right"> 
              <div className="text-white body-xxl max-w-[530px]">"O Ease Genie me ajudou a cuidar dos meus clientes. Agora eu sou capaz de fazer muito mais, em menos tempo"</div>
              <div className="text-white body pt-lg">Doutor Rodrigo Ferraz</div>
            </div>
        </div>

      </div>
    </main>
  );
};

export default LoginPage;
