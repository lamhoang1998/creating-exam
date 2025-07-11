import { Table, type TableProps } from "antd";
import { useGetStudentQuery } from "../../common/queries/users/users.queries";
import type { UserInfo } from "../../types/users.types";
import { useNavigate } from "react-router-dom";

function User() {
	const { data: students } = useGetStudentQuery();
	const navigate = useNavigate();

	const columns: TableProps<UserInfo>["columns"] = [
		{
			title: "Full Name",
			dataIndex: "fullName",
			key: "fullName",
			render: (text) => <span>{text}</span>,
		},
		{ title: "Email", dataIndex: "email", key: "email" },
		{ title: "Phone Number", dataIndex: "phoneNumber", key: "phoneNumber" },
		{ title: "Manage User", key: "manageUser" },
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
