import { Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";

import { useState } from "react";

function DocumentTitle(props) {
  const username = props.username ? props.username : "Default Username";
  const [title, setTitle] = useState(
    props.title ? props.title : "Document Title"
  );

  return (
    <div className="h-50 w-percent_80 h-forty_pixels flex px-10 py-3 my-2 items-center justify-between">
      <div className="flex gap-5 items-center">
        <ArticleIcon className="h-10 w-10" />
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <Tooltip title={username}>
        <AccountCircleIcon className="h-10 w-10"></AccountCircleIcon>
      </Tooltip>
    </div>
  );
}

export default DocumentTitle;
