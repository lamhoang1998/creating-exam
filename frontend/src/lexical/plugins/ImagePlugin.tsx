import React, { useRef, useState } from "react";
import { ImageFill } from "react-bootstrap-icons";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createImageNode } from "../nodes/ImageNode";
import {
	$createParagraphNode,
	$getRoot,
	$getSelection,
	$insertNodes,
	$isRangeSelection,
} from "lexical";
import { Button, Input, Modal } from "antd";
import { useUploadFileMutation } from "../../common/mutations/file/file.mutations";
import { toast } from "react-toastify";
import {
	BASE_DOMAIN_API,
	FOLDER_IMAGE_BE,
} from "../../common/constant/app.constant";

export default function ImagePlugin() {
	const [isOpen, setIsOpen] = useState(false);
	const [url, setURL] = useState("");
	const [file, setFile] = useState<FileList>();
	const inputRef = useRef<HTMLInputElement>(null);

	const [editor] = useLexicalComposerContext();

	const uploadImage = useUploadFileMutation();

	const onAddImage = () => {
		let src = "";
		if (url) src = url;

		if (file) src = URL.createObjectURL(file[0]);

		const formData = new FormData();

		if (file) formData.append("img", file[0]);

		uploadImage.mutate(formData, {
			onSuccess: (res) => {
				const uploadedFilename = res.data;

				console.log("uploadedFilename", uploadedFilename);

				toast.success(`Upload avatar to local successfully`);
				src = `${BASE_DOMAIN_API}${FOLDER_IMAGE_BE}${uploadedFilename.metaData}`;

				editor.update(() => {
					const node = $createImageNode({ src, altText: "Dummy text" });
					$insertNodes([node]);
				});

				toast.success(`Upload avatar to local successfully`);

				setFile(undefined);
				setURL("");
				setIsOpen(false);
			},
		});

		// editor.update(() => {
		// 	const node = $createImageNode({ src, altText: "Dummy text" });
		// 	$insertNodes([node]);
		// });
		// setFile(undefined);
		// setURL("");
		// setIsOpen(false);
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				const src = reader.result as string;

				editor.update(() => {
					const imageNode = $createImageNode({
						src,
						altText: file.name || "Image",
					});
					$insertNodes([imageNode]);
				});
			};
			reader.readAsDataURL(file);
		}
		// Reset input so selecting the same file again works
		e.target.value = "";
	};

	return (
		<div>
			<Button
				icon={<ImageFill />}
				aria-label="Add Image"
				size="small"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<input
				type="file"
				ref={inputRef}
				accept="image/*"
				style={{ display: "none" }}
				onChange={(e) => {
					const file = e.target.files;
					if (file) {
						setFile(file);
					}
					e.target.files = null;
				}}
			/>
			<Modal
				title="Add Image"
				open={isOpen}
				onCancel={() => setIsOpen(!isOpen)}
				footer={<Button onClick={onAddImage}>Add Image</Button>}
			>
				<Input
					value={url}
					onChange={(e) => setURL(e.target.value)}
					placeholder="Add Image URL"
				/>
				<Button onClick={() => inputRef?.current?.click()}>
					{file ? file[0].name : "upload Img"}
				</Button>
			</Modal>
		</div>
	);
}
