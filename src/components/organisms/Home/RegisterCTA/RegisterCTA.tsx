import { FC } from 'react';
import EbookImage from '@assets/images/ebook.png';
import Container from '@components/atoms/Container';
import { Link } from 'react-router-dom';

const RegisterCTA: FC<{ width: number }> = ({ width }) => {
  return (
    <div className="position-relative pb-10 overflow-hidden">
      <div
        className={`position-absolute w-${width < 768 ? '100' : '50'}`}
        style={{
          bottom: width >= 1200 ? '-15%' : width >= 768 ? '-5%' : '-5%',
          left: width >= 768 ? '-15%' : '-30%',
        }}
      >
        <img className="w-100 h-auto" src={EbookImage} alt="" />
      </div>
      <Container>
        <div className="d-flex justify-content-end">
          <div className="card shadow col-12 col-lg-10 p-5 rounded-5">
            <div className="card-body">
              <div className="row flex-column flex-lg-row justify-content-between">
                <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                  <h1 className="text-lincoln-green fw-bolder mb-3">
                    Membangun keluarga yang{' '}
                    <span className="text-coral">lebih baik</span>
                  </h1>
                  <span className="fs-5 text-lincoln-green fw-bold">
                    Yuk kita mulai dengan membuat profil log in kamu
                  </span>
                </div>
                <div className="col-12 col-lg-6 text-center">
                  <h2 className="mb-4 fw-bold">Daftar</h2>
                  <form>
                    <input
                      className="form-control mb-4"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />
                    <button className="btn btn-gold fw-bold w-100">
                      Lanjutkan
                    </button>
                  </form>
                  <div className="my-4">atau daftar dengan</div>
                  <div className="d-flex justify-content-between mb-4">
                    <button
                      className="btn btn-outline-gray"
                      style={{ width: '48%' }}
                    >
                      Google
                    </button>
                    <button
                      className="btn btn-outline-gray"
                      style={{ width: '48%' }}
                    >
                      Facebook
                    </button>
                  </div>
                  <span className="fw-bold text-gray">
                    Sudah punya akun?{' '}
                    <Link
                      to="/login"
                      className="link-persian-green text-decoration-none"
                    >
                      Masuk
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterCTA;
