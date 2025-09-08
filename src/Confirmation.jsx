import { useContext } from "react";
import { FormContext } from "./FormContext";

export default function Confirmation() {
  const { formData, setStep } = useContext(FormContext);

  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Street:</strong> {formData.street}</p>
      <p><strong>Age:</strong> {formData.age}</p>

      <button onClick={() => setStep(2)}>Previous</button>
      <button onClick={() => alert("Form Submitted!")}>Submit</button>
    </div>
  );
}