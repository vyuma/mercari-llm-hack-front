'use client';
import React, { useState } from 'react';
import { TextField, Chip, Box, Autocomplete } from '@mui/material';

type TagSelectorProps = {
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<string[]>>;
    };

const TagSelector = ({tags,setTags}:TagSelectorProps) => {
  // Predefined tags
  const predefinedTags = ['アイドルグッズ', 'アニメグッツ', 'フィギュア'];

  // State to store selected tags and input value
  const [inputValue, setInputValue] = useState('');
  const handleTagChange = (event: any, newValue: string[]) => {
    setTags(newValue);
  };
  return (
    <Box>
      <Autocomplete
        multiple
        freeSolo
        value={tags}
        onChange={handleTagChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={predefinedTags}
        renderTags={(tagValue: string[], getTagProps) =>
          tagValue.map((option: string, index: number) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="検索タグを選んでください"
            placeholder="タグを追加..."
          />
        )}
      />
    </Box>
  );
};

export default TagSelector;