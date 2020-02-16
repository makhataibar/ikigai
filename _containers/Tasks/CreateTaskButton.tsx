import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

import {
  CreateTaskDialogContext,
  CreateTaskDialogContextInterface
} from "./create-task-dialog-context";

export const CreateTaskButton = () => {
  const { setVisible }: CreateTaskDialogContextInterface = useContext<
    CreateTaskDialogContextInterface
  >(CreateTaskDialogContext);
  const showDialog = (): void => {
    setVisible(true);
  };

  return <FAB icon="plus" style={styles.fab} onPress={showDialog}/>;
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});
