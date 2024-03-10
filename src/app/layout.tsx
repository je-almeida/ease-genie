import "~/styles/globals.css";
import { Roboto } from "next/font/google";
import { getServerUser } from "~/utils/auth";
import 'material-symbols/rounded.css';

export const metadata = {
  title: "Ease Genie",
  description: "Seu cuidado brilha. As tarefas somem.",
};

const roboto = Roboto({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getServerUser();

  return (
    <>
      <html lang="en">
        <head/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body className={roboto.className}>
          {children}
        </body>
      </html>
    </>
  );
}

export default RootLayout;
