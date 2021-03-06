import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeLink = styled(Link)`
    margin-top: 60px;
    margin-bottom: -40px;
`;

export const Detail = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 3%;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 7%;
    }
`;

export const Video = styled.div`
    margin: 1em;
    /* text-align: center; */
    /* color: rebeccapurple; */
    width: 70%;
    @media (max-width: 768px) {
        width: 96%;
        /* height: 200px; */
    }
`;

export const IframeWrapper = styled.div`
    height: 100%;
    @media (max-width: 768px) {
        height: 200px;
    }
`;

export const Title = styled.h2`
    /* word-spacing: 6px; */
`;

export const DateSpan = styled.span`
    font-weight: lighter;
    font-size: 16px;
    font-style: italic;
    letter-spacing: normal;
`;

export const Desc = styled.p`
    text-align: left;
`;

export const RelatedCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-basis: 100%;
    flex: 1; */
    width: 25%;
    > h3 {
        margin-top: 10px;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin: 1em;
        /* margin-top: 80%; */
    }
`;

export const RelatedCard = styled.div`
    /* width: 400px; */
    display: flex;
    flex-direction: row;
    margin: 4px;
    align-items: flex-start;
    /* justify-content: space-between; */
    > img {
        margin-right: 6px;
    }
    box-shadow: inset 0 -1px gray;
`;