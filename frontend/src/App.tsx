import { RouterProvider } from "react-router-dom";

import rootRouter from "./routers/rootRouter";
import { useAppSelector } from "./hooks";
import AddExam from "./components/AddExam/AddExam";

function App() {
	const showAddExam = useAppSelector(
		(store) => store.globalModalState.showAddExam
	);

	console.log("showExam", showAddExam);
	return (
		<>
			{showAddExam && <AddExam />}
			<RouterProvider router={rootRouter} />
		</>
	);
}

export default App;
