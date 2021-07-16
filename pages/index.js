import Head from "next/head";
import Meta from "../components/Meta";

import HomePage from "../components/homepage";

export default function Home() {
  return (
    <div>
      <Meta />
      <HomePage />
    </div>
  );
}
