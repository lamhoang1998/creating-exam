import {
	Button,
	Flex,
	Input,
	Modal,
	Space,
	Table,
	type TableProps,
} from "antd";
import { useGetStudentQuery } from "../../common/queries/users/users.queries";
import type { UserInfo } from "../../types/users.types";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined, FileAddOutlined } from "@ant-design/icons";
import { useState } from "react";

function User() {
	const { data: students } = useGetStudentQuery();
	const navigate = useNavigate();

	const [open, setOpen] = useState<boolean>(false);

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
						<Button color="orange">
							<DeleteOutlined />
							"đuổi học"
						</Button>
					</Space>
					<Space>
						<Button
							onClick={(event) => {
								event.stopPropagation();
								setOpen(!open);
							}}
						>
							<FileAddOutlined />
							"giao đề"
						</Button>
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
								onClick={(e) => {
									e.stopPropagation();
								}}
							/>
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
