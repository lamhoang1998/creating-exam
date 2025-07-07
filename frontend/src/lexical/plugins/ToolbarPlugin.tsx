import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Button } from "antd";
import {
	CLEAR_EDITOR_COMMAND,
	FORMAT_ELEMENT_COMMAND,
	FORMAT_TEXT_COMMAND,
	REDO_COMMAND,
	UNDO_COMMAND,
} from "lexical";
import { RICH_TEXT_OPTIONS, RichTextAction } from "../constants/action";
import ImagePlugin from "./ImagePlugin";

function ToolbarPlugin() {
	const [editor] = useLexicalComposerContext();

	function onAction(id: RichTextAction) {
		switch (id) {
			case RichTextAction.Bold: {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
				break;
			}
			case RichTextAction.Italics: {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
				break;
			}
			case RichTextAction.Underline: {
				console.log("underline");
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
				break;
			}
			case RichTextAction.Strikethrough: {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
				break;
			}
			case RichTextAction.Superscript: {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript");
				break;
			}
			case RichTextAction.Subscript: {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript");
				break;
			}
			case RichTextAction.Highlight: {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, "highlight");
				break;
			}
			case RichTextAction.Code: {
				editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
				break;
			}
			case RichTextAction.LeftAlign: {
				editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
				break;
			}
			case RichTextAction.RightAlign: {
				editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
				break;
			}
			case RichTextAction.CenterAlign: {
				editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
				break;
			}
			case RichTextAction.JustifyAlign: {
				editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
				break;
			}
			case RichTextAction.Undo: {
				editor.dispatchCommand(UNDO_COMMAND, undefined);
				break;
			}
			case RichTextAction.Redo: {
				editor.dispatchCommand(REDO_COMMAND, undefined);
				break;
			}
			case RichTextAction.Clear: {
				editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
			}
		}
	}

	return (
		<div>
			{/* <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
      >
        B
      </Button>
      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
      >
        i
      </Button> */}

			{RICH_TEXT_OPTIONS.map(({ id, label, icon, fontSize }) => (
				<Button
					key={id}
					aria-label={label as string}
					icon={icon}
					onClick={() => onAction(id)}
					style={{ fontSize: `${fontSize}` }}
				/>
			))}
			<ImagePlugin />
		</div>
	);
}

export default ToolbarPlugin;
