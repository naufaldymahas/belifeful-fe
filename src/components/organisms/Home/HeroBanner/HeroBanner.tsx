import PlayIconImage from '@assets/images/play.png';
import ParentingImage from '@assets/images/parenting.png';
import Container from '@components/atoms/Container';
import { FC } from 'react';
import { useNavigate } from 'react-router';

const HeroBanner: FC<{ width: number }> = ({ width }) => {
  const navigate = useNavigate();

  return (
    <div className="position-relative pb-0 pb-lg-5" style={{ zIndex: '2' }}>
      <div
        className="position-absolute w-100 bg-gold"
        style={{
          zIndex: '-1',
          mixBlendMode: 'normal',
          opacity: '0.1',
          height: width >= 992 ? '100%' : '80%',
        }}
      />
      <Container>
        <div className="row flex-column-reverse flex-lg-row align-items-center">
          <div className="col">
            <h1 className="display-5 text-lincoln-green fw-bolder mb-4">
              Edukasi <span className="text-coral">terbaik</span> untuk keluarga
              kecil mu
            </h1>
            <h4 className="text-lincoln-green fw-bold mb-4">
              Apapun permasalahan kamu temukan jawabannya disini
            </h4>
            <button
              className="btn btn-gold btn-lg d-flex align-items-center"
              onClick={() => navigate('/register')}
            >
              <span className="fw-bold fs-6 me-1">Mulai Sekarang</span>
              <img
                style={{ width: '16px', height: '16px' }}
                src={PlayIconImage}
              />
            </button>
          </div>
          <div className="col">
            <img className="img-fluid" src={ParentingImage} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
