import React from "react";
import { Button } from "../ButtonElements";
import {
    BtnWrap,
    Column1,
    Column2,
    Heading,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    SubTitle,
    TextWrapper,
    TopLine,
    ImgWrap,
    Img,
} from "./InfoElements";

const InfoSection = ({
    id,
    lightBg,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
}) => {
    return (
        <div>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>
                                    {headLine}
                                </Heading>
                                <SubTitle darkText={darkText}>
                                    {description}
                                </SubTitle>
                                <BtnWrap>
                                    <Button
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        exact="true"
                                        spy={true}
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    );
};

export default InfoSection;
