import { ChangeEvent } from "react";
import { useState } from "react";
import s from "./Form.module.scss";

type Props = {
  type: "contact" | "registration";
};

export const Form = ({ type }: Props) => {
  const [state, setState] = useState<{ [key in string]: any }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!e.target) return;
    setState((state) => ({
      ...state,
      [e.target.name]:
        "checked" in e.target ? e.target.checked : e.target.value,
    }));
  };

  return (
    <>
      <form className={s.form} onSubmit={(e) => e.preventDefault()}>
        {type === "contact" && (
          <>
            <input
              name="email"
              value={state.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Email"
            />
            <input
              name="name"
              value={state.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Name"
            />
            <textarea
              name="message"
              value={state.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
            />
          </>
        )}
        {type === "registration" && (
          <>
            <input
              name="email"
              value={state.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Email"
            />
            <input
              name="name"
              value={state.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Name"
            />
            <input
              name="phone"
              value={state.phone}
              onChange={handleChange}
              type="phone"
              placeholder="Enter Phone Number"
            />
            <label>
              <input
                name="mtb"
                type="checkbox"
                onChange={handleChange}
                checked={state.mtb}
              />
              <span>MTB Course</span>
            </label>
            <label>
              <input
                name="xc"
                type="checkbox"
                onChange={handleChange}
                checked={state.xc}
              />
              <span>XC Course</span>
            </label>
            <label>
              <input
                name="private"
                type="checkbox"
                onChange={handleChange}
                checked={state.private}
              />
              <span>Private Course</span>
            </label>
            <textarea
              name="message"
              value={state.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
            />
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
