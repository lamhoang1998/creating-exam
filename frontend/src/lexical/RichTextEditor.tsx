import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { HeadingNode } from "@lexical/rich-text";
import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";

import { css } from "@emotion/css";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { theme } from "./themes/themes";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import CustomOnChangePlugin from "./plugins/CustomOnChangePlugin";
import { ImageNode } from "./nodes/ImageNode";

interface RichTextEditorProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	name: string;
}

type Props = {
	value?: string;
	onChange: (value: string) => void;
};

const initialConfig = {
	namespace: "RichTextEditor-1",
	theme,
	onError: () => {},
	nodes: [HeadingNode, CodeHighlightNode, CodeNode, ImageNode],
};

function RichTextEditor({ value, onChange }: Props) {
	return (
		<LexicalComposer initialConfig={initialConfig}>
			<ToolbarPlugin />
			<RichTextPlugin
				contentEditable={
					<ContentEditable
						className={css({
							height: 200,
							fontSize: 12,
							padding: 8,
							overflow: "auto",
							outline: "none",
							border: "1px solid black",
							borderRadius: "4px",
						})}
					/>
				}
				placeholder={
					<p
						className={css({
							position: "absolute",
							color: "#999",
							top: 70,
							left: 10,
							fontSize: 18,
						})}
					>
						some text...
					</p>
				}
				ErrorBoundary={LexicalErrorBoundary}
			/>
			<AutoFocusPlugin />
			<HistoryPlugin />
			{/* <OnChangePlugin
				value={value}
				onChange={(editorState, editor) => {
					editorState.read(() => {
						const html = $generateHtmlFromNodes(editor);
						onChange?.(html);
					});
				}}
			/> */}
			<CustomOnChangePlugin value={value} onChange={onChange} />
			<ClearEditorPlugin />
		</LexicalComposer>
	);
}

export default RichTextEditor;
