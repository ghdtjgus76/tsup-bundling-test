import fs from "fs";
import path from "path";

const componentsDir = path.resolve("./packages/ui/src");

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const componentTemplate = (componentName) => `
import React, { ChangeEvent } from 'react';

interface ${componentName}Props {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  required?: boolean;
}

const ${componentName}: React.FC<${componentName}Props> = ({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  required = false,
}) => {
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
  const componentPath = path.join(componentsDir, `${componentName}.tsx`);

  fs.writeFileSync(componentPath, componentContent, "utf8");
}

console.log("50개의 텍스트 필드 컴포넌트가 생성되었습니다.");
