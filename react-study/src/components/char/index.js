import styled from "styled-components";
import CharImageFile from "./char.png";

const CharImg = styled.img`
    position: absolute;
    right: -0px;
    top: -150px;
    width: 100px;
`;

export function Char() {
    return <CharImg src={CharImageFile} />;
}
