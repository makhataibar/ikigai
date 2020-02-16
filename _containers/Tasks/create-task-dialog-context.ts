import { Context, createContext, Dispatch, SetStateAction } from "react";

export interface CreateTaskDialogContextInterface {
  readonly isVisible: boolean;
  readonly setVisible: Dispatch<SetStateAction<boolean>>;
}

export const CreateTaskDialogContext: Context<CreateTaskDialogContextInterface> = createContext<
  CreateTaskDialogContextInterface
>({
  isVisible: false,
  setVisible: () => {}
});
