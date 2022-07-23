import Card from '@components/atoms/Card';
import SimiliarECourse from '@components/organisms/SimiliarECourse';
import { useGlobalContext } from '@contexts/Global.context';
import DefaultLayout from '@layouts/Default.layout';
import { ColorThemeEnum } from '@styles/Theme';
import { Fragment, useMemo, useState } from 'react';

const PaymentConfirmation = () => {
  const {
    state: { width },
  } = useGlobalContext();

  const [howToPayIdx, setHowToPayIdx] = useState(0);

  const howToPay = useMemo(
    () => [
      {
        title: 'ATM BCA',
        steps: [
          'Masukkan Kartu ATM BCA & PIN',
          'Pilih menu Transaksi Lainnya > Transfer > ke Rekening BCA Virtual Account',
          'Masukkan 5 angka kode perusahaaan untuk Belifeful(80555) dan Nomor HP yang terdaftar di akun Belifeful (Contoh : 80555081224333064)',
          'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/     Produk dan Total Tagihan',
          'Masukkan Jumlah Transfer sesuai dengan Total Bayar',
          'Ikuti instruksi untuk menyelesaikan transaksi',
          'Simpan struk transaksi sebagai bukti pembayaran',
        ],
      },
      {
        title: 'm-BCA (BCA Mobile)',
        steps: [
          'Masukkan Kartu ATM BCA & PIN',
          'Pilih menu Transaksi Lainnya > Transfer > ke Rekening BCA Virtual Account',
          'Masukkan 5 angka kode perusahaaan untuk Belifeful(80555) dan Nomor HP yang terdaftar di akun Belifeful (Contoh : 80555081224333064)',
          'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/     Produk dan Total Tagihan',
          'Masukkan Jumlah Transfer sesuai dengan Total Bayar',
          'Ikuti instruksi untuk menyelesaikan transaksi',
          'Simpan struk transaksi sebagai bukti pembayaran',
        ],
      },
      {
        title: 'Internet Banking BCA',
        steps: [
          'Masukkan Kartu ATM BCA & PIN',
          'Pilih menu Transaksi Lainnya > Transfer > ke Rekening BCA Virtual Account',
          'Masukkan 5 angka kode perusahaaan untuk Belifeful(80555) dan Nomor HP yang terdaftar di akun Belifeful (Contoh : 80555081224333064)',
          'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/     Produk dan Total Tagihan',
          'Masukkan Jumlah Transfer sesuai dengan Total Bayar',
          'Ikuti instruksi untuk menyelesaikan transaksi',
          'Simpan struk transaksi sebagai bukti pembayaran',
        ],
      },
      {
        title: 'Kantor Cabang BCA',
        steps: [
          'Masukkan Kartu ATM BCA & PIN',
          'Pilih menu Transaksi Lainnya > Transfer > ke Rekening BCA Virtual Account',
          'Masukkan 5 angka kode perusahaaan untuk Belifeful(80555) dan Nomor HP yang terdaftar di akun Belifeful (Contoh : 80555081224333064)',
          'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/     Produk dan Total Tagihan',
          'Masukkan Jumlah Transfer sesuai dengan Total Bayar',
          'Ikuti instruksi untuk menyelesaikan transaksi',
          'Simpan struk transaksi sebagai bukti pembayaran',
        ],
      },
    ],
    []
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

  const paymentInfo = useMemo(
    () => ({
      wording: 'Saatnya Invest 100% di Ilmu Pengetahuan',
      clock: '23:54:53',
      dateTime: 'Selasa, 30 Agustus 2022 17:16',
      paymentMethod: 'BCA Virtual Account',
      paymentNumber: 89773477342472,
      price: 'Rp 200.000',
    }),
    []
  );

  return (
    <DefaultLayout>
      <div className="position-relative" style={{ zIndex: '1' }}>
        <div
          className="position-absolute w-100 bg-gold bg-opacity-10"
          style={{
            height: '60vh',
            zIndex: '-1',
          }}
        ></div>
        <div className="container pt-10 px-4 px-lg-0">
          <div className="px-0 px-lg-10">
            <div className="d-lg-none d-block">
              <Card
                bg={ColorThemeEnum.antiFlashWhite}
                className="shadow mb-3 rounded-4"
              >
                <h5 className="mb-0 fw-bolder">{paymentInfo.wording}</h5>
              </Card>
              <Card className="shadow mb-3 rounded-4">
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <p className={`mb-0 fs-${width >= 992 ? '6' : '7'}`}>
                      Batas akhir pembayaran
                    </p>
                    <p
                      className={`mb-0 fw-bolder fs-${
                        width >= 992 ? '5' : '6'
                      }`}
                    >
                      {paymentInfo.dateTime}
                    </p>
                  </div>
                  <span className="text-coral fw-bolder">
                    {paymentInfo.clock}
                  </span>
                </div>
              </Card>
            </div>
            <Card className="shadow mb-5 rounded-4 d-lg-block d-none">
              <div className="px-10 text-center">
                <h2 className="fw-bolder mx-auto">{paymentInfo.wording}</h2>
                <h1 className="fw-bolder text-coral my-4">
                  {paymentInfo.clock}
                </h1>
                <h4 className="text-gray">Batas akhir pembayaran</h4>
                <h3 className="fw-bolder">{paymentInfo.dateTime}</h3>
              </div>
            </Card>
            <Card className="shadow mb-5 rounded-4">
              <div className="mb-3">
                <h5 className="fw-bolder mb-0">{paymentInfo.paymentMethod}</h5>
              </div>
              <div className="d-flex justify-content-between align-items-end mb-3">
                <div>
                  <p className={`mb-0 fs-${width >= 992 ? '6' : '7'}`}>
                    Nomor Virtual Account
                  </p>
                  <p
                    className={`mb-0 fw-bolder fs-${width >= 992 ? '5' : '6'}`}
                  >
                    {paymentInfo.paymentNumber}
                  </p>
                </div>
                <div>
                  <span className="text-persian-green fw-bolder">Salin</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-end">
                <div>
                  <p className={`mb-0 fs-${width >= 992 ? '6' : '7'}`}>
                    Total Pembayaran
                  </p>
                  <p
                    className={`mb-0 fw-bolder fs-${width >= 992 ? '5' : '6'}`}
                  >
                    {paymentInfo.price}
                  </p>
                </div>
                <span className="text-persian-green fw-bolder">
                  Lihat Detail
                </span>
              </div>
              <div className="d-lg-none d-block">
                <hr className="text-gray opacity-75 my-3" />
                <p className="text-persian-green text-center fw-bolder mb-0">
                  Lihat Cara Pembayaran
                </p>
              </div>
            </Card>
            <div className="mb-5">
              <button className="btn btn-gold fw-bolder w-100 mb-2">
                Beli E-Course Lagi
              </button>
              <button className="btn btn-outline-gold fw-bolder w-100 text-dark-charcoal">
                Cek Status Pembayaran
              </button>
            </div>
            <h5 className="fw-bolder mb-3">Cara Pembayaran</h5>
            {howToPay.map((val, i) => (
              <Fragment key={i}>
                <div
                  className={`d-flex justify-content-between align-items-center mb-4`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setHowToPayIdx(i)}
                >
                  <span className="fw-bolder">{val.title}</span>
                  <i
                    className={`bi bi-chevron-${
                      howToPayIdx === i ? 'up' : 'down'
                    } fs-6 fw-bolder`}
                  ></i>
                </div>
                {howToPayIdx === i &&
                  val.steps.map((step, j) => (
                    <div key={j} className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle me-2 py-1 px-2"
                        style={{ backgroundColor: '#fad70a80' }}
                      >
                        <span className="fw-bolder">{j + 1}</span>
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
              </Fragment>
            ))}
          </div>
          <div className="placeholder-glow my-5">
            <div
              className="w-100 placeholder rounded"
              style={{
                height: width >= 992 ? '12rem' : '10rem',
              }}
            />
          </div>
          <SimiliarECourse
            height={width >= 992 ? 80 : 60}
            ecourseData={ecourseData}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PaymentConfirmation;
