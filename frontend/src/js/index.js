import React from "react";
import ReactDOM from "react-dom";
import "../css/index.scss";

const content = (
  <>
    <h1 className="text-lg">Hello World!</h1>
    <div className="my-2">
      <label className="inline-block w-full">
        <span className="text-left ml-4">Test checkbox</span>
        <input
          type="checkbox"
          className="float-right h-4 w-4 rounded border-gray-300 focus:border-purple-900
                   focus:ring-2 focus:ring-purple-200 focus:ring-opacity-50 text-purple-900"
        />
      </label>
    </div>
  </>
);

ReactDOM.render(content, document.getElementById("body"));
