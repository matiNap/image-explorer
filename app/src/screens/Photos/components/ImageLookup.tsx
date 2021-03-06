import React, { useState } from "react";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { useTheme } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";

interface Props {
  src: string;
  color: string;
  width: number;
  height: number;
}
export default ({ src, color, width, height }: Props) => {
  const { palette } = useTheme();
  const [maximized, setMaximized] = useState(false);

  return (
    <div className="photos-image-container">
      <img
        style={{ minHeight: "80vh" }}
        alt="Lookup"
        src={src}
        className={`photos-image ? ${maximized ? "photos-image-max" : ""}`}
      />

      <div className="photos-image-highlight-container">
        <div>
          <IconButton
            className="photos-image-resize"
            onClick={() => setMaximized(!maximized)}
          >
            {maximized ? (
              <FiMinimize2 size={35} color={palette.text.secondary} />
            ) : (
              <FiMaximize2 size={35} color={palette.text.secondary} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
