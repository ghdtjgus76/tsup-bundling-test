import fs from "fs";
import path from "path";

const componentsDir = path.resolve("./packages/ui/src");

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const componentTemplate = (componentName) => `
import PropTypes from 'prop-types';

const ${componentName} = ({ label, value, onChange, placeholder, type, required }) => {
  return (
    <div style={styles.container}>
      <label style={styles.label} htmlFor="${componentName.toLowerCase()}">
        {label}
      </label>
      <input
        id="${componentName.toLowerCase()}"
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

${componentName}.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  required: PropTypes.bool,
};

${componentName}.defaultProps = {
  placeholder: '',
  type: 'text',
  required: false,
};

export default ${componentName};

const styles = {
  container: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
};
`;

for (let i = 1; i <= 50; i++) {
  const componentName = `TextField${i}`;
  const componentContent = componentTemplate(componentName);
  const componentPath = path.join(componentsDir, `${componentName}.jsx`);

  fs.writeFileSync(componentPath, componentContent, "utf8");
}

console.log("50개의 텍스트 필드 컴포넌트가 생성되었습니다.");
