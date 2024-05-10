import { useState } from 'react';
import style from "@/app/ui/tag.module.css"
import CloseIcon from '@material-ui/icons/Close';
import { TextField } from '@mui/material';

interface TagInputProps {
  tags: string[];
  onTagAdd: (tag: string) => void;
  onTagDelete: (index: number) => void;
  placeholder?:string
}

const TagInput: React.FC<TagInputProps> = ({ tags, onTagAdd, onTagDelete ,placeholder}) => {
  const [newTag, setNewTag] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && newTag.trim() !== '') {
      onTagAdd(newTag.trim());
      setNewTag('');
    }
  };

  const handleTagDelete = (index: number) => {
    onTagDelete(index);
  };

  return (
    <div>
      <div className={style.showtag}>
        {tags.map((tag, index) => (
          <div key={index} className={style.tag}>
            {tag}
            <span className={style.close} onClick={() => handleTagDelete(index)}> <CloseIcon /></span>
          </div>
        ))}
      </div>
      <TextField
        type="text"
        placeholder={placeholder}
        value={newTag}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  );
};

export default TagInput;
