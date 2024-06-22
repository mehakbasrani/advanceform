import React from "react";
import useFormValidate from "../hooks/useFormValidate";
import EducationSection from "./EducationSection";
import HealthSection from "./HealthSection";
import TechSection from "./TechSection";

const FromThree = () => {
  const formData = {
    name: "",
    email: "",
    surveyTopic: "",
    favLang: "",
    yoe: "",
    dietPreference: "",
    exerciseFrequency: "",
    fieldOfStudy: "",
    highestQualification: "",
    feedback: "",
  };

  const { values, handleChange, handleSubmit, errors, submittedValues } =
    useFormValidate(formData);

  const handleSelectChange = (event) => {
    handleChange(event);
  };

  return (
    <>
      <nav className="bg-gray-800 py-4 w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">
                Advanced Dynamic Form
              </span>
            </div>
            <div className="flex items-en">
              <button
                onClick={(e) => handleSubmit(e)}
                className="border border-2 border-white px-5 py-2 text-white  rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className=" pt-20 gap-6">
        <form className="flex gap-6 gap-y-2  max-w-7xl mx-auto sm:px-6 lg:px-8  ">
          <div className=" grid w-[90%]  grid-cols-2 gap-6 gap-y-2  max-w-7xl mx-auto sm:px-6 lg:px-8  ">
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.name ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.name && <p> {errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <input
                // type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.email ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.email && <p> {errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Survey Topic</label>
              <select
                name="surveyTopic"
                onChange={handleSelectChange}
                value={values.surveyTopic}
                className={`w-full px-3 py-2 border border-gray-300 rounded ${
                  errors.surveyTopic ? "border border-red-600 bg-red-100" : ""
                }`}
              >
                <option value="">Survey Topic</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
              </select>
              {errors.surveyTopic && <p>{errors.surveyTopic}</p>}
            </div>
            <div className="opacity-0"></div>
            <div className="mb-4">
              {values.surveyTopic === "health" && (
                <HealthSection
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
              {values.surveyTopic === "education" && (
                <EducationSection
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
              {values.surveyTopic === "technology" && (
                <TechSection
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}
            </div>
            <div className="opacity-0"></div>

            <div className="mb-4">
              <label className="block font-bold mb-2">Feedback</label>
              <textarea
                name="feedback"
                value={values.feedback}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
                  errors.feedback ? "border border-red-600 bg-red-100" : ""
                }`}
              />
              {errors.feedback && <p>{errors.feedback}</p>}
            </div>
          </div>
        </form>

        {submittedValues && (
          <div className="flex items-center justify-center w-screen h-screen bg-gray-600 overflow-x-hidden">
            <div className="w-full md:pt-24  pb-0 max-w-md">
              <div className="bg-gray-800 shadow-md rounded-xl md:px-8 px-4  pb-10 mb-4">
                <div className=" flex  justify-center pt-10">
                  <div className="bg-gray-900 rounded-lg shadow-lg p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center">
                        <svg
                          className="text-gray-400 w-12 h-12"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="text-left text-white">
                      <p>
                        <span className="font-bold">Name: </span>
                        {submittedValues.name}
                      </p>
                      <p>
                        <span className="font-bold">Email: </span>
                        {submittedValues.email}
                      </p>
                      <p>
                        <span className="font-bold text-white">
                          Survey Topic:{" "}
                        </span>
                        {submittedValues.surveyTopic}
                      </p>
                      <p>
                        <span className="font-bold">Favourite Language: </span>
                        {submittedValues.favLang}
                      </p>

                      {submittedValues.yoe && (
                        <p>
                          <span className="font-bold">
                            Years of Experience:{" "}
                          </span>
                          {submittedValues.yoe}
                        </p>
                      )}
                      {submittedValues.dietPreference && (
                        <p>
                          <span className="font-bold">Diet Preference: </span>
                          {submittedValues.dietPreference}
                        </p>
                      )}
                      {submittedValues.exerciseFrequency && (
                        <p>
                          <span className="font-bold">
                            Exercise Frequency:{" "}
                          </span>
                          {submittedValues.exerciseFrequency}
                        </p>
                      )}
                      {submittedValues.fieldOfStudy && (
                        <p>
                          <span className="font-bold">Field Of Study: </span>
                          {submittedValues.fieldOfStudy}
                        </p>
                      )}
                      {submittedValues.highestQualification && (
                        <p>
                          <span className="font-bold">
                            Highest Qualification:{" "}
                          </span>
                          {submittedValues.highestQualification}
                        </p>
                      )}
                      <p>
                        <span className="font-bold text-white">Feedback: </span>
                        {submittedValues.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FromThree;
