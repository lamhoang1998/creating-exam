import { useParams } from "react-router-dom";

function UserDetails() {
	const { id } = useParams();

	const userId = Number(id as string);

	return <div>UserDetails</div>;
}

export default UserDetails;
