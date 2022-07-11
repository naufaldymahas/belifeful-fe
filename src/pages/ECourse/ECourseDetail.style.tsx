import styled from 'styled-components';
import CorrectCheckboxImage from '@assets/images/correct_checkbox.png';
import { FC } from 'react';

export const ECourselCarouselButton = styled.div`
  background-color: ${({ theme }) => theme.colors.antiFlashWhite};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

export const ECourseDetailBenefit: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="my-4 d-flex align-items-center">
      <div className="me-2" style={{ width: '24px', height: '24px' }}>
        <img
          src={CorrectCheckboxImage}
          alt="e-course benefit"
          className="img-fluid"
        />
      </div>
      <span className="fw-bold">{text}</span>
    </div>
  );
};
