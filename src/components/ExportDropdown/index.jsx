import { useState, useEffect } from "react";
import { useEditor } from "../../contexts/EditorProvider";
import "./ExportDropdown.css";

/* TODO: Refactor component */

export const ExportDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { markdownText, html } = useEditor();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.className !== "export-dropdown-toggle-btn") {
        setIsDropdownOpen(false);
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const exportOptions = [
    {
      label: "Markdown",
      filename: "document.md",
      mimeType: "text/markdown",
      content: markdownText,
    },
    {
      label: "HTML",
      filename: "document.html",
      mimeType: "text/html",
      content: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Exported Document</title>
</head>
<body>
${html}
</body>
</html>`,
    },
  ];

  const downloadFile = ({ filename, mimeType, content }) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const dropdownClass = `export-dropdown ${
    isDropdownOpen ? "export-dropdown-active" : ""
  }`;

  return (
    <div className="export-container">
      <button className="export-dropdown-toggle-btn" onClick={toggleDropdown}>
        Export
      </button>
      <ul className={dropdownClass}>
        {exportOptions.map((option) => (
          <li key={option.label} className="export-dropdown-item">
            <button className="export-btn" onClick={() => downloadFile(option)}>
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
