import { useContext } from "react";
import { FormContext } from "./FormContext";

export default function Step1() {
  const { formData, setFormData, setStep } = useContext(FormContext);

  return (
    <div>
      <h2>Step 1: Personal Info</h2>
      <input
        type="text"
        placeholder="Adesile"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="adesile@iotbtech.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      
      <button onClick={() => setStep(2)}>Next</button>
    </div>
  );
}