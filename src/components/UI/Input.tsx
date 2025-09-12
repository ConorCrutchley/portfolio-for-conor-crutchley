import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/styles/input.module.css';

const Input = ({
  label,
  inputProps,
  error,
  required = false,
}: {
  label: string;
  inputProps: UseFormRegisterReturn;
  error: FieldError | undefined;
  required?: boolean;
}) => {
  return (
    <div className={styles['input-container']}>
      <label
        htmlFor={inputProps.name}
        className={styles['input-label']}
      >{`${label} ${required ? '*' : ''}`}</label>
      <input
        {...inputProps}
        className={`${styles['input-field']} ${error?.message ? styles['input-field-error'] : ''}`}
      />
      {error?.message && (
        <p className={styles['input-error']}>{error?.message}</p>
      )}
    </div>
  );
};

export default Input;
