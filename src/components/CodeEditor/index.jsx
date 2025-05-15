// src/components/CodeEditor/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Editor from '@monaco-editor/react';
import styles from './CodeEditor.module.css';

const CodeEditor = ({ code, onChange }) => (
  <div className={styles.editorContainer}>
    <Editor
  height="100%"
  width="100%"
  defaultLanguage="css"
  value={code}
  onChange={onChange}
  options={{
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    lineNumbers: 'off',
    fontSize: 14,
    padding: {
      top: 10,
      bottom: 10,
    }
  }}
/>

  </div>
);

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CodeEditor;