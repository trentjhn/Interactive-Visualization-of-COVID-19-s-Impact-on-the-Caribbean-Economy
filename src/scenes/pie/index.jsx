import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
return (
    <Box m="20px">
        <Header title="Carribean Tourist Arrivals" subtitle="2016-2021" />
        <Box height="75vh">
            <PieChart />
        </Box>
    </Box>
);
};

export default Pie;