import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePage = styled.section`
    text-align: center;
`;

export const HomeTitle = styled.h1`
    font-size: 3rem;
    letter-spacing: -2px;
    font-weight: lighter;
`;

export const WrapperVideos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 0 0 50px;
`;

export const MyLink = styled(Link)`
    position: absolute;
    top: 40%;
`;
