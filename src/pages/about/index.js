import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function About() {
  const data = useLoaderData();
  console.table(data);
  const params = useParams();
  console.log("params", params);
  return <div>About</div>;
}

export async function Loader({ params, request }) {
  console.log("params: ", params.teamId);
  return new Promise(function fakeGetTeam(resolve) {
    setTimeout(() => {
      resolve(["雪佛兰", "福特", "路虎"]);
    }, 3000);
  });
}