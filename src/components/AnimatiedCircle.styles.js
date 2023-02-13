import styled from '@emotion/styled';

const AnimatedCircle = styled.circle`
  animation: circle-fill-animation 2s ease;

  @keyframes circle-fill-animation {
    0% {
      stroke-dasharray: 0 ${2 * Math.PI * 90};
    }
  }
`;

export { AnimatedCircle };
