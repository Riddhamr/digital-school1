import React, { useState } from "react";
import video from "../../videos/video.mp4";
import {
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg,
    ArrowForward,
    ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual School Made Easy</HeroH1>

                <HeroP>
                    Sign up for a new account today and receive 7 day free trail
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
