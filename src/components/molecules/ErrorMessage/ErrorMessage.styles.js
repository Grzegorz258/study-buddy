import { Title } from 'components/atoms/Title/Title';
import styled, { keyframes } from 'styled-components';

const shrinkAnimation = keyframes`
    from {
        transform: translateX(-50%) scaleX(1);
    }
    to {
        transform: translateX(-50%) scaleX(0);
    }
`;

const slideAnimation = keyframes`
    from {
        transform: translate(-50%, 500%);
    }
    to {
        transform: translate(-50%, 0);
    }
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: absolute;
  left: 50%;
  bottom: 10%;
  padding: 15px 40px;
  color: ${({ theme }) => theme.colors.error};
  border: 3px solid ${({ theme }) => theme.colors.error};
  border-radius: 40px;
  transform: translateX(-50%);
  animation: ${slideAnimation} 1s ease-in-out 1 forwards, ${slideAnimation} 1s 6s ease-in-out 1 reverse forwards;

  ${Title} {
    color: ${({ theme }) => theme.colors.error};
  }

  &::before {
    opacity: 0.5;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 10%;
    left: 50%;
    width: 35%;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.error};
    border-radius: 30px;
    transform: translateX(-50%);
  }

  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left center;
    animation: ${shrinkAnimation} 5s 0.5s linear 1 forwards;
  }
`;
