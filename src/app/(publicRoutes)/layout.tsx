import { type PropsWithChildren } from "react";
import SiteHeader from "~/components/ui/siteHeader";

export default function Layout({ children }: PropsWithChildren) {

  return (
    <main>
        <SiteHeader/>

        <div className="container-full">
          {children}
        </div>
    </main>
  );

}
