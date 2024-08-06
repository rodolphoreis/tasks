"use client";

import { HTMLProps } from "react";
import styles from "./textarea.module.css";

const Textarea = ({ ...rest }: HTMLProps<HTMLTextAreaElement>) => {
  return (
    <>
      <textarea name="input" className={styles.textarea} {...rest}></textarea>
    </>
  );
};

export default Textarea;
