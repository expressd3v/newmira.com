import React, {FC} from 'react';
import {Container} from "@mui/material";

const LayoutFooter: FC = () => {
    return (
        <footer style={{height: 300, background: "#1f1f1f", marginTop: 150}}>
            <Container maxWidth="xl">
                <h4 style={{color: "#f6e009"}}>Newmira Digital</h4>
            </Container>
        </footer>
    );
};


export default LayoutFooter;