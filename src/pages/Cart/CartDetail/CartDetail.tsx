import DefaultLayout from '@layouts/Default.layout';
import CorrectCheckbox from '@assets/images/correct_checkbox.png';

const CartDetail = () => {
  return (
    <DefaultLayout>
      <div className="container pt-10 px-4 px-lg-0">
        <div
          className="position-relative w-100 d-lg-none d-block mb-5"
          style={{ zIndex: 1 }}
        >
          <div
            className="bg-gold position-absolute w-100 h-100 rounded-5"
            style={{ zIndex: -1, opacity: 0.1 }}
          />
          <div className='p-4'>
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
      </div>
    </DefaultLayout>
  );
};

export default CartDetail;
