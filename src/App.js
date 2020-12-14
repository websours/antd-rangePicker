import React from "react";
import { render } from "react-dom";
import { TimePicker } from "antd";
import "antd/dist/antd.css";

const { RangePicker } = TimePicker;
const App = () => {
  return (
    <div>
      <RangePicker use12Hours />
    </div>
  );
};

render(<App />, document.getElementById("root"));
