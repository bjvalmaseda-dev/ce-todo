import React, { useState } from "react";
import { FiX, FiSave, FiTrash2, FiPlusSquare as AddIcon } from "react-icons/fi";
import useAppContext from "../hooks/useAppContext";
import { ITask } from "../types";
import ActionButton from "./ActionButton";
import { buttons } from "./../utils";
import { HighlightWithinTextarea } from "react-highlight-within-textarea";
interface Props {
  task: ITask;
}

const EditTaskForm: React.FC<Props> = ({ task }) => {
  const [editTask, setEditTask] = useState(task.content);
  const { dispatch } = useAppContext();
  const isEdited = task.content !== editTask;

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    isEdited &&
      editTask &&
      dispatch({ type: "EDIT_TASK", payload: { ...task, content: editTask } });
    handleCancel();
  };

  const handleCancel = () => {
    dispatch({ type: "SET_TASK_TO_EDIT", payload: -1 });
  };

  const handleRemove = () => {
    dispatch({ type: "REMOVE_TASK", payload: task.id });
  };

  return (
    <form
      onSubmit={handleEdit}
      className="-mx-2 my-3"
      data-testid="edit-task-form"
    >
      <div className="shadow-md">
        <div className="border p-2 border-gray-200">
          <div className="flex items-center">
            <AddIcon className="text-blue-500" />
            <div className="ml-2 w-5/6">
              <HighlightWithinTextarea
                data-testid="test"
                value={editTask}
                onChange={(value) => setEditTask(value)}
                placeholder="Type to add new task"
                highlight={[
                  {
                    highlight: /#([\w-]+)/gi,
                    className: "hashtag",
                  },
                  {
                    highlight:
                      // eslint-disable-next-line no-control-regex
                      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi,
                    className: "mail",
                  },
                  {
                    highlight: /@([\w-]+)/gi,
                    className: "mention",
                  },
                  {
                    highlight:
                      /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi,
                    className: "link",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="border p-2 border-gray-200 bg-gray-50">
          <div className="flex py-3">
            {buttons.map((btn) => (
              <ActionButton key={`button-${btn.label}`} {...btn} />
            ))}
            <ActionButton
              label="Remove"
              icon={<FiTrash2 />}
              action={handleRemove}
            />
            <div className="ml-auto flex">
              <button
                type="submit"
                className="flex border rounded p-2 text-white mr-2 ml-auto bg-blue-500"
              >
                {isEdited ? <FiSave /> : <FiX />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditTaskForm;
