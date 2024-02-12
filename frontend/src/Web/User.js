import React from "react";
import Web from "./Web";

export default function User() {
  const [ok, setOk] = React.useState(true);
  return (
    <div>
      {ok && <Web setOk={setOk} />}
      {!ok && <p>Ok</p>}
    </div>
  );
}
