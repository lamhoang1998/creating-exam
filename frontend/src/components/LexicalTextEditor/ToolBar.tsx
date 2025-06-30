import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Button } from "antd";
import { FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND } from "lexical";

function ToolBar() {
	const [editor] = useLexicalComposerContext();

	return (
		<div>
			<Button
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
			</Button>
		</div>
	);
}

export default ToolBar;
