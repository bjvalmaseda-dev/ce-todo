import React, { useState } from "react";
import NewNoteButton from "./components/NewNoteButton";
import NoteForm from "./components/NoteForm";

const App: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
  };

  return (
    <div className="container mx-auto my-4">
      {isAdding ? <NoteForm /> : <NewNoteButton action={handleAdd} />}
    </div>
  );
};

export default App;
