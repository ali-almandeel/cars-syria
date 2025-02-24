import { Box } from "@mui/material";
import React from "react";

type Dimensions = string | number;
interface ImageProps {
  src: string;
  objectFit?: "contain" | "cover";
  width: Dimensions;
  height: Dimensions;
}

const Image: React.FC<ImageProps> = (props) => {
  const { src, objectFit = "contain", height, width } = props;
  return (
    <Box width={width} height={height}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit,
        }}
        src={src}
      />
    </Box>
  );
};
export default Image;
