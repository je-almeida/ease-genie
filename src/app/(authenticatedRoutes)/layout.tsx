import { type PropsWithChildren } from "react";
import { PrefetchTRPCQuery } from "~/components/PrefetchTRPCQuery/PrefetchTRPCQuery";
import { PrivateRoute } from "~/components/PrivateRoute/PrivateRoute";
import AppHeader from "~/components/ui/AppHeader";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <PrivateRoute>
      <PrefetchTRPCQuery queryName="auth.getProfile">
        <AppHeader/>
        <div className="container-full">
          {children}
        </div>
      </PrefetchTRPCQuery>
    </PrivateRoute>
  );
}
