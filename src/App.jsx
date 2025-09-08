import { useContext } from "react";
import { FormContext } from "./FormContext";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Confirmation from "./Confirmation.jsx";

export default function App() {
  const { step } = useContext(FormContext);

  return (
    <div>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Confirmation />}
    </div>
  );
}