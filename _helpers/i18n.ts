export interface i18nInterface {
  readonly [key: string]: string;
}

export const i18n: i18nInterface = {
  createTaskDialogTitle: "Создать новую задачу",
  taskTextInputLabel: "Название задачи",
  createTaskDialogSubmitButtonTitle: "Создать",
  createTaskDialogResetButtonTitle: "Сбросить"
};
