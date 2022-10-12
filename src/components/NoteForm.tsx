import React, { useState } from "react";
import {
  FiMaximize2 as OpenIcon,
  FiPlusSquare as AddIcon,
  FiCalendar,
  FiUnlock as PublicIcon,
  FiLoader as NormalIcon,
  FiStopCircle as EstimationIcon,
} from "react-icons/fi";
import ActionButton from "./ActionButton";

type Button = {
  label: string;
  icon: JSX.Element;
  container?: boolean;
};

const buttons: Button[] = [
  {
    label: "Open",
    icon: <OpenIcon />,
    container: true,
  },
  {
    label: "Today",
    icon: <FiCalendar />,
  },
  {
    label: "Public",
    icon: <PublicIcon />,
  },
  {
    label: "Normal",
    icon: <NormalIcon />,
  },
  {
    label: "Estimation",
    icon: <EstimationIcon />,
  },
];

const NoteForm = () => {
  const [newNote, setNewNote] = useState("");

  return (
    <div className="shadow-md">
      <div className="border p-2 border-gray-200">
        <div className="flex items-center">
          <AddIcon className="text-blue-500" />
          <input
            type="text"
            placeholder="Type to add new task"
            className="focus:outline-none ml-2 w-5/6"
            onChange={(e) => setNewNote(e.target.value)}
          />
        </div>
      </div>
      <div className="border p-2 border-gray-200 bg-gray-50">
        <div className="flex py-3">
          {buttons.map((btn) => (
            <ActionButton {...btn} disabled={newNote === "" ? true : false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
