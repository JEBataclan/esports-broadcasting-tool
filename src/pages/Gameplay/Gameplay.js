import React, { useState, useEffect } from "react";
import * as constants from "../../constants";
import { GameplayContainer, LeftBar, RightBar, MiddleBar, Game, Stage, NameContainer, Name, ScoreContainer, Score } from "./Gameplay.elements";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Textfit from "react-textfit";

const Animated = ({ value, animation, children }) => {
    return (
        <SwitchTransition>
            <CSSTransition key={value} classNames={animation} appear={true} timeout={500}>
                {children}
            </CSSTransition>
        </SwitchTransition>
    )
}

const Gameplay = ({ socket }) => {
    const [teamInfos, setTeamInfos] = useState(constants.initialTeamInfos);
    const [stage, setState] = useState("");
    const [game, setGame] = useState(0);

    useEffect(() => {
        socket.on("receiveGameplay", (teamInfos, stage, game) => {
            setTeamInfos(teamInfos);
            setState(stage);
            setGame(game);
        })
    });

    return (
        <GameplayContainer>
            <LeftBar>
                <NameContainer>
                    <Animated value={teamInfos.team1.name} animation="slide">
                        <Name>
                            <Textfit mode="single" max={50}>
                                {teamInfos.team1.name}
                            </Textfit>
                        </Name>
                    </Animated>
                </NameContainer>
                <ScoreContainer>
                    <Animated value={teamInfos.team1.score} animation="slide">
                        <Score>{teamInfos.team1.score}</Score>
                    </Animated>
                </ScoreContainer>
            </LeftBar>

            {(stage !== "" || game !== 0) && (
                <MiddleBar>
                    {(game !== 0) && (
                        <Animated value={game} animation="slide">
                            <Game>GAME {game}</Game>
                        </Animated>
                    )}
                    {(stage !== "") && (
                        <Animated value={stage} animation="slide">
                            <Stage>{stage}</Stage>
                        </Animated>
                    )}
                </MiddleBar>
            )}
            

            <RightBar>
                <NameContainer>
                    <Animated value={teamInfos.team2.name} animation="slide">
                        <Name side="right">
                            <Textfit mode="single" max={50}>
                                {teamInfos.team2.name}
                            </Textfit>
                        </Name>
                    </Animated>
                </NameContainer>
                <ScoreContainer>
                    <Animated value={teamInfos.team2.score} animation="slide">
                        <Score>{teamInfos.team2.score}</Score>
                    </Animated>
                </ScoreContainer>
            </RightBar>
        </GameplayContainer>
    );
};

export default Gameplay;