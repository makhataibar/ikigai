import { FormikHelpers, FormikValues } from "formik";

export const useCreateTaskOnSubmit = (): ((
  values: FormikValues,
  formikHelpers: FormikHelpers<FormikValues>
) => void) => {
  return (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
    console.log(values);
  };
};
