import {
	INSERT_ORDERED_LIST_COMMAND,
	INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Button } from "antd";
import { ListOl, ListUl } from "react-bootstrap-icons";

function ListPlugin() {
	const [editor] = useLexicalComposerContext();
	return (
		<>
			<Button
				icon={<ListOl />}
				aria-label="Add Order List"
				size="small"
				style={{ color: `#333` }}
				onClick={() =>
					editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
				}
			/>
			<Button
				icon={<ListUl />}
				aria-label="Add UnOrder List"
				size="small"
				style={{ color: `#333` }}
				onClick={() =>
					editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
				}
			/>
		</>
	);
}

export default ListPlugin;
