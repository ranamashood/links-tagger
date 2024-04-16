import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

interface Props {
  tags: string[];
  setTags: React.Dispatch<string[]>;
}

const AddTagPopup = ({ tags, setTags }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [newTag, setNewTag] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  const addNewTag = (e: FormEvent) => {
    e.preventDefault();

    if (tags.some((tag) => tag.toLowerCase() === newTag.toLowerCase())) {
      setIsError(true);
      return;
    }

    setTags([...tags, newTag]);
    setNewTag("");
    setIsError(false);
  };

  return (
    <div>
      <Button title="Add Tag" onClick={togglePopup} />
      {isOpen && (
        <form onSubmit={addNewTag}>
          {isError && <div>Tag with same name already exists</div>}
          <Input value={newTag} handleChange={handleInputChange} />
          <Button type="submit" title="Add Tag" />
        </form>
      )}
    </div>
  );
};

export default AddTagPopup;
