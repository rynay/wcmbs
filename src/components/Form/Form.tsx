import { ChangeEvent } from "react";
import { useState } from "react";
import s from "./Form.module.scss";

type Props = {
  type: "contact" | "registration";
};

export const Form = ({ type }: Props) => {
  const [state, setState] = useState({
    email: "",
    name: "",
    message: "",
    phone: "",
    mtb: false,
    xc: false,
    private: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    console.log(target);
    if (!target) return;
    if (target.type === "checkbox" && "checked" in target) {
      setState((state) => ({
        ...state,
        [target.name]: target.checked,
      }));
    } else {
      setState((state) => ({
        ...state,
        [target.name]: target.value,
      }));
    }
  };

  return (
    <>
      <form
        className={`${s.form} ${
          type === "contact" ? s.form_large : s.form_small
        }`}
        onSubmit={(e) => e.preventDefault()}
      >
        {type === "contact" && (
          <>
            <input
              name="email"
              value={state.email}
              onChange={handleChange}
              className={s.half}
              type="email"
              placeholder="Enter Email"
            />
            <input
              name="name"
              value={state.name}
              onChange={handleChange}
              className={s.half}
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
