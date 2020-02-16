import React, { useState } from "react";

import { CreateTaskButton } from "./CreateTaskButton";
import { CreateTaskDialog } from "./CreateTaskDialog";
import {
  CreateTaskDialogContext,
  CreateTaskDialogContextInterface
} from "./create-task-dialog-context";

export const Tasks = () => {
  const [createTaskDialogIsVisible, setVisibleCreateTaskDialog] = useState(
    false
  );
  const createTaskDialogValue: CreateTaskDialogContextInterface = {
    isVisible: createTaskDialogIsVisible,
    setVisible: setVisibleCreateTaskDialog
  };

  return (
    <CreateTaskDialogContext.Provider value={createTaskDialogValue}>
      <CreateTaskButton />
      <CreateTaskDialog/>
    </CreateTaskDialogContext.Provider>
  );
};
