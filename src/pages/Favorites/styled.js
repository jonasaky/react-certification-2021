import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
`;

export const HomeLink = styled(Link)`
    margin-top: 60px;
    color: ${props => props.theme.fg};
`;

export const WrapperVideos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;