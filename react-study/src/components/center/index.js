import styled from "styled-components";

const CenterOut = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 8px;
`;

const CenterBox = styled.div`
    position: relative;
    background-color: #ffffff;
    padding: 16px;
    border-radius: 26px;
    max-width: 800px;
    width: 100%;
`;

export function Center(props) {
    return (
        <CenterOut>
            <CenterBox>{props.children}</CenterBox>
        </CenterOut>
    );
}
