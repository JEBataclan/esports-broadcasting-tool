import styled from "styled-components";

export const Stage = styled.div`
    font-size: 20px;
    font-weight: 300;
    text-transform: uppercase;

    &.slide-enter {
        opactiy: 0;
        transform: translateY(100px);
    }
    &.slide-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: all 0.5s ease;
    }
    &.slide-exit {
        opactiy: 1;
        transform: translatY(0px);
    }
    &.slide-exit-active {
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.5s ease;
    }
`;

export const Game = styled.div`
    font-size: 35px;
    font-weight: 500;
    text-transform: uppercase;

    &.slide-enter {
        opactiy: 0;
        transform: translateY(-100px);
    }
    &.slide-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: all 0.5s ease;
    }
    &.slide-exit {
        opactiy: 1;
        transform: translatY(0px);
    }
    &.slide-exit-active {
        opacity: 0;
        transform: translateY(-100px);
        transition: all 0.5s ease;
    }
`;

export const MiddleBar = styled.div`
    position: fixed;
    width: 250px;
    height: 100px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    overflow: hidden;
`

export const Score = styled.div`
    font-size: 50px;
    font-weight: 700;

    &.slide-enter {
        opactiy: 0;
        transform: translateY(-100px);
    }
    &.slide-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: all 0.5s ease;
    }
    &.slide-exit {
        opactiy: 1;
        transform: translatY(0px);
    }
    &.slide-exit-active {
        opacity: 0;
        transform: translateY(-100px);
        transition: all 0.5s ease;
    }
`

export const ScoreContainer = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Name = styled.div`
    width: inherit;
    font-size: 50px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;

    ${({ side }) =>
        side === "right" ? `
            &.slide-enter {
                opactiy: 0;
                transform: translateX(200px);
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

export const NameContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const Bar = styled.div`
    position: absolute;
    width: 600px;
    height: 100px;
    display: flex;
    flex-direction: row;
`;

export const LeftBar = styled(Bar)`
    left: 0px;
`;

export const RightBar = styled(Bar)`
    direction: rtl;
    right: 0px;
`;

export const GameplayContainer = styled.div`
    width: 1920px;
    height: 1080px;
    position: relative;
`;