import { Button, Form, Modal, Upload, type UploadFile } from "antd";
import { useEffect, useState } from "react";
import { setExamForm } from "../../../reducers/examForm.reducers";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import styles from "./UploadImg.module.css";

function UploadImg({ index }: { index: number }) {
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const [previewImage, setPreviewImage] = useState("");
	const [previewOpen, setPreviewOpen] = useState(false);

	const dispatch = useAppDispatch();

	const form = Form.useFormInstance();

	const examFormState = useAppSelector(
		(store) => store.examFormState.questions
	);

	console.log("exam form state", examFormState);

	const existingFileList = Form.useWatch(
		["questions", index, "problemImage"],
		form
	);

	useEffect(() => {
		if (existingFileList) {
			setFileList(existingFileList);
		}
	}, [existingFileList]);

	// useEffect(() => {
	// 	if (existingFileList && existingFileList.length > 0) {
	// 		const formatted = existingFileList.map((img, i) => ({
	// 			uid: String(i),
	// 			name: img.name,
	// 			url: img.url,
	// 			status: "done", // mark as uploaded
	// 		}));
	// 		setFileList(formatted as UploadFile[]);
	// 	}
	// }, [existingFileList]);

	const getBase64 = (file: File): Promise<string> =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = (error) => reject(error);
		});

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as File);
		}
		setPreviewImage(file.url || (file.preview as string));
		setPreviewOpen(true);
	};

	const handleChange = ({ fileList }: { fileList: UploadFile[] }) => {
		console.log("file list", fileList);
		setFileList(fileList);
		// form.setFieldValue(["questions", index, "problemImage"], fileList);
		// const formValues = form.getFieldsValue();
		// dispatch(setExamForm(formValues));
		const minimalList = fileList.map((file) => ({
			name: file.name,
			url: file.url || URL.createObjectURL(file.originFileObj as File),
		}));

		form.setFieldValue(["questions", index, "problemImage"], minimalList);

		const formValues = form.getFieldsValue();
		dispatch(setExamForm(formValues));
	};

	return (
		<>
			<Form.Item
				label="Problem Image"
				name={["questions", index, "problemImage"]}
				valuePropName="fileList"
				getValueFromEvent={(e) => {
					return e?.fileList || [];
				}}
			>
				<Upload
					listType="picture-card"
					fileList={fileList}
					onPreview={handlePreview}
					onChange={handleChange}
					beforeUpload={() => false}
					className={styles.customUploadSize}
				>
					<Button type="primary">upload</Button>
				</Upload>
				<Modal
					open={previewOpen}
					title="Image Preview"
					footer={null}
					onCancel={() => setPreviewOpen(false)}
				>
					<img alt="preview" style={{ width: "100%" }} src={previewImage} />
				</Modal>
			</Form.Item>
		</>
	);
}

export default UploadImg;
