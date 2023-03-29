import styled from "styled-components";
import githubLogo from "./github.png";

const GithubImg = styled.img`
    position: fixed;
    left: 16px;
    top: 16px;
    width: 32px;
`;

export function Github() {
    return (
        <a
            href="https://github.com/HyunsDev/ssu-untitle-web-mentoring"
            target="_blank"
            rel="noreferrer"
        >
            <GithubImg src={githubLogo} />
        </a>
    );
}
