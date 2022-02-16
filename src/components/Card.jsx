import React from "react";
import { GlassCard } from "../styles/CardStyles";
import CardHeader from "./CardHeader";
import CardMain from "./CardMain";

const Card = () => {
    
    return(
        <GlassCard>
            <CardHeader/>
            <CardMain/>
        </GlassCard>    
    );
}

export default Card;