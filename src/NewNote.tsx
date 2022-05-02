import React,{ChangeEvent} from "react"

export const NewNote: React.FC<{ addNote: (notes: string) => void }> = (
  props
) => {
  const [note, setNote] = React.useState("");

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };
  const onAddNoteClick = () => {
    props.addNote(note);
    setNote("");
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        name="note"
        placeholder=" Enter your Note"
      />
      <button onClick={onAddNoteClick}>Add Note</button>
    </div>
  );
};
