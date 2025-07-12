import {
	Button,
	Flex,
	Input,
	Modal,
	Space,
	Table,
	Tooltip,
	type TableProps,
} from "antd";
import { useGetStudentQuery } from "../../common/queries/users/users.queries";
import type { UserInfo } from "../../types/users.types";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined, FileAddOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useGiveExamMutation } from "../../common/mutations/exam/exam.mutations";
import { toast } from "react-toastify";
import { resError } from "../../helpers/function.helper";

function User() {
	const { data: students } = useGetStudentQuery();
	const navigate = useNavigate();

	const [open, setOpen] = useState<boolean>(false);
	const [examName, setExamName] = useState<string | undefined>("");
	const [selectedUser, setSelectedUser] = useState<UserInfo | null>(null);

	const { mutate, isPending } = useGiveExamMutation();

	const columns: TableProps<UserInfo>["columns"] = [
		{
			title: "Full Name",
			dataIndex: "fullName",
			key: "fullName",
			render: (text) => <span>{text}</span>,
		},
		{ title: "Email", dataIndex: "email", key: "email" },
		{ title: "Phone Number", dataIndex: "phoneNumber", key: "phoneNumber" },
		{
			title: "Manage User",
			key: "manageUser",
			render: (record) => (
				<Flex gap={5}>
					<Space>
						<Tooltip title="đuổi học">
							<Button color="orange">
								<DeleteOutlined />
							</Button>
						</Tooltip>
					</Space>
					<Space>
						<Tooltip title="giao đề">
							<Button
								onClick={(event) => {
									event.stopPropagation();
									setOpen(!open);
									setSelectedUser(record);
								}}
							>
								<FileAddOutlined />
							</Button>
						</Tooltip>
						<Modal
							open={open}
							title="nhập tên đề cho học sinh làm "
							footer={null}
							onCancel={(e) => {
								e.stopPropagation();
								setOpen(!open);
							}}
						>
							<Input
								placeholder="vui lòng nhập tên đề"
								value={examName}
								onChange={(e) => {
									setExamName(e.target.value);
								}}
								onClick={(e) => {
									e.stopPropagation();
								}}
							/>
							<Flex justify="flex-end">
								<Button
									type="primary"
									style={{ marginTop: 16 }}
									onClick={(e) => {
										e.stopPropagation();
										const userId = selectedUser?.userId as number;
										const exam = examName?.trim() as string;
										console.log(`exam`, exam);
										mutate(
											{ userId, exam },
											{
												onSuccess: () => {
													toast.success("giao đề kiểm tra thành công");
												},
												onError: (err) => {
													toast.error(
														resError(err.message, "something happened")
													);
												},
											}
										);
										setOpen(!open);
									}}
									loading={isPending}
								>
									submit
								</Button>
							</Flex>
						</Modal>
					</Space>
				</Flex>
			),
		},
	];

	return (
		<div>
			<Table<UserInfo>
				dataSource={students?.data.metaData}
				columns={columns}
				bordered={true}
				onRow={(record, _) => {
					return {
						onClick: () => {
							navigate(`/details/${record.userId}`);
						},
					};
				}}
			/>
		</div>
	);
}

export default User;
