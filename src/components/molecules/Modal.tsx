import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div<{ shown: boolean }>`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #33333380;
  mix-blend-mode: normal;
  display: ${({ shown }) => (shown ? 'block' : 'none')};
`;

const Modal: FC<{
  shown: boolean;
  setShown: Dispatch<SetStateAction<boolean>>;
  title: string;
}> = ({ shown, children, title, setShown }) => {
  const closeHandler = (e: any) => {
    if (parseInt(e.target.style.zIndex) === 1055) {
      setShown(false);
    }
  };

  return (
    <ModalContainer
      shown={shown}
      onClick={closeHandler}
      style={{ zIndex: 1055 }}
    >
      <div
        className='p-3 bg-lotion position-absolute top-50 start-50 translate-middle rounded-4'
        style={{ zIndex: 1058, opacity: 1 }}
      >
        <div className='d-flex align mb-3'>
          <i
            className='bi bi-x-circle fs-4 me-2'
            style={{ cursor: 'pointer' }}
            onClick={() => setShown(false)}
          ></i>
          <h4 className='fw-bolder my-auto'>{title}</h4>
        </div>
        {children}
      </div>
    </ModalContainer>
  );
};

export default Modal;
