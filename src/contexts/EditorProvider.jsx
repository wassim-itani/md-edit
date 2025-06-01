import { createContext, useContext, useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import initialMarkdown from "../data/initialMarkdown.md?raw";

const EditorContext = createContext();

export const useEditor = () => {
  return useContext(EditorContext);
};

export const EditorProvider = ({ children }) => {
  const [markdownText, setMarkdownText] = useState(initialMarkdown);
  const [html, setHTML] = useState("");

  useEffect(() => {
    // Debounce markdown to html process
    const handler = setTimeout(() => {
      const dirtyHTML = marked.parse(markdownText);
      const cleanHTML = DOMPurify.sanitize(dirtyHTML);
      setHTML(cleanHTML);
    }, 200);
    return () => clearTimeout(handler);
  }, [markdownText]);

  return (
    <EditorContext.Provider value={{ markdownText, setMarkdownText, html }}>
      {children}
    </EditorContext.Provider>
  );
};
