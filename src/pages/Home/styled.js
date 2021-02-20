import styled from 'styled-components';

const HomePage = styled.section`
    text-align: center;
`;

const HomeTitle = styled.h1`
    font-size: 3rem;
    letter-spacing: -2px;
    font-weight: lighter;
`;

const WrapperVideos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 0 0 50px;
`;

const Styled = { HomePage, HomeTitle, WrapperVideos };
export default Styled;