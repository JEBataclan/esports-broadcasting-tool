import React, { useState, useEffect } from "react";
import * as constants from "../../constants";
import { CommentatorContainer, LeftCommentator, RightCommentator, Name, Link } from "./Commentator.elements";
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

const Commentator = ({ socket }) => {
    const [commentatorInfos, setCommentatorInfos] = useState(constants.initialCommentatorInfos);

    useEffect(() => {
        socket.on("receiveCommentator", (commentatorInfos) => {
            setCommentatorInfos(commentatorInfos);
        })
    })

    return (
        <CommentatorContainer>
            <LeftCommentator>
                <Animated value={commentatorInfos.commentator1.name} animation="slide">
                    <Name>
                        <Textfit mode="single" max={50}>
                            {commentatorInfos.commentator1.name}
                        </Textfit>
                    </Name>
                </Animated>
                <Animated value={commentatorInfos.commentator1.link} animation="slide">
                    <Link>
                        <Textfit mode="single" max={25}>
                            {commentatorInfos.commentator1.link}
                        </Textfit>
                    </Link>
                </Animated>
            </LeftCommentator>

            <RightCommentator>
                <Animated value={commentatorInfos.commentator2.name} animation="slide">
                    <Name side="right">
                        <Textfit mode="single" max={50}>
                            {commentatorInfos.commentator2.name}
                        </Textfit>
                    </Name>
                </Animated>
                <Animated value={commentatorInfos.commentator2.link} animation="slide">
                    <Link side="right">
                        <Textfit mode="single" max={25}>
                            {commentatorInfos.commentator2.link}
                        </Textfit>
                    </Link>
                </Animated>
            </RightCommentator>
        </CommentatorContainer>
    );
};

export default Commentator;