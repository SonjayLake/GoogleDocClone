import { Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";

import { useState } from "react";

function DocumentTitle() {
  const [username, setUsername] = useState("Default Username");

  return (
    <div className="h-50 w-percent_95 h-forty_pixels flex px-10 py-3 my-2 items-center justify-between">
      <div className="flex gap-5 items-center">
        <ArticleIcon className="h-10 w-10" />
        <span>Document Title</span>
      </div>
      <Tooltip title={username}>
        <AccountCircleIcon className="h-10 w-10"></AccountCircleIcon>
      </Tooltip>
    </div>
  );
}

export default DocumentTitle;
