import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
//import { mockTransactions } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";

// * If nivo does not work then reinstall with --legacy-peer-deps

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m='20px'>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="International tourist arrivals in the Caribbean 2016-2021"/>
            </Box>

            {/* GRID & CHARTS */}
            <Box
            display="grid" // specifies we want to define box as a grid
            gridTemplateColumns="repeat(12, 1fr)" // "repeat(12, fr)" specifies that we want the total width of our display divided by the number of columns we want (12) 
            gridAutoRows="140px" // sets size for rows in a grid 
            gap="20px" // gap in btwn dashboard boxes
            >
                {/* ROW 1 */}
                {/* Each row spans 12 wide so each box has a gridColumn of span 3. gridRow defaults to span 1 */}
                {/* <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center">
                    <StatBox 
                    title= "Carribean Islands" 
                    subtitle="Emails Sent" 
                    icon={
                        <EmailIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: "26px"}}
                        />
                    }
                    />
                </Box>

                <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center">
                    <StatBox 
                    title= "Box2" 
                    subtitle="Sales Obtained" 
                    icon={
                        <PointOfSaleIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: "26px"}}
                        />
                    }
                    />
                </Box>

                <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center">
                    <StatBox 
                    title= "Box3" 
                    subtitle="New Clients" 
                    icon={
                        <PersonAddIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: "26px"}}
                        />
                    }
                    />
                </Box>
                <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center">
                    <StatBox 
                    title= "Box4" 
                    subtitle="Traffic" 
                    icon={
                        <TrafficIcon 
                            sx={{ color: colors.greenAccent[600], fontSize: "26px"}}
                        />
                    }
                    />
                </Box> */}

                {/* ROW 2 */}
                <Box
                    gridColumn="span 12"
                    gridRow="span 3"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            {/* <Typography 
                                variant="h5" 
                                fontWeight="600" 
                                color={colors.grey[100]}
                            >
                                Number of International Arrivals 2016-2021 (in Millions)
                            </Typography> */}
                            {/* <Typography 
                                variant="h3" 
                                fontWeight="bold" 
                                color={colors.greenAccent[500]}
                            >
                                $59,342,32
                            </Typography> */}
                        </Box>
                        <Box>
                        </Box>
                    </Box>
                        <Box height="460px" mt="-40px" mr="10px">
                            <LineChart isDashboard={true} />
                        </Box>
                    </Box>

                    {/* GEOGRAPHY CHART */}
                    {/* <Box
                        gridColumn="span 4"
                        gridRow="span 3"
                        backgroundColor={colors.primary[400]}
                        p="30px"
                    >
                        <Typography 
                            variant="h5" 
                            fontWeight="600" 
                            sx={{ mb: "15px"}}
                        >
                            Geography
                        </Typography>
                        <Box 
                            height="370px"
                        >
                            <GeographyChart isDashboard={true} />
                        </Box>
                    </Box> */}
                    {/* ROW 3 */}

                    {/* PIE CHART */}
                    <Box
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        p="30px"
                    >
                        {/* <Typography 
                            variant="h5" 
                            fontWeight="600"
                        >
                            Pie Chart
                        </Typography> */}
                        <Box 
                            display="flex"
                            flexDirection="column"
                            height="260px"
                        >
                            <PieChart isDashboard={true} />
                        </Box>
                    </Box>
                    
                    {/* BAR CHART */}
                    <Box
                        gridColumn="span 8"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                    >
                        {/* <Typography 
                            variant="h5" 
                            fontWeight="600" 
                            sx={{ p: "30px 30px 0 30px"}}
                        >
                            Sales Quantity
                        </Typography> */}
                        <Box 
                            height="315px"
                            mt="-10px"
                        >
                            <BarChart isDashboard={true} />
                        </Box>
                    </Box>



                    {/* 
                    
                    Transactions *
                    <Box 
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        overflow="auto"
                    >
                        <Box 
                            display="flex" 
                            justifyContent="space-between" 
                            alignItems="center" 
                            borderBottom={`4px solid ${colors.primary[500]}`} 
                            colors={colors.grey[100]} 
                            p="15px"
                        >
                            <Typography 
                                color={colors.grey[100]} 
                                variant="h5" 
                                fontWeight="600"
                            >
                                Recent Transactions
                            </Typography>
                        </Box>

                        Mapping transaction data to list 
                        {mockTransactions.map((transaction, i) => (
                            <Box
                                key={`${transaction.txId}-${i}`}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                borderBottom={`4px solid ${colors.primary[500]}`} 
                                p="15px"
                            >
                                <Box>
                                <Typography 
                                    color={colors.greenAccent[500]} 
                                    variant="h5" 
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography 
                                    color={colors.grey[100]} 
                                    variant="h5" 
                                    fontWeight="600"
                                >
                                    {transaction.user}
                                </Typography>
                                </Box>
                                <Box 
                                    color={colors.grey[100]}
                                >
                                    {transaction.date}
                                </Box>
                                <Box
                                    backgroundColor={colors.greenAccent[500]} 
                                    p = "5px 10px"
                                    borderRadius="4px"
                                >
                                    {transaction.cost}
                                </Box>
                            </Box>
                        ))}
                    </Box> 
                    */}
            </Box>
        </Box>
    )
}

export default Dashboard;