import styled from "styled-components";

export const Divider = styled.div`
    width: 80%;
    margin: 10px 0px;
    border-top: 3px solid #bbb;
`;

export const Button = styled.button`
    transition: all 0.2s ease;
    flex-grow: 1;
    padding: 5px 0;

    &:hover {
        flex-grow: 2;
    }
`;

export const ButtonsContainer = styled.div`
    width: 90%;
    display: flex;
`;

export const Input = styled.input`
    width: ${props => props.type === "number" && "40px" };
`;

export const Label = styled.label``;

export const Header = styled.div``;

export const CommentatorPanel = styled.div``;

export const GameplayPanel = styled.div``;

export const PanelContainer = styled.div`
    background-color: #F6F6F6;
    width: 800px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;   
    align-items: center;
    gap: 20px 0px;
`;

export const AdminContainer = styled.div`
    background-color: #1E1E1E;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1200px;
    min-height: 100vh;
`;