import React, { ChangeEvent } from "react";

interface TextField50Props {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  required?: boolean;
}

const TextField50: React.FC<TextField50Props> = ({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  required = false,
}) => {
  return (
    <div style={styles.container}>
      <label style={styles.label} htmlFor="textfield50">
        {label}
      </label>
      <input
        id="textfield50"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={styles.input}
      />
    </div>
  );
};

export default TextField50;

const styles = {
  container: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
};