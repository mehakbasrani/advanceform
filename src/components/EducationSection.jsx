import React from "react";

const EducationSection = ({ errors, values, handleChange }) => {
  return (
    <div className="pt-10 gap-6">
      <div className=" grid w-[90%]  grid-cols-2 gap-6 gap-y-2  max-w-7xl mx-auto sm:px-6 lg:px-8  ">
        <div className="mb-4">
          <label className="block font-bold mb-2">Highest Qualification</label>
          <select
            name="highestQualification"
            value={values.highestQualification}
            onChange={handleChange}
            className={`w-full px-3 py-2 border border-gray-300 rounded ${
              errors.highestQualification
                ? "border border-red-600 bg-red-100"
                : ""
            }`}
          >
            <option value="">Select Qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
          {errors.highestQualification && <p>{errors.highestQualification}</p>}
        </div>

        <div>
          <label className="block font-bold mb-2">Field of Study</label>
          <input
            type="text"
            name="fieldOfStudy"
            value={values.fieldOfStudy}
            onChange={handleChange}
            className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
              errors.fieldOfStudy ? "border border-red-600 bg-red-100" : ""
            }`}
          />
          {errors.fieldOfStudy && <p>{errors.fieldOfStudy}</p>}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
