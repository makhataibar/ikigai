import React, { useContext } from "react";
import { Portal, Dialog } from "react-native-paper";

import { i18n } from "../../_helpers/i18n";
import { CreateTaskButtons } from "./CreateTaskForm/CreateTaskButtons";
import { CreateTaskForm } from "./CreateTaskForm/CreateTaskForm";
import {
  CreateTaskDialogContext,
  CreateTaskDialogContextInterface
} from "./create-task-dialog-context";

export const CreateTaskDialog = () => {
  const {
    isVisible,
    setVisible
  }: CreateTaskDialogContextInterface = useContext<
    CreateTaskDialogContextInterface
  >(CreateTaskDialogContext);
  const hideDialog = (): void => {
    setVisible(false);
  };

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={hideDialog}>
        <Dialog.Title>{i18n.createTaskDialogTitle}</Dialog.Title>
        <Dialog.Content>
          <CreateTaskForm />
        </Dialog.Content>
        <Dialog.Actions>
          <CreateTaskButtons></CreateTaskButtons>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
