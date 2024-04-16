import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import AddTagPopup from "./overlays/AddTagPopup";

const Home = () => {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div>
      <AddTagPopup tags={tags} setTags={setTags} />
      {tags.map((tag) => (
        <div>{tag}</div>
      ))}
      <div>
        <Input value="" handleChange={() => {}} />
        <Button title="Add Link" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Home;
