import type { IInputProps } from '@/models/inputProps.model';
import InputContainer from '@/components/UI/InputContainer';
import styles from '@/styles/input.module.css';

const Textarea = (props: IInputProps) => {
  return (
    <InputContainer {...props}>
      <textarea
        {...props.inputProps}
        className={`${styles['input-field']} ${props.error?.message ? styles['input-field-error'] : ''}`}
        rows={10}
      />
    </InputContainer>
  );
};

export default Textarea;
