import type { IInputContainerProps } from '@/models/inputProps.model';
import styles from '@/styles/input.module.css';

const InputContainer = ({
  children,
  label,
  inputProps,
  error,
  required = false,
}: IInputContainerProps) => {
  return (
    <div className={styles['input-container']}>
      <label
        htmlFor={inputProps.name}
        className={styles['input-label']}
      >{`${label} ${required ? '*' : ''}`}</label>
      {children}
      {error?.message && (
        <p className={styles['input-error']}>{error?.message}</p>
      )}
    </div>
  );
};

export default InputContainer;
