import styled, { keyframes } from 'styled-components';

const LoaderWraper = styled.div`
  background-color: ${({ theme }) => theme.colors.lotion};
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Animation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    opacity: 1
  }

  100% {
    opacity: 0;
    transform: none
  }
`;

const Dot = styled.div`
  background-color: ${({ theme }) => theme.colors.gold};
  border-radius: 50%;
  animation: ${Animation} 0.75s linear infinite;
  width: 1.5rem;
  height: 1.5rem;
`;

const Loader = () => {
  return (
    <LoaderWraper>
      <Dot style={{ marginRight: '1.5rem' }} />
      <Dot />
      <Dot style={{ marginLeft: '1.5rem' }} />
    </LoaderWraper>
  );
};

export default Loader;
