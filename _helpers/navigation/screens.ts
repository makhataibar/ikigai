import { ComponentType } from "react";

import { CreateTaskScreen } from "../../_screens/CreateTask/CreateTaskScreen";
import { i18n } from "../i18n";

export interface ScreenInterface {
  readonly name: string;
  readonly component: ComponentType;
  readonly options?: object;
}

export const screens: ScreenInterface[] = [
  {
    name: "CreateTask",
    component: CreateTaskScreen,
    options: {
      title: i18n.createTaskScreenTitle
    }
  }
];
