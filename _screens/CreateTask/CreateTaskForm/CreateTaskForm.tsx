import { Formik } from "formik";
import React from "react";

import { Grid } from "../../../_components/grid/Grid";
import { TextInputField } from "../../../_components/react-native-paper-formik-fields/TextInputField";
import { i18n } from "../../../_helpers/i18n";
import { createTaskInitialValues } from "./create-task-initial-values";
import { useCreateTaskOnSubmit } from "./use-create-task-on-submit";

export const CreateTaskForm = () => {
  const handleSubmit = useCreateTaskOnSubmit();

  return (
    <Formik initialValues={createTaskInitialValues} onSubmit={handleSubmit}>
      {() => (
        <>
          <Grid>
            <TextInputField name="task" label={i18n.createTaskTextInputLabel} />
          </Grid>
        </>
      )}
    </Formik>
  );
};
