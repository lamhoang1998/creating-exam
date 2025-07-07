import {
	DecoratorNode,
	type DOMConversionMap,
	type DOMConversionOutput,
	type DOMExportOutput,
	type EditorConfig,
	type NodeKey,
} from "lexical";
import type { JSX } from "react";

export const $createImageNode = ({
	altText,
	height,
	maxWidth = 400,
	src,
	width,
}: {
	altText: string;
	height?: number;
	maxWidth?: number;
	src: string;
	width?: number;
}) => {
	return new ImageNode({ altText, height, maxWidth, src, width });
};

const convertImageElement = (domNode: Node): DOMConversionOutput | null => {
	if (domNode instanceof HTMLImageElement) {
		const { src, alt } = domNode;
		const node = $createImageNode({ src, altText: alt });
		return { node };
	}
	return null;
};

export class ImageNode extends DecoratorNode<JSX.Element> {
	__src: string;
	__altText: string;
	__height: "inherit" | number;
	__width: "inherit" | number;
	__maxWidth: number;

	constructor({
		src,
		altText,
		maxWidth,
		width,
		height,
		key,
	}: {
		src: string;
		altText: string;
		maxWidth: number;
		width?: "inherit" | number;
		height?: "inherit" | number;
		key?: NodeKey;
	}) {
		super(key);
		this.__altText = altText;
		this.__width = width || "inherit";
		this.__height = height || "inherit";
		this.__maxWidth = maxWidth;
		this.__src = src;
	}

	static getType(): string {
		return "image";
	}

	static clone(_node: ImageNode): ImageNode {
		return new ImageNode({
			altText: _node.__altText,
			src: _node.__src,
			height: _node.__height,
			width: _node.__width,
			maxWidth: _node.__maxWidth,
		});
	}

	decorate(): JSX.Element {
		return (
			<img
				src={this.__src}
				alt={this.__altText}
				style={{
					width: this.__width,
					height: this.__height,
					maxWidth: this.__maxWidth,
				}}
			/>
		);
	}

	exportDOM(): DOMExportOutput {
		const image = document.createElement("img");
		image.setAttribute("src", this.__src);
		image.setAttribute("alt", this.__altText);

		return { element: image };
	}

	static importDOM(): DOMConversionMap | null {
		return {
			img: (node: Node) => {
				return { conversion: convertImageElement, priority: 0 };
			},
		};
	}

	createDOM(config: EditorConfig): HTMLElement {
		const span = document.createElement("span");
		const theme = config.theme;
		const className = `${theme.image} `;
		if (className !== undefined) {
			span.className = className;
		}
		return span;
	}

	updateDOM(prevNode: ImageNode, dom: HTMLElement): boolean {
		// Check if any properties that affect the DOM have changed
		if (
			prevNode.__src !== this.__src ||
			prevNode.__altText !== this.__altText ||
			prevNode.__width !== this.__width ||
			prevNode.__height !== this.__height ||
			prevNode.__maxWidth !== this.__maxWidth
		) {
			// Return true to recreate the DOM element
			return true;
		}
		// Return false if no DOM changes are needed
		return false;
	}
}
