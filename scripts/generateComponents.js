import fs from "fs";
import path from "path";

const componentsDir = path.resolve("./packages/ui/src");

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const componentTemplate = (componentName) => `
import React from 'react';
import PropTypes from 'prop-types';
import './${componentName}.css';

const ${componentName} = ({ label, value, onChange, placeholder, type, required }) => {
  return (
    <div className="${componentName.toLowerCase()}-container">
      <label htmlFor="${componentName.toLowerCase()}">텍스트필드</label>
      <input
        id="${componentName.toLowerCase()}"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="${componentName.toLowerCase()}-input"
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
`;

const cssTemplate = (componentName) => `
.${componentName.toLowerCase()}-container {
  margin-bottom: 1rem;
}

.${componentName.toLowerCase()}-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.${componentName.toLowerCase()}-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
`;

for (let i = 1; i <= 50; i++) {
  const componentName = `TextField${i}`;
  const componentContent = componentTemplate(componentName);
  const componentPath = path.join(componentsDir, `${componentName}.jsx`);

  const cssContent = cssTemplate(componentName);
  const cssPath = path.join(componentsDir, `${componentName}.css`);

  fs.writeFileSync(componentPath, componentContent, "utf8");
  fs.writeFileSync(cssPath, cssContent, "utf8");
}

console.log("50개의 텍스트 필드 컴포넌트가 생성되었습니다.");
