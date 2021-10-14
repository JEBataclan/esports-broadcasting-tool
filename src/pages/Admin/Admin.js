import React, { useState } from "react";
import * as constants from "../../constants";
import { AdminContainer, PanelContainer, GameplayPanel, CommentatorPanel, Header, Label, Input, ButtonsContainer, Button, Divider } from "./Admin.elements";

const Admin = ({ socket }) => {
    const [teamInfos, setTeamInfos] = useState(constants.initialTeamInfos);
    const [commentatorInfos, setCommentatorInfos] = useState(constants.initialCommentatorInfos);

    const [stage, setStage] = useState("");
    const [game, setGame] = useState(0);

    const [isStageChecked, setStageChecked] = useState(false);
    const [isGameChecked, setGameChecked] = useState(false);

    const handleTeamChange = (e, parentProp) => {
        const {name, value} = e.target;
        setTeamInfos((prevTeamInfos) => {
            let data = { ...prevTeamInfos };
            data[parentProp][name] = value;
            return data;
        });
    }

    const handleCommetatorChange = (e, parentProp) => {
        const {name, value} = e.target;
        setCommentatorInfos((prevCommentatorInfos) => {
            let data = { ...prevCommentatorInfos };
            data[parentProp][name] = value;
            return data;
        });
    }
    
    const handleGameplaySave = () => {
        socket.emit("sendGameplay", teamInfos, isStageChecked ? stage : "", isGameChecked ? game : 0);
    }

    const handleCommentatorSave = () => {
        socket.emit("sendCommentator", commentatorInfos);
    }

    return (
        <AdminContainer>
            <PanelContainer>
                <GameplayPanel>
                    <Input type="checkbox" id="stage-checkbox" name="stage-checkbox" onClick={() => setStageChecked(!isStageChecked)}/>
                    <Label for="stage-checkbox">Stage</Label>
                    <Input type="text" name="is-stage-checked" disabled={!isStageChecked} onBlur={(e) => setStage(e.target.value)}/><br/>

                    <Input type="checkbox" id="game-checkbox" name="game-checkbox" onClick={() => setGameChecked(!isGameChecked)}/>
                    <Label for="game-checkbox">Game</Label>
                    <Input type="number" name="is-game-checked" disabled={!isGameChecked} onBlur={(e) => setGame(e.target.value)}/>

                    <Header>Team 1</Header>
                    <Label for="team1-name">Name:</Label>
                    <Input type="text" id="team1-name" name="name" onBlur={(e) => handleTeamChange(e, "team1")}/>
                    <Label for="team1-score">Score:</Label>
                    <Input type="number" id="team1-score" name="score" onBlur={(e) => handleTeamChange(e, "team1")}/>

                    <Header>Team 2</Header>
                    <Label for="team1-name">Name:</Label>
                    <Input type="text" id="team2-name"  name="name" onBlur={(e) => handleTeamChange(e, "team2")}/>
                    <Label for="team1-score">Score:</Label>
                    <Input type="number" id="team2-score"  name="score" onBlur={(e) => handleTeamChange(e, "team2")}/>

                    <ButtonsContainer>
                        <Button onClick={handleGameplaySave}>Submit</Button>
                        <Button onClick={""}>Reset</Button>
                    </ButtonsContainer>
                </GameplayPanel>

                <Divider/>

                <CommentatorPanel>
                    <Header>Commentator 1</Header>
                    <Label for="commentator1-name">Name:</Label>
                    <Input type="text" id="commentator1-name" name="name" onBlur={(e) => handleCommetatorChange(e, "commentator1")}/>
                    <Label for="commentator1-link">Link:</Label>
                    <Input type="text" id="commentator1-link" name="link" onBlur={(e) => handleCommetatorChange(e, "commentator1")}/>

                    <Header>Commentator 2</Header>
                    <Label for="commentator2-name">Name:</Label>
                    <Input type="text" id="commentator2-name" name="name" onBlur={(e) => handleCommetatorChange(e, "commentator2")}/>
                    <Label for="commentator2-link">Link:</Label>
                    <Input type="text" id="commentator2-link" name="link" onBlur={(e) => handleCommetatorChange(e, "commentator2")}/>

                    <ButtonsContainer>
                        <Button onClick={handleCommentatorSave}>Submit</Button>
                        <Button onClick={""}>Reset</Button>
                    </ButtonsContainer>
                </CommentatorPanel>
            </PanelContainer>
        </AdminContainer>
    );
};

export default Admin;