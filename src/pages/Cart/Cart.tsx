import DefaultLayout from '@layouts/Default.layout';
import CorrectCheckbox from '@assets/images/correct_checkbox.png';
import { useGlobalContext } from '@contexts/Global.context';
import { useNavigate } from 'react-router';

const Cart = () => {
  const navigate = useNavigate();
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <DefaultLayout>
      <div className={`pt-10${width >= 992 ? ' container' : ''}`}>
        <div className="d-flex flex-column flex-lg-row justify-content-between mb-5">
          <div
            className="bg-anti-flash py-4 px-4 px-lg-5 rounded-5"
            style={{
              width: width >= 992 ? '60%' : '100%',
            }}
          >
            <h3 className="fw-bolder mb-3 d-none d-lg-block">Keranjang</h3>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <i className="bi bi-check2-circle me-2 text-persian-green fs-4 fw-bolder"></i>
                <span className="fw-bold fs-5">Pilih Semua</span>
              </div>
              <i
                onMouseOver={(e: any) => {
                  e.target.style.color = 'var(--bs-coral-red)';
                }}
                onMouseOut={(e: any) => {
                  e.target.style.color = 'var(--bs-gray)';
                }}
                className="bi bi-trash fs-4"
                style={{
                  color: 'var(--bs-gray)',
                  cursor: 'pointer',
                }}
              ></i>
            </div>
            <div className="d-flex mb-3 align-items-center">
              <i className="bi bi-check2-circle me-2 text-persian-green fs-4 fw-bolder"></i>
              <div className="me-2 col-3 col-xl-2">
                <div
                  style={{
                    height: '11rem',
                    backgroundImage: `url('https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center',
                    borderTopLeftRadius: '25%',
                    borderBottomLeftRadius: '25%',
                  }}
                />
              </div>
              <div className="p-2">
                <h5
                  className="fw-bold"
                  style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  Belajar Menjadi Ayah yang Baik Pada Masa Pandemi
                </h5>
                <div className="d-flex align-items-center mb-2">
                  <div
                    className="me-2"
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundImage: `url('https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      borderRadius: '50%',
                    }}
                  />
                  <div>
                    <p className="mb-0">Rahman Syaidan</p>
                    <p className="mb-0">Psikolog Keluarga</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="w-50 d-flex align-items-end">
                    <span className="fw-semibold">4.7/5</span>
                  </div>
                  <div className="w-50 d-flex flex-column align-items-end">
                    <p className="mb-0 fs-5 fw-bold text-coral">Rp75.000</p>
                    <span className="fw-semibold text-gray text-decoration-line-through">
                      Rp150.000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="position-relative d-none d-lg-block"
            style={{ width: '38%', zIndex: 1 }}
          >
            <div
              className="bg-gold position-absolute w-100 h-100 rounded-5"
              style={{ zIndex: -1, opacity: 0.1 }}
            />
            <div className="p-4">
              <h3 className="fw-bolder mb-3">Pembayaran</h3>
              <hr className="text-gray opacity-75 mb-3" />
              <h5 className="fw-bold mb-3">Main Benefits</h5>
              <div className="mb-3 d-flex align-items-center">
                <div
                  className="me-2 d-flex align-items-center"
                  style={{ width: '1.25rem', height: '1.25rem' }}
                >
                  <img src={CorrectCheckbox} alt="" className="img-fluid" />
                </div>
                <span className="fw-semibold">Akses selama 1 tahun</span>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <div
                  className="me-2 d-flex align-items-center"
                  style={{ width: '1.25rem', height: '1.25rem' }}
                >
                  <img src={CorrectCheckbox} alt="" className="img-fluid" />
                </div>
                <span className="fw-semibold">Sertifikat Digital</span>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <div
                  className="me-2 d-flex align-items-center"
                  style={{ width: '1.25rem', height: '1.25rem' }}
                >
                  <img src={CorrectCheckbox} alt="" className="img-fluid" />
                </div>
                <span className="fw-semibold">Group Sharing</span>
              </div>
              <hr className="text-gray opacity-75 mb-3" />
              <h5 className="fw-bold mb-3">Ringkasan Pembayaran</h5>
              <div className="mb-3 d-flex justify-content-between">
                <span>Harga (2 kelas)</span>
                <span>Rp 300.000</span>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <span>Diskon (2 kelas)</span>
                <span>-Rp 150.000</span>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <span>Biaya Layanan</span>
                <span>Gratis</span>
              </div>
              <hr className="text-gray opacity-75 mb-3" />
              <div className="d-flex justify-content-between mb-3">
                <h5 className="fw-bold mb-0">Total Bayar</h5>
                <h5 className="fw-bold mb-0">Rp 150.00</h5>
              </div>
              <hr className="text-gray opacity-75 mb-3" />
              <div className="d-flex align-items-center mb-3">
                <span className="fs-5 fw-bold text-persian-green me-3">%</span>
                <div>
                  <p className="fs-5 fw-bold mb-0">Makin hemat pakai promo</p>
                  <span>Cek ketersediaan promo</span>
                </div>
              </div>
              <button className="btn btn-gold fw-bold w-100 rounded-3">
                Bayar
              </button>
            </div>
          </div>
          <div
            className={`position-relative w-100 d-lg-none d-block mt-5${
              width >= 992 ? '' : ' container'
            }`}
            style={{ zIndex: 1 }}
          >
            <div
              className="bg-gold position-absolute w-100 h-100 rounded-5"
              style={{ zIndex: -1, opacity: 0.1 }}
            />
            <div className="p-4">
              <div className="d-flex align-items-center mb-3">
                <span className="fs-5 fw-bold text-persian-green me-3">%</span>
                <div>
                  <p className="fs-5 fw-bold mb-0">Makin hemat pakai promo</p>
                  <span>Cek ketersediaan promo</span>
                </div>
              </div>
              <hr className="text-gray opacity-75 mb-3" />
              <div className="d-flex justify-content-between mb-3">
                <h5 className="fw-bold mb-0">Total Bayar</h5>
                <h5 className="fw-bold mb-0">Rp 150.00</h5>
              </div>
              <button
                onClick={() => navigate('/cart/detail')}
                className="btn btn-gold fw-bold w-100 rounded-3"
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
