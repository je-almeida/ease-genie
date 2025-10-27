import {
  createTRPCProxyClient,
  loggerLink,
  TRPCClientError,
} from "@trpc/client";
import { cookies, headers } from "next/headers";

import { appRouter } from "~/server/api/root";
import { transformer } from "./shared";
import { cache } from "react";
import { createTRPCContext } from "~/server/api/trpc";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers());
  const ckies = cookies();
  const mappedCookies = new Map(ckies);
  const accessToken = mappedCookies.get("access-token")?.value;

  if (accessToken) {
    heads.set("authorization", accessToken);
  }

  heads.set("x-trpc-source", "rsc");
  heads.set("cookie", ckies.toString());

  return createTRPCContext({
    headers: heads,
  });
});

export const api = appRouter.createCaller(createContext);
