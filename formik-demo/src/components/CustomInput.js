import React from 'react';
import { useField } from 'formik';
import './Form.css';

const CustomInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-container">
      <label htmlFor={props.id || props.name}>{label}</label>
      {type === 'file' ? (
        <input className={meta.touched && meta.error ? 'input-error' : ''} type="file" {...field} {...props} />
      ) : type === 'checkbox' ? (
        <div>
          <input type="checkbox" {...field} {...props} />
          <span>{label}</span>
        </div>
      ) : (
        <input className={meta.touched && meta.error ? 'input-error' : ''} type={type} {...field} {...props} />
      )}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
