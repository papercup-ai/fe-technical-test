import * as React from "react";
import TaskBase from "./taskBase";

const Task8 = () => {
  return (
    <TaskBase
      title="Task 8: Merge segments (again)."
      goal="Merge segments if any overlaps occur after dragging"
      image="/assets/mergeSegments.gif"
    >
      <p>
        If any segment is dragged such that two segments overlap, the segments
        should be merged.
      </p>
    </TaskBase>
  );
};

export default Task8;
