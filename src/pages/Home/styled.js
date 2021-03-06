import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePage = styled.section`
    text-align: center;
    margin-top: 50px;
`;

export const HomeTitle = styled.h1`
    font-size: 3rem;
    letter-spacing: -2px;
    font-weight: lighter;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const WrapperVideos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* padding: 0 0 0 50px; */
    justify-content: center;
`;

export const MyLink = styled(Link)`
    position: absolute;
    top: 40%;
`;
