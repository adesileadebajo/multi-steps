import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    age: "",
  });

  const [step, setStep] = useState(1);

  return (
    <FormContext.Provider value={{ formData, setFormData, step, setStep }}>
      {children}
    </FormContext.Provider>
  );
}
