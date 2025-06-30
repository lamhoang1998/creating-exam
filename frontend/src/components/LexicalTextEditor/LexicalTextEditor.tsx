import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { $generateHtmlFromNodes } from "@lexical/html";
import {
	$createParagraphNode,
	$createTextNode,
	type EditorState,
	ParagraphNode,
	TextNode,
} from "lexical";

import { $generateNodesFromDOM } from "@lexical/html";
import { $getRoot, $insertNodes } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect, useRef } from "react";
import { ListNode, ListItemNode } from "@lexical/list";
import { HeadingNode } from "@lexical/rich-text";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { lexicalTheme } from "../../utils/util.utils";
import ToolBar from "./ToolBar";

type Props = {
	value?: string;
	onChange?: (value: string) => void;
};

const initialState = () => {
	const paragraph = $createParagraphNode();
	const text = $createTextNode();
	paragraph.append(text);
	const root = $getRoot().append(paragraph);
	root.selectEnd();
};

const editorConfig = {
	namespace: "Editor",
	theme: lexicalTheme,
	onError: (error: Error) => {
		throw error;
	},
	nodes: [ListNode, ListItemNode, HeadingNode, ParagraphNode, TextNode],
	EditorState: initialState,
};

export default function LexicalTextEditor({ value, onChange }: Props) {
	return (
		<LexicalComposer initialConfig={editorConfig}>
			<ListPlugin />
			<SetInitialHtmlPlugin html={value} />
			<ToolBar />
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

function SetInitialHtmlPlugin({ html }: { html?: string }) {
	const [editor] = useLexicalComposerContext();
	const hasInitialized = useRef(false);

	useEffect(() => {
		if (hasInitialized.current || !html) return;

		editor.update(() => {
			// $getRoot()
			// 	.getChildren()
			// 	.forEach((n) => n.remove());
			const root = $getRoot();
			root.clear();
			const isEditorEmpty = root.getChildrenSize() === 0;
			if (!isEditorEmpty) return;
			const parser = new DOMParser();
			const dom = parser.parseFromString(html, "text/html");
			const nodes = $generateNodesFromDOM(editor, dom);
			root.selectStart();
			$insertNodes(nodes);
			hasInitialized.current = true;

			const paragraphNode = $createParagraphNode();
			nodes.forEach((n) => paragraphNode.append(n));
			$getRoot().append(paragraphNode);
		});
	}, [editor, html]);

	return null;
}
