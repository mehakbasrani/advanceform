import React from "react";

const HealthSection = ({ errors, values, handleChange }) => {
  return (
    <div className="pt-10 gap-6">
      <div className=" grid w-[90%]  grid-cols-2 gap-6 gap-y-2  max-w-7xl mx-auto sm:px-6 lg:px-8  ">
        <div className="mb-4">
          <label className="block font-bold mb-2">Exercise Frequency</label>
          <select
            name="exerciseFrequency"
            value={values.exerciseFrequency}
            onChange={handleChange}
            className={`w-full px-3 py-2 border border-gray-300 rounded ${
              errors.exerciseFrequency ? "border border-red-600 bg-red-100" : ""
            }`}
          >
            <option value="">Select Frequency</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Rarely">Rarely</option>
          </select>
          {errors.exerciseFrequency && <p>{errors.exerciseFrequency}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Diet Preference</label>
          <select
            name="dietPreference"
            value={values.dietPreference}
            onChange={handleChange}
            className={`w-full px-3 py-2 border border-gray-300 rounded ${
              errors.dietPreference ? "border border-red-600 bg-red-100" : ""
            }`}
          >
            <option value="">Select Diet</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>
          {errors.dietPreference && <p>{errors.dietPreference}</p>}
        </div>
      </div>
    </div>
  );
};

export default HealthSection;
