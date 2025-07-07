import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";

function CkEditorComponent() {
	const cloud = useCKEditorCloud({
		version: "45.2.1",
		premium: false,
	});

	if (cloud.status === "error") {
		return <div>Error!</div>;
	}

	if (cloud.status === "loading") {
		return <div>Loading...</div>;
	}

	return <div>CkEditorComponent</div>;
}

export default CkEditorComponent;
