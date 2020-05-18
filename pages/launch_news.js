import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Launches } from "../components/launches";
export default function Launch_News() {
  const { posts } = useSelector((state) => state.post);

  return (
    <div>
      <h2>The Latest Launch News</h2>
      <Launches data={posts} key={posts.flight_number} />
    </div>
  );
}
