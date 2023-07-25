import React from 'react';
import TextField from '@mui/material/TextField';

interface TextInputPropsTypes {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
export type { TextInputPropsTypes };

const TextInput = ({
  value,
  placeholder,
  disabled,
  onChange = () => {},
}: TextInputPropsTypes) => {
  return (
    <TextField
      id="outlined-multiline-flexible"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default TextInput;
