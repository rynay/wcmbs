import { useEffect, useRef } from "react";
import s from "./ImageModal.module.scss";

type Props = {
  src: string;
  close: () => void;
};

export const ImageModal = ({ src, close }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  useEffect(() => {
    if (!buttonRef.current) return;
    buttonRef.current.focus();
  }, []);

  return (
    <div className={s.overlay} onClick={close}>
      <section className={s.modal} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="" />
        <button
          onClick={() => close()}
          onKeyDown={(e) => (e.key === "Escape" ? close() : undefined)}
          ref={buttonRef}
          aria-label="close"
        >
          <span>&#x2b;</span>
        </button>
      </section>
    </div>
  );
};
