import SearchIcon from "@mui/icons-material/Search";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import { Tooltip } from "@mui/material";

function Toolbar() {
  return (
    <div className="flex justify-between items-center bg-toolbar-grey h-12 w-percent_90 px-10 rounded-full my-2 ">
      <div className="flex gap-4">
        <Tooltip title="Search">
          <SearchIcon className="h-12 w-6 hover:scale-110 hover:text-red-500" />
        </Tooltip>
        <Tooltip title="Undo">
          <UndoIcon className="h-12 w-6 hover:scale-110 hover:text-red-500" />
        </Tooltip>
        <Tooltip title="Redo">
          <RedoIcon className="h-12 w-6 hover:scale-110 hover:text-red-500" />
        </Tooltip>
      </div>
    </div>
  );
}

export default Toolbar;
