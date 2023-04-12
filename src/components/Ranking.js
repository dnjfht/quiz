import React from "react";
import { useSelector } from "react-redux";

export default function Ranking() {
  const userName = useSelector((state) => state.rank.user_name);
  console.log(userName);

  return <div>Ranking</div>;
}
