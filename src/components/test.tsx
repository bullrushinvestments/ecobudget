import React, { useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface WriteTestProps {
  content?: string;
  onSubmit: (content: ContentState) => void;
}

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));

const WriteTests: React.FC<WriteTestProps> = ({ content, onSubmit }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(htmlToDraft(content ?? '').contentBlocks)
    )
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEditorChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      onSubmit(convertToRaw(editorState.getCurrentContent()));
    } catch (err) {
      setError('Failed to submit content.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledBox>
      <Typography variant="h6" gutterBottom>
        Write Test
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Editor editorState={editorState} onEditorStateChange={handleEditorChange} />
      <Button type="submit" onClick={handleSubmit} disabled={loading}>
        Submit
      </Button>
    </StyledBox>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface WriteTestProps {
  content?: string;
  onSubmit: (content: ContentState) => void;
}

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));

const WriteTests: React.FC<WriteTestProps> = ({ content, onSubmit }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(htmlToDraft(content ?? '').contentBlocks)
    )
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEditorChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      onSubmit(convertToRaw(editorState.getCurrentContent()));
    } catch (err) {
      setError('Failed to submit content.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledBox>
      <Typography variant="h6" gutterBottom>
        Write Test
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Editor editorState={editorState} onEditorStateChange={handleEditorChange} />
      <Button type="submit" onClick={handleSubmit} disabled={loading}>
        Submit
      </Button>
    </StyledBox>
  );
};

export default WriteTests;