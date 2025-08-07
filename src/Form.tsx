import React, { useState } from 'react';

interface FormProps {
  input: number;
  textarea: number;
  checkbox: number;
}

const Form: React.FC = () => {
  const [formConfig, setFormConfig] = useState<FormProps>({ input: 0, textarea: 0, checkbox: 0 });
  const [build, setBuild] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormConfig({ ...formConfig, [name]: parseInt(value) || 0 });
  };

  const handleBuild = () => {
    setBuild(true);
  };

  return (
    <div>
      <h2>Настройка формы</h2>
      <div>
        <label>
          Input:
          <input
            type="number"
            name="input"
            value={formConfig.input}
            onChange={handleChange}
            min={0}
          />
        </label>
      </div>
      <div>
        <label>
          Textarea:
          <input
            type="number"
            name="textarea"
            value={formConfig.textarea}
            onChange={handleChange}
            min={0}
          />
        </label>
      </div>
      <div>
        <label>
          Checkbox:
          <input
            type="number"
            name="checkbox"
            value={formConfig.checkbox}
            onChange={handleChange}
            min={0}
          />
        </label>
      </div>
      <button onClick={handleBuild}>Build</button>

      {build && (
        <div style={{ marginTop: '20px' }}>
          <h3>Динамическая форма</h3>
          {Array.from({ length: formConfig.input }).map((_, i) => (
            <input key={`input-${i}`} type="text" placeholder={`Input ${i + 1}`} style={{ display: 'block', margin: '8px 0' }} />
          ))}
          {Array.from({ length: formConfig.textarea }).map((_, i) => (
            <textarea key={`textarea-${i}`} placeholder={`Textarea ${i + 1}`} style={{ display: 'block', margin: '8px 0' }} />
          ))}
          {Array.from({ length: formConfig.checkbox }).map((_, i) => (
            <label key={`checkbox-${i}`} style={{ display: 'block', margin: '8px 0' }}>
              <input type="checkbox" /> Checkbox {i + 1}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Form;