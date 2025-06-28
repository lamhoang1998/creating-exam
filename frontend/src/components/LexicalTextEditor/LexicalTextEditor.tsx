import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { $generateHtmlFromNodes } from "@lexical/html";
import { ParagraphNode, TextNode } from "lexical";

type Props = {
	value?: string;
	onChange?: (value: string) => void;
};

const editorConfig = {
	namespace: "MyEditor",
	theme: {},
	nodes: [ParagraphNode, TextNode],
	onError(error: Error) {
		console.error("Lexical error:", error);
		throw error;
	},
};

export default function LexicalTextEditor({ onChange }: Props) {
	return (
		<LexicalComposer initialConfig={editorConfig}>
			<div
				style={{
					border: "1px solid #ccc",
					borderRadius: 4,
					padding: 8,
					minHeight: 150,
				}}
			>
				<RichTextPlugin
					contentEditable={
						<ContentEditable
							style={{
								minHeight: "100px",
								outline: "none",
								fontSize: 16,
							}}
						/>
					}
					placeholder={
						<div style={{ color: "#aaa" }}>Enter your question...</div>
					}
					ErrorBoundary={LexicalErrorBoundary}
				/>
				<HistoryPlugin />
				<OnChangePlugin
					onChange={(editorState, editor) => {
						editorState.read(() => {
							const html = $generateHtmlFromNodes(editor);
							onChange?.(html);
						});
					}}
				/>
			</div>
		</LexicalComposer>
	);
}
