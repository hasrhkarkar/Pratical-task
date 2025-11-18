import React, { useState } from "react";
import enrollData from "./enrollData.json";
import "./EnrollForm.scss";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const EnrollForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="enroll-section">
      <div className="enroll-container">
        {/* Left Side - Form */}
        <div className="enroll-left">
          <h2 className="enroll-title">{enrollData.enroll.title}</h2>

          <form className="enroll-form" onSubmit={handleSubmit}>
            {enrollData.enroll.formFields.map((field) => (
              <input
                key={field.id}
                type={field.type}
                name={field.id}
                placeholder={field.placeholder}
                value={formData[field.id as keyof FormData]}
                onChange={handleChange}
                required={field.required}
                className="form-input"
              />
            ))}

            <button type="submit" className="form-button">
              {enrollData.enroll.buttonText}
            </button>
          </form>

          {submitted && (
            <p className="success-message">Thank you for enrollment!</p>
          )}
          <div className="enroll-right">
            <img
              src={enrollData.enroll.image.src}
              alt={enrollData.enroll.image.alt}
              className="enroll-image"
            />
          </div>
        </div>

        {/* Right Side - Image */}
      </div>
    </section>
  );
};

export default EnrollForm;
