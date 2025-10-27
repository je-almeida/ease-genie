"use client";

import dynamic from "next/dynamic";

const Schedule = dynamic(() => import("~/components/Scheduler/schedule"), {
  ssr: false,
});

export default function AgendaPage() {
  return <Schedule />;
}
