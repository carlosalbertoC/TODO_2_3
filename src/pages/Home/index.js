//! CONVERTIR A HOMEVIEW FROM "ROUTES"

import { getTaskApi, postToApi } from "../../services";

import { FormControl } from "../../components";
import { Task } from "../../components";

import { useState, useEffect } from "react";

function Home() {
  const [objectToNewTask, setobjectToNewTask] = useState([]);
  const [count, setCount] = useState();

  const datesFromMockaApi = async () => {
    const flag = await getTaskApi();
    setCount(flag);
  };

  let now = new Date();
  const newTask = (task) => {
    setobjectToNewTask({
      name: task,
      createdAt: now,
      doneAt: null,
      deletedAt: null,
    });
    postToApi(objectToNewTask);
  };

  // const datesToMockapi = () => {
  //   postToApi(objectToNewTask);
  // };

  useEffect(() => {
    datesFromMockaApi();
  }, []);

  return (
    <div className="container">
      <FormControl newTask={newTask} />
      {count ? count.map((e, i) => <Task key={i} />) : ""}
    </div>
  );
}

export default Home;
