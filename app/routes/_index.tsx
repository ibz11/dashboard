import type { MetaFunction } from "@remix-run/node";

import Hero from "~/components/dashboard/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (

<Hero/>
  );
}

