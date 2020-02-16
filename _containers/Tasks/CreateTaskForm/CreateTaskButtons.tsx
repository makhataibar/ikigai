import { useFormikContext } from "formik";
import React from "react";
import { Button } from "react-native-paper";

import { i18n } from "../../../_helpers/i18n";

export const CreateTaskButtons = () => {
  const { handleSubmit, handleReset } = useFormikContext();

  return (
    <>
      <Button icon="plus" onPress={handleSubmit} mode="contained">
        {i18n.createTaskDialogSubmitButtonTitle}
      </Button>
        <Button ></Button>
    </>
  );
};
