import { useEditor } from "../../contexts/EditorProvider";
import { usePreview } from "../../contexts/PreviewProvider";
import "./EditorWindow.css";

export const EditorWindow = () => {
  const { markdownText, setMarkdownText, html } = useEditor();
  const { isPreviewToggled, isMobile } = usePreview();

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  const editorPaneClass =
    isMobile && isPreviewToggled ? "pane pane-hidden" : "pane";
  const previewPaneClass =
    isMobile && !isPreviewToggled ? "pane pane-hidden" : "pane";

  return (
    <section className="editor-window">
      <div className={editorPaneClass}>
        <textarea
          className="editor"
          value={markdownText}
          placeholder="Write markdown..."
          onChange={handleChange}
        />
      </div>
      <div className={previewPaneClass}>
        <div
          className="markdown-body preview-output "
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </section>
  );
};
