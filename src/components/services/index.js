import React from "react";
import Icon1 from "../../images/svg2.svg";
import Icon2 from "../../images/svg1.svg";
import Icon3 from "../../images/svg3.svg";

import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>
                        We help reduce your fees and increase your overall
                        revenue.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>
                        You can access our platform online anywhere in the world
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP> Unlock our special membership</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
