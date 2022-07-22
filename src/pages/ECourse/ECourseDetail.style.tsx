import styled from 'styled-components';
import CorrectCheckboxImage from '@assets/images/correct_checkbox.png';
import { FC, useState } from 'react';

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
    <div className='my-4 d-flex align-items-center'>
      <div className='me-2' style={{ width: '24px', height: '24px' }}>
        <img
          src={CorrectCheckboxImage}
          alt='e-course benefit'
          className='img-fluid'
        />
      </div>
      <span className='fw-bold'>{text}</span>
    </div>
  );
};

export const ECourseDetailPreview: FC<{
  width: number;
  imgUrl: string;
  title: string;
  duration: string;
}> = ({ width, imgUrl, title, duration }) => {
  return (
    <div
      style={{
        width: width <= 768 ? '20rem' : '22.5rem',
      }}
    >
      <div
        className='rounded-4'
        style={{
          width: '100%',
          height: '12.25rem',
          backgroundImage: `url('${imgUrl}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className='text-wrap'>
        <p className='mb-1 fw-bold'>{title}</p>
        <span>{duration}</span>
      </div>
    </div>
  );
};

interface ECourseDetailContentProps {
  index: number;
  content: {
    type: {
      icon: string;
      value: string;
    };
    title: string;
    childrens: {
      title: string;
      duration: string;
    }[];
  };
}

export const ECourseDetailContent: FC<ECourseDetailContentProps> = ({
  index,
  content,
}) => {
  const [curriculumIdx, setCurriculumIdx] = useState(0);

  return (
    <>
      <div
        className='d-flex align-items-center justify-content-between w-100'
        style={{
          cursor: 'pointer',
        }}
        onClick={() => setCurriculumIdx(index)}
      >
        <div className='d-flex align-items-center'>
          <div
            className='d-flex align-items-center me-2'
            style={{
              width: '1.25rem',
              height: '1.25rem',
            }}
          >
            <img
              className='img-fluid'
              src={content.type.icon}
              alt={content.type.value}
            />
          </div>
          <h5 className='fw-bold mb-0'>{content.title}</h5>
        </div>
        <i className='bi bi-chevron-up fs-6 fw-bolder'></i>
      </div>
      <ol
        className={`mb-0 d-${index === curriculumIdx ? 'block' : 'none'}`}
        style={{
          transition: 'all 1s',
        }}
      >
        {content.childrens.map((children, j) => (
          <li key={j} className='my-3'>
            <div className='d-flex justify-content-between'>
              <span>{children.title}</span>
              <span>{children.duration}</span>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};
