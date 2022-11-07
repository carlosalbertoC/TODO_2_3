// ^ Este es el card que sale al presionar el button del input group

import { getTaskApi } from "../../services";
import { useEffect, useState } from "react";

//! EL PROBLEMA ACTUAL ESTA EN LOS CARD TASK

const Task = ({ datesForTask }) => {
  const [taskValues, setTaskValues] = useState("");

  const toDateClick = async () => {
    const flag = await getTaskApi();
    setTaskValues(flag);
    console.log(taskValues);
  };

  //!NO FUNCIONO
  useEffect(() => {
    toDateClick();
  }, []);

  return (
    <div className="card text-bg-light mb-3">
      <div className="card-header">{taskValues.name}</div>
      <div className="card-body">
        <h5 className="card-title">Primary card title</h5>
        <button type="button" className="btn btn-success" onClick={toDateClick}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Task;
