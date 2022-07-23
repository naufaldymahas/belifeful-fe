import { useGlobalContext } from '@contexts/Global.context';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoImage from '@assets/images/logo_text.png';

const CartNavbar: FC<{ title?: string }> = ({ title }) => {
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <nav className={`fixed-top w-100 px-3 px-md-5 px-xxl-6 pt-3`}>
      <div className="bg-lotion px-4 py-3 rounded-4 shadow">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-8">
            <div className="d-flex">
              <i className="bi bi-chevron-left fw-bolder me-2 fs-5"></i>
              <span className="fw-bolder my-auto fs-5">
                {title ? title : 'Keranjang'}
              </span>
            </div>
          </div>
          <Link to="/" className="col-4 col-md-2 col-lg-2">
            <img
              className={`w-${width >= 1400 ? '50' : '100'} h-auto`}
              src={LogoImage}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const CartBottom: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={`fixed-bottom w-100 px-3 px-md-5 px-xxl-6 pb-3`}>
      <div
        className="position-relative w-100 h-100 rounded-5"
        style={{ zIndex: '10' }}
      >
        <div
          className="position-absolute w-100 h-100 bg-gold rounded-5"
          style={{
            zIndex: '-1',
            mixBlendMode: 'normal',
            opacity: '0.1',
          }}
        />
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between">
            <span className="text-persian-green fw-bold fs-4">%</span>
            <div>
              <p className="fw-bolder fs-5 mb-0">Makin hemat pakai promo</p>
              <span>Cek ketersediaan promo</span>
            </div>
            <i className="bi bi-chevron-right fw-bolder me-2 fs-5"></i>
          </div>
          <hr className="text-gray opacity-75 my-3" />
          <div className="d-flex justify-content-between mb-3">
            <span className="fs-5 fw-bolder">Total Bayar</span>
            <span className="fs-5 fw-bolder">Rp 225.000</span>
          </div>
          <button
            onClick={() => navigate('/cart/detail')}
            className="btn btn-gold fw-bolder w-100"
          >
            Beli
          </button>
        </div>
      </div>
    </div>
  );
};

export const CartLayout: FC<{ title?: string }> = ({ children, title }) => {
  return (
    <>
      <CartNavbar title={title} />
      {children}
    </>
  );
};
