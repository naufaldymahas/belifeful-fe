import CorrectCheckbox from '@assets/images/correct_checkbox.png';
import BottomMobileSheet from '@components/molecules/BottomMobileSheet';
import { Fragment, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartLayout } from '../Cart.style';

const CartDetail = () => {
  const paymentDetail = useMemo(
    () => ({
      name: 'BCA Virtual Account',
      descriptions: [
        'Transaksi ini akan otomatis menggantikan tagihan BCA Virtual Account yang belum di bayar',
        'Dapatkan kode pembayaran setelah klik “Bayar”',
        'Tidak disarankan bayar melalui bank lain',
      ],
    }),
    []
  );

  const paymentMethods = useMemo(
    () => [
      {
        title: 'Mandiri Virtual Account',
      },
      {
        title: 'BCA Virtual Account',
      },
      {
        title: 'BNI Virtual Account',
      },
      {
        title: 'BTN Virtual Account',
      },
      {
        title: 'BRIVA',
      },
    ],
    []
  );

  const promoList = useMemo(
    () => [
      {
        title: 'Promo 1',
      },
      {
        title: 'Promo 2',
      },
      {
        title: 'Promo 3',
      },
      {
        title: 'Promo 4',
      },
      {
        title: 'Promo 5',
      },
    ],
    []
  );

  const [showPaymentDetail, setShowPaymentDetail] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [showPromoList, setShowPromoList] = useState(false);

  return (
    <>
      <CartLayout title="Beli">
        <div className="container pt-9 pb-5 px-4 px-lg-0">
          <div
            className="position-relative w-100"
            style={{ width: '38%', zIndex: 1 }}
          >
            <div
              className="bg-gold position-absolute w-100 h-100 rounded-5"
              style={{ zIndex: -1, opacity: 0.1 }}
            />
            <div className="p-4">
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
                  className="text-persian-green text-end"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowPaymentMethod(true)}
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
                onClick={() => setShowPromoList(true)}
              >
                <span className="fs-5 fw-bold text-persian-green me-3">%</span>
                <div>
                  <p className="fs-5 fw-bold mb-0">Makin hemat pakai promo</p>
                  <span>Cek ketersediaan promo</span>
                </div>
              </div>
              <button
                className="btn btn-gold fw-bold w-100 rounded-3"
                onClick={() => setShowPaymentDetail(true)}
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </CartLayout>
      <BottomMobileSheet
        shown={showPaymentDetail}
        setShown={setShowPaymentDetail}
        title="Detail Pembayaran"
      >
        <h5 className="fw-bolder mb-3">Metode Pembayaran</h5>
        <div className="mb-3">
          <div className="d-flex py-2">
            <h6 className="fw-bolder my-auto">{paymentDetail.name}</h6>
          </div>
        </div>
        {paymentDetail.descriptions.map((description, i) => (
          <div key={i} className="d-flex mb-2 align-items-center">
            <i className="bi bi-check-lg me-2"></i>
            <span>{description}</span>
          </div>
        ))}
        <hr className="text-gray opacity-75 my-3" />
        <div className="d-flex justify-content-between mb-3">
          <span className="fs-5 fw-bolder">Total Bayar</span>
          <span className="fs-5 fw-bolder">Rp 225.000</span>
        </div>
        <Link to='/payment-confirmation' className="btn btn-gold w-100 fw-bolder">Beli</Link>
      </BottomMobileSheet>
      <BottomMobileSheet
        shown={showPaymentMethod}
        setShown={setShowPaymentMethod}
        title="Pilih Metode Pembayaran"
      >
        <h5 className="fw-bolder mb-3">Transfer Virtual Account</h5>
        {paymentMethods.map((method, i) => (
          <Fragment key={i}>
            <div className="d-flex p-2 align-items-center">
              <span className="fw-bolder">{method.title}</span>
            </div>
            <hr className="text-gray opacity-75 my-3" />
          </Fragment>
        ))}
      </BottomMobileSheet>
      <BottomMobileSheet
        shown={showPromoList}
        setShown={setShowPromoList}
        title="Pakai Promo"
      >
        <div className='d-flex justify-content-between'>
          <input type="text" name="promo" id="promo" className='form-control' placeholder='Masukan kode promo' style={{width: '80%'}} />
          <button className="btn btn-anti-flash fw-bolder">Pakai</button>
        </div>
        <hr className='text-gray opacity-75 my-3' />
        {promoList.map((promo, i) => (
          <div className="mb-3" key={i}>
            <div className="d-flex p-2 align-items-center justify-content-between">
              <span className="fw-bolder">{promo.title}</span>
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        ))}
        <button className="btn btn-gold fw-bolder w-100">Pilih Promo</button>
      </BottomMobileSheet>
    </>
  );
};

export default CartDetail;
