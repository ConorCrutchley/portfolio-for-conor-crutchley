import type { IInputProps } from '@/models/inputProps.model';
import InputContainer from '@/components/UI/InputContainer';
import styles from '@/styles/input.module.css';

const Input = (props: IInputProps) => {
  return (
    <InputContainer {...props}>
      <input
        {...props.inputProps}
        className={`${styles['input-field']} ${props.error?.message ? styles['input-field-error'] : ''}`}
      />
    </InputContainer>
  );
};

export default Input;
