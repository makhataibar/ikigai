import { useField } from "formik";
import React from "react";
import { TextInput } from "react-native-paper";

export interface TextInputFieldInterface {
  readonly name: string;
  readonly label: string;
}

export const TextInputField = ({ name, ...props }: TextInputFieldInterface) => {
  const [field] = useField(name);

  return <TextInput {...field} {...props} />;
};
