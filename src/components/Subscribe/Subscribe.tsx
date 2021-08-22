import s from "./Subscribe.module.scss";
import { useState } from "react";
import { Heading } from "../Heading";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <section className={s.subscribe}>
      <Heading level={3}>Subscribe to updates</Heading>
      <p>
        Our weekly mailout keeps you updated with news about future events and
        all things.
      </p>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};
