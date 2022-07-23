import DefaultLayout from '@layouts/Default.layout';
import CorrectCheckbox from '@assets/images/correct_checkbox.png';
import { useGlobalContext } from '@contexts/Global.context';
import { FC, useMemo, useState } from 'react';
import PaymentMethodModal from '@components/organisms/Cart/PaymentMethodModal';
import PromoModal from '@components/organisms/Cart/PromoModal';
import { CartBottom, CartLayout } from './Cart.style';
import SimiliarECourse from '@components/organisms/SimiliarECourse';

const Cart = () => {
  const {
    state: { width },
  } = useGlobalContext();
  const [shownPaymentMethod, setShownPaymentMethod] = useState(false);
  const [shownPromo, setShownPromo] = useState(false);
  const Layout: FC = useMemo(
    () => (width >= 992 ? DefaultLayout : CartLayout),
    [width]
  );

  const ecourseData = useMemo(
    () => [
      {
        thumbnail:
          'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Belajar Menjadi Ayah yang Baik Pada Masa Pandemi',
        price: {
          normalPrice: 75000,
          finalPrice: 150000,
          percentage: 50,
        },
        instructor: {
          name: 'Rahman Syaidan',
          position: 'Psikolog Keluarga',
          personalPicture:
            'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        averageRating: 4.7,
      },
      {
        thumbnail:
          'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Belajar Menjadi Ayah yang Baik Pada Masa Pandemi',
        price: {
          normalPrice: 75000,
          finalPrice: 150000,
          percentage: 50,
        },
        instructor: {
          name: 'Rahman Syaidan',
          position: 'Psikolog Keluarga',
          personalPicture:
            'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        averageRating: 4.7,
      },
      {
        thumbnail:
          'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Belajar Menjadi Ayah yang Baik Pada Masa Pandemi',
        price: {
          normalPrice: 75000,
          finalPrice: 150000,
          percentage: 50,
        },
        instructor: {
          name: 'Rahman Syaidan',
          position: 'Psikolog Keluarga',
          personalPicture:
            'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        averageRating: 4.7,
      },
    ],
    []
  );

  return (
    <Layout>
      <PaymentMethodModal
        shown={shownPaymentMethod}
        setShown={setShownPaymentMethod}
      />
      <PromoModal shown={shownPromo} setShown={setShownPromo} />
      <div className={`pb-7 pt-10${width >= 992 ? ' container' : ''}`}>
        <div className="d-flex flex-column flex-lg-row justify-content-between mb-5">
          <div
            className="bg-anti-flash py-4 px-4 px-lg-5 rounded-5 h-100"
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
                    borderTopLeftRadius: '15%',
                    borderBottomLeftRadius: '15%',
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
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Metode Pemabayaran</h5>
                <span
                  className="text-persian-green"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShownPaymentMethod(true)}
                >
                  Lihat Semua
                </span>
              </div>
              <div className="d-flex">
                <h6 className="fw-bold m-5 my-4">BCA Virtual Account</h6>
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
              <div
                className="d-flex align-items-center mb-3"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setShownPromo(true);
                }}
              >
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
        </div>
        <SimiliarECourse ecourseData={ecourseData} />
      </div>
      {width < 992 && <CartBottom />}
    </Layout>
  );
};

export default Cart;
