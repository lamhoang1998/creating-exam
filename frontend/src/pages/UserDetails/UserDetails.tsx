import { useParams } from "react-router-dom";
import { useGetStudentDetailsQuery } from "../../common/queries/users/users.queries";

function UserDetails() {
	const { id } = useParams();

	const userId = Number(id as string);

	const studentDetails = useGetStudentDetailsQuery(userId);

	console.log("studentDetails", studentDetails);

	return <div>UserDetails</div>;
}

export default UserDetails;
