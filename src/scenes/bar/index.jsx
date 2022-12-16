import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
    return (
        <Box m="20px">
            <Header title="Tourist Arrivals by Country" subtitle="2016-2021" />
            <Box style={{height: "75vh"}}>
                <BarChart />
            </Box>
        </Box>
    );
};

export default Bar;
