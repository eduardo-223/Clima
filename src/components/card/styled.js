import styled, {keyframes} from "styled-components";

const pulse = keyframes`
    100%{
        transform: scale(1.2);
        opacity: 0;
    }
`

export const Container = styled.div``

export const Header = styled.div``

export const Pulse = styled.div`
    height: 150px;
    width: 150px;
    background: linear-gradient(
        #81c9fa,
        #2196f3
    );
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: var(--white);

    ::before,::after{
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #2196f3;
        border-radius: 50%;
        z-index: -1;
        opacity: 0.7;
    }

    ::before{
        animation:  ${pulse} 2s ease-out infinite;
    }

    ::after{
        animation:  ${pulse} 2s 1s ease-out infinite;
    }
`

export const Content = styled.ul`

`