import { useContext } from "react";
import { FormContext } from "./FormContext";

export default function Step2() {
  const { formData, setFormData, setStep } = useContext(FormContext);

  return (
    <div>
      <h2>Step 2: Address</h2>
      <button onClick={() => setStep(1)}>Previous</button>
      <input
        type="text"
        placeholder="Street"
        value={formData.street}
        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
      />
      <input
        type="number"
        placeholder="e.g 34"
        min="1" max="120"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
      <button onClick={() => setStep(3)}>Next</button>
    </div>
  );
}