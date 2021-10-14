import styled from 'styled-components';

export const Link = styled.div`
    color: black;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    line-height: 25px;
    font-weight: 500;
    font-size: 25px;

    ${({ side }) =>
        side === "right" ? `
            &.slide-enter {
                opactiy: 0;
                transform: translateX(200px);
            }
            &.slide-enter-active {
                opacity: 1;
                transform: translateX(0px);
                transition: all 0.5s ease;
            }
            &.slide-exit {
                opactiy: 1;
                transform: translateX(0px);
            }
            &.slide-exit-active {
                opacity: 0;
                transform: translateX(200px);
                transition: all 0.5s ease;
            }
        ` : `
            &.slide-enter {
                opactiy: 0;
                transform: translateX(-200px);
            }
            &.slide-enter-active {
                opacity: 1;
                transform: translateX(-0px);
                transition: all 0.5s ease;
            }
            &.slide-exit {
                opactiy: 1;
                transform: translateX(0px);
            }
            &.slide-exit-active {
                opacity: 0;
                transform: translateX(-200px);
                transition: all 0.5s ease;
            }
        `
    }
`;

export const Name = styled.div`
    color: black;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    line-height: 50px;
    font-weight: 900;
    font-size: 50px;

    ${({ side }) =>
        side === "right" ? `
            &.slide-enter {
                opactiy: 0;
                transform: translateX(200px);
            }
            &.slide-enter-active {
                opacity: 1;
                transform: translateX(0px);
                transition: all 0.5s ease;
            }
            &.slide-exit {
                opactiy: 1;
                transform: translateX(0px);
            }
            &.slide-exit-active {
                opacity: 0;
                transform: translateX(200px);
                transition: all 0.5s ease;
            }
        ` : `
            &.slide-enter {
                opactiy: 0;
                transform: translateX(-200px);
            }
            &.slide-enter-active {
                opacity: 1;
                transform: translateX(-0px);
                transition: all 0.5s ease;
            }
            &.slide-exit {
                opactiy: 1;
                transform: translateX(0px);
            }
            &.slide-exit-active {
                opacity: 0;
                transform: translateX(-200px);
                transition: all 0.5s ease;
            }
        `
    }
`;

export const Commentator = styled.div`
    position: absolute;
    color: black;
    top: 600px;
    width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const LeftCommentator = styled(Commentator)`
    left: 250px;
`;

export const RightCommentator = styled(Commentator)`
    right: 250px;
`;

export const CommentatorContainer = styled.div`
    position: relative;
    width: 1920px;
    height: 1080px;
`;