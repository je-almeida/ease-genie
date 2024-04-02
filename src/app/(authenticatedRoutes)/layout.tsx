import { type PropsWithChildren } from "react";
import { PrefetchTRPCQuery } from "~/components/PrefetchTRPCQuery/PrefetchTRPCQuery";
import { PrivateRoute } from "~/components/PrivateRoute/PrivateRoute";
import AppNav from "~/components/ui/app-nav";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <PrivateRoute>
      <PrefetchTRPCQuery queryName="auth.getProfile">
        <AppNav/>
        <div className="container-full">
          {children}
        </div>
      </PrefetchTRPCQuery>
    </PrivateRoute>
  );
}
