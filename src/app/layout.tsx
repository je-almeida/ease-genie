import { Providers } from "~/providers";
import { getServerUser } from "~/utils/auth";
import { AuthProvider } from "~/providers/AuthProvider/AuthProvider";
import { TRPCReactProvider } from "~/trpc/react";
import { headers } from "next/headers";
import { Inter } from "next/font/google";

import "~/styles/globals.css";
import 'material-symbols/rounded.css';

export const metadata = {
  title: "Ease Genie",
  description: "Seu cuidado brilha. As tarefas somem.",
};

const inter = Inter({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
})

async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getServerUser();

  return (
    <>
      <html lang="en">
        <head/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body className={inter.className}>
          <TRPCReactProvider headers={headers()}>
            <AuthProvider {...user}>
              <Providers>
                {children}
              </Providers>
            </AuthProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </>
  );
}

export default RootLayout;
