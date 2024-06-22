import React from "react";

const TechSection = ({ values, handleChange, errors }) => {
  return (
    <div className=" pt-10 ">
      <div className=" grid w-[90%]  grid-cols-2 gap-6 gap-y-2  max-w-7xl mx-auto sm:px-6 lg:px-8  ">
        <div className="mb-4">
          <label className="block font-bold mb-2">Favorite Language</label>
          <select
            name="favLang"
            value={values.favLang}
            onChange={handleChange}
            className={`w-full px-3 py-2 border border-gray-300 rounded ${
              errors.favLang ? "border border-red-600 bg-red-100" : ""
            }`}
          >
            <option value="">Select Language</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C">C</option>
          </select>

          {errors.favLang && <p> {errors.favLang}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="yoe" className="block font-bold mb-2">
            Years of Experience
          </label>
          <input
            type="number"
            id="yoe"
            name="yoe"
            value={values.yoe}
            onChange={handleChange}
            className={`w-full px-3 py-2 border focus:outline-none border-gray-300 rounded ${
              errors.yoe ? "border border-red-600 bg-red-100" : ""
            }`}
          />
          {errors.yoe && <p> {errors.yoe}</p>}
        </div>
      </div>
    </div>
  );
};

export default TechSection;
