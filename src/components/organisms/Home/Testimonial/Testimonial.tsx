import Container from '@components/atoms/Container';
import { FC, useMemo } from 'react';

const Testimonial: FC<{ width: number }> = ({ width }) => {
  const testimonialContents = useMemo(
    () => [
      'Ilmu nya benar-benar bermanfaat buat new parents yang masih clueless soal mengurus newborn',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
      'Pemaparan dari bidan Laily sangatlah jelas dibarengi dengan prakteknya langsung',
    ],
    []
  );
  return (
    <Container>
      <div
        className="position-relative overflow-hidden ms-5 me-0 me-lg-5 "
        style={{ zIndex: '2', minHeight: '20rem' }}
      >
        <div
          className="position-absolute w-100"
          style={{
            top: '10%',
            height: '15rem',
            background: '#FF7755',
            mixBlendMode: 'normal',
            opacity: '0.1',
            borderTopLeftRadius: '48px',
            borderBottomLeftRadius: '48px',
            borderTopRightRadius: width < 992 ? '0px' : '48px',
            borderBottomRightRadius: width < 992 ? '0px' : '48px',
            zIndex: '-1',
          }}
        />
        <h1 className="fw-bolder text-lincoln-green text-center mb-5">
          Testimonial
        </h1>
        <div className="text-nowrap px-4">
          <div className="d-flex w-100 overflow-auto pb-3">
            {testimonialContents.map((content, i) => (
              <div key={i} className="w-100 mx-2">
                <div
                  className="shadow rounded px-3 py-4 text-wrap d-flex align-items-center"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#FFFCDE' : '#EDF8EE',
                    width: '14rem',
                    height: '12.5rem',
                  }}
                >
                  <span>{content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
