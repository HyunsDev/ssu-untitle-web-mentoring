import { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/button";
import { Center } from "../components/center";
import { Char } from "../components/char";
import { Github } from "../components/github";
import { H1 } from "../components/title";

const Textarea = styled.textarea`
    border: 0;
    border-radius: 26px;
    background-color: #ebebeb;
    width: 100%;
    height: 300px;
    padding: 20px;
    font-weight: bold;
    box-sizing: border-box;
    font-size: 16px;
    resize: vertical;

    &::placeholder {
        color: #b4b4b4;
    }
`;

export function MemoPage() {
    const [memo, setMemo] = useState(localStorage.getItem("data") || "");

    const onChange = (event) => {
        setMemo(event.target.value);
        localStorage.setItem("data", event.target.value);
    };

    const removeMemo = () => {
        setMemo("");
        localStorage.removeItem("data");
    };

    return (
        <Center>
            <H1>언타이틀 웹 메모장</H1>
            <Textarea
                placeholder="이곳에 메모하고 싶은 내용을 기록해보세요. 안에 적은 내용을 실시간으로 저장되고 확인할 수 있어요."
                value={memo}
                onChange={(e) => onChange(e)}
            ></Textarea>
            <Button onClick={removeMemo}>모두 지우기</Button>
            <Char />
            <Github />
        </Center>
    );
}
