import React from "react";
import {greeting} from "../../portfolio";

export default function Profile() {
  return (
    <section style={{padding: "4rem 0"}}>
      <h2 style={{marginBottom: "0.75rem"}}>About</h2>
      <p style={{maxWidth: "70ch", opacity: 0.9}}>
        {/* Replace this with your real about text */}
        {greeting.subTitle}
      </p>
    </section>
  );
}
