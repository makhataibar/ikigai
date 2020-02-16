import { Formik, FormikValues } from "formik";
import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import { TextInputField } from "../../../_components/react-native-paper-formik-fields/TextInputField";
import { i18n } from "../../../_helpers/i18n";

export interface CreateTaskFormInterface {
  readonly task: string;
}
const initialValues: CreateTaskFormInterface = {
  task: ""
};

export const CreateTaskForm = () => {
  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <View>
          <TextInputField name="task" label={i18n.taskTextInputLabel} />
        </View>
      )}
    </Formik>
  );
};
