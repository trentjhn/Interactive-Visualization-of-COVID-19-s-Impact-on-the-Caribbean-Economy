import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

// linechart page which contains chart depicting country tourist arrivals between 2016-2021
const Line = () => {
    return (
        <Box m="20px">
            <Header title="Number of international tourist arrivals from 2016-2021" subtitle="In millions" />
            <Box style={{height: "80vh"}}>
                <LineChart />
            </Box>
        </Box>
    );
};

export default Line;
