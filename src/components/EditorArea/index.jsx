// src/components/EditorArea/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import CodeEditor from '../CodeEditor';
import styles from './EditorArea.module.css';

const EditorArea = ({ code, onChange }) => (
  <section className={styles.editorArea}>
    <h3 className={styles.title}>Code Editor</h3>
    <CodeEditor code={code} onChange={onChange} />
  </section>
);

EditorArea.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EditorArea;