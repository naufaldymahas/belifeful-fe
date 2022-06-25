import { FC } from 'react';
import { Link } from 'react-router-dom';

const ECourseCard: FC<{ width: string }> = ({ width }) => {
  return (
    <div className="shadow rounded-5 mx-3 mb-5" style={{ width }}>
      <div style={{ height: '13.5rem' }} className="overflow-hidden">
        <img
          className="img-fluid rounded-top"
          src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="m-3">
        <div style={{ height: '3rem' }}>
          <h5 className="fw-bolder mb-0">
            Belajar Menjadi Ayah yang Baik Pada Masa Pandemi
          </h5>
        </div>
        <div className="d-flex mt-3">
          <div className="w-25">
            <div
              style={{
                width: '3rem',
                height: '3rem',
                backgroundImage: `url('https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>
          <div className="d-flex flex-column">
            <span>Rahman Syaidan</span>
            <span>Psikolog Keluarga</span>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <span>4.7/5</span>
          </div>
          <div className="text-end">
            <p className="mb-0 fs-4 fw-bolder text-coral">Rp75.000</p>
            <span className="fw-semibold text-gray text-decoration-line-through">
              Rp150.000
            </span>
          </div>
        </div>
        <button className="btn btn-gold mt-3 w-100 fw-bold">
          Mulai Belajar
        </button>
        <Link className="text-center w-100 d-block link-gray mt-3" to="/#">
          Tambahkan ke Keranjang
        </Link>
      </div>
    </div>
  );
};

export default ECourseCard;
