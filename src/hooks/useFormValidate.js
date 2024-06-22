import { useState } from "react";

const useFormValidate = (formData) => {
  const [values, setValues] = useState(formData);
  const [errors, setErrors] = useState({});
  const [submittedValues, setSubmittedValues] = useState(null);

  const validate = (values) => {
    let errors = {};

    if (!values.name.trim()) {
      errors.name = "Full Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.surveyTopic) {
      errors.surveyTopic = "Survey Topic is required";
    }
    if (values.surveyTopic === "health") {
      if (!values.dietPreference) {
        errors.dietPreference = "Diet Preference is required";
      }
      if (!values.exerciseFrequency) {
        errors.exerciseFrequency = "Exercise Frequency is required";
      }
    }
    if (values.surveyTopic === "technology") {
      if (!values.favLang) {
        errors.favLang = "Please select atleast one language";
      }
      if (!values.yoe) {
        errors.yoe = "Years of Experirence is required";
      }
    }

    if (values.surveyTopic === "education") {
      if (!values.fieldOfStudy) {
        errors.fieldOfStudy = "Field Of Study is required";
      }
      if (!values.highestQualification) {
        errors.highestQualification = "Select your highest qualification ";
      }
    }

    if (!values.feedback) {
      errors.feedback = "Feedback is required";
    } else if (values.feedback.length < 50) {
      errors.feedback = "Feedback must be at least 50 characters";
    }

    return errors;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length === 0 &&
      Object.keys(values).length !== 0
    ) {
      console.log(values);
      setSubmittedValues(values);
    }
  };
  return {
    values,
    errors,
    submittedValues,
    handleChange,
    handleSubmit,
  };
};

export default useFormValidate;
