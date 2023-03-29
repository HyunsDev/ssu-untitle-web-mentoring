import styled from "styled-components";

export const Button = styled.button`
    border: 0;
    position: absolute;
    right: 30px;
    bottom: 30px;
    background-color: #1d2d4f;
    border-radius: 26px;
    padding: 12px 16px;
    color: #ffffff;
    font-size: 16px;
    transition: 200ms;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgb(45, 64, 104);
    }

    @media (max-width: 767px) {
        border: 0;
        position: fixed;
        right: 16px;
        bottom: 16px;
        background-color: #ebebeb;
        color: #1d2d4f;

        &:hover {
            background-color: #dfdfdf;
        }
    }
`;
