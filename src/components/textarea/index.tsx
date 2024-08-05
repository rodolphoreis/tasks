import { useState } from "react";
import styles from "./textarea.module.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = ({ ...req }) => {
  const [input, setInput] = useState<string>("");

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <>
      <textarea
        name="input"
        placeholder="Texto"
        className={styles.textarea}
        onChange={handleTextareaChange}
        {...req}
      ></textarea>
    </>
  );
};

export default Textarea;
