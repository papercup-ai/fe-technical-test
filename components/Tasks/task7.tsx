import * as React from "react";
import TaskBase from "./taskBase";

const Task7 = () => {
  return (
    <TaskBase
      title="Extension 1: Dragging segments"
      goal="Add ability to drag segments"
      image="/assets/dragSegments.gif"
    >
      <p>
        We would like the ability to drag segments on the timeline. Remember the
        timing information below should also change.
      </p>
      <p>
        For this, we do not want to write anything to the database, but merely
        update the state in the browser. You may use any state management
        approach you like, including any external state management libraries you
        feel would be helpful.
      </p>
    </TaskBase>
  );
};

export default Task7;
