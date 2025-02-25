import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
interface ILoaderProps {}

const Loader: React.FC<ILoaderProps> = (props) => {
  const {} = props;
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
export default Loader;
