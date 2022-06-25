import LogoImage from '@assets/images/logo_text.png';
import { useGlobalContext } from '@contexts/Global.context';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <nav className={`fixed-top w-100 px-3 px-md-5 px-xxl-6 pt-3`}>
      <div className="bg-lotion px-4 py-3 rounded-4 shadow">
        <div className="row align-items-center justify-content-between">
          <Link to="/" className="col-4 col-md-2 col-lg-2">
            <img
              className={`w-${width >= 1400 ? '50' : '100'} h-auto`}
              src={LogoImage}
              alt="logo"
            />
          </Link>
          <div className="col-lg-6 col-8">
            <input
              className="form-control bg-anti-flash border-anti-flash"
              type="text"
              name="search"
              id="search"
              placeholder="Cari Kelas"
            />
          </div>
          <div className="col-3 d-none d-lg-block">
            <div className="row">
              <Link to="/login" className="col">
                <button className="btn btn-outline-gold fw-bold text-dark-charcoal w-100">
                  Masuk
                </button>
              </Link>
              <Link to="/daftar" className="col">
                <button className="btn btn-gold fw-bold w-100">Daftar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
