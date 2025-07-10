"use client";

import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import { Box } from "@mui/material";

const ClientLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <Box>
            <Navbar />
            <Box component="main" style={{ minHeight: 'calc(100vh - 120px)' }}>{children}</Box>
            <Footer />
        </Box>
    );
}

export default ClientLayout;