"use client";

import Link from "next/link";
import { api } from "~/trpc/react";


const Homepage = async () => {
  const { data } = api.auth.getProfile.useQuery();

  return (
    <main>
      <h1 className="head-lg mb-md">Dashboard</h1>
      <div className="text-lg">Email: {data?.email}</div>
      <div className="text-lg">Name: {data?.fullName}</div>
    </main>
  );
};

export default Homepage;