import PropTypes from "prop-types";

const TextField9 = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  required,
}) => {
  return (
    <div style={styles.container}>
      <label style={styles.label} htmlFor="textfield9">
        {label}
      </label>
      <input
        id="textfield9"
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

TextField9.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number"]),
  required: PropTypes.bool,
};

TextField9.defaultProps = {
  placeholder: "",
  type: "text",
  required: false,
};

export default TextField9;

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
