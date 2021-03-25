import styled from 'styled-components';
import border from './border.png';

export const IframeWrapper = styled.div`
  border: 10px solid transparent; 
  padding: 15px;
  border-image: url(${border}) 30 round;
    
    height: 100%;
    @media (max-width: 768px) {
        height: 200px;
    }
`;