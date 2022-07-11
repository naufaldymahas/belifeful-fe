import { useGlobalContext } from '@contexts/Global.context';
import DefaultLayout from '@layouts/Default.layout';
import CorrectCheckboxImage from '@assets/images/correct_checkbox.png';
import BookImage from '@assets/images/e-course.png';
import QuizImage from '@assets/images/quiz.png';
import FileImage from '@assets/images/file.png';
import ChevronUp from '@assets/images/chevron-up.png';
import ChevronDownImage from '@assets/images/chevron-down.png';
import { Fragment, useCallback, useMemo, useState } from 'react';
import moment from 'moment';
import 'moment/dist/locale/id';
import ChevronDown from '@components/atoms/ChevronDown';
import ECourseCard from '@components/organisms/ECourse/ECourseCard';
import {
  ECourseDetailBenefit,
  ECourselCarouselButton,
} from './ECourseDetail.style';
moment.locale('id');

const ECourseDetail = () => {
  const carouselCardId = useMemo(() => 'carousel-card', []);
  const {
    state: { width },
  } = useGlobalContext();
  const [curriculumIdx, setCurriculumIdx] = useState(0);
  const [sizeShowReview, setSizeShowReview] = useState(3);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const carouselHandler = useCallback(
    (type: 'left' | 'right') => {
      const carouselCardComponents = document.querySelectorAll(
        `#${carouselCardId}`
      );
      carouselCardComponents.forEach((card: any) => {
        const currentTransform = parseInt(
          card.style.transform.substring(11, card.style.transform.indexOf('%'))
        );
        if (type === 'right') {
          setCarouselIdx(carouselIdx + 1);
          card.style.transform = `translateX(${currentTransform - 100}%)`;
        } else {
          card.style.transform = `translateX(${currentTransform + 100}%)`;
          setCarouselIdx(carouselIdx - 1);
        }
      });
    },
    [carouselIdx]
  );

  const previewContents = useMemo(
    () => [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Pentingany E-Course ini',
        duration: '2 menit',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Apa itu Newborn?',
        duration: '5 menit',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Persiapan sebelum melahirkan',
        duration: '4 menit',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Persiapan sebelum melahirkan',
        duration: '4 menit',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Persiapan sebelum melahirkan',
        duration: '4 menit',
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Persiapan sebelum melahirkan',
        duration: '4 menit',
      },
    ],
    []
  );

  const curriculumContents = useMemo(
    () => [
      {
        title: 'Bab 1',
        type: {
          value: 'course',
          icon: BookImage,
        },
        childrens: [
          {
            title: 'Apa itu Newborn?',
            duration: '5 Menit',
          },
          {
            title: 'Persiapan sebelum melahirkan',
            duration: '4 Menit',
          },
          {
            title: 'Nutrisi untuk Newborn',
            duration: '6 Menit',
          },
        ],
      },
      {
        title: 'Bab 2',
        type: {
          value: 'course',
          icon: BookImage,
        },
        childrens: [
          {
            title: 'Apa itu Newborn?',
            duration: '5 Menit',
          },
          {
            title: 'Persiapan sebelum melahirkan',
            duration: '4 Menit',
          },
          {
            title: 'Nutrisi untuk Newborn',
            duration: '6 Menit',
          },
        ],
      },
      {
        title: 'Bab 3',
        type: {
          value: 'course',
          icon: BookImage,
        },
        childrens: [
          {
            title: 'Apa itu Newborn?',
            duration: '5 Menit',
          },
          {
            title: 'Persiapan sebelum melahirkan',
            duration: '4 Menit',
          },
          {
            title: 'Nutrisi untuk Newborn',
            duration: '6 Menit',
          },
        ],
      },
      {
        title: 'Bab 4',
        type: {
          value: 'course',
          icon: BookImage,
        },
        childrens: [
          {
            title: 'Apa itu Newborn?',
            duration: '5 Menit',
          },
          {
            title: 'Persiapan sebelum melahirkan',
            duration: '4 Menit',
          },
          {
            title: 'Nutrisi untuk Newborn',
            duration: '6 Menit',
          },
        ],
      },
      {
        title: 'Bab 5',
        type: {
          value: 'course',
          icon: BookImage,
        },
        childrens: [
          {
            title: 'Apa itu Newborn?',
            duration: '5 Menit',
          },
          {
            title: 'Persiapan sebelum melahirkan',
            duration: '4 Menit',
          },
          {
            title: 'Nutrisi untuk Newborn',
            duration: '6 Menit',
          },
        ],
      },
      {
        title: 'Quiz',
        type: {
          value: 'quiz',
          icon: QuizImage,
        },
        childrens: [
          {
            title: 'Apa itu Newborn?',
            duration: '5 Menit',
          },
          {
            title: 'Persiapan sebelum melahirkan',
            duration: '4 Menit',
          },
          {
            title: 'Nutrisi untuk Newborn',
            duration: '6 Menit',
          },
        ],
      },
      {
        title: 'Download Materi',
        type: {
          value: 'file',
          icon: FileImage,
        },
        childrens: [
          {
            title: 'Apa itu Newborn?',
            duration: '5 Menit',
          },
          {
            title: 'Persiapan sebelum melahirkan',
            duration: '4 Menit',
          },
          {
            title: 'Nutrisi untuk Newborn',
            duration: '6 Menit',
          },
        ],
      },
    ],
    []
  );

  const reviewContents = useMemo(
    () => [
      {
        name: 'Rahman Syaidan',
        createdAt: moment().format('dddd, DD mm YYYY'),
        review:
          'Peranan psikologi pada pernikahan bukan hal yang mudah karena bergantung pada emosi yang saling mendominasi pada kedua pasangan dalam menjalin rumah tangga. Mengatur emosional menjadi peranan penting yang perlu diperhatikan dan tidak bisa dianggap mudah. Terutama, pada setiap waktu yang harus dilalui secara bersama dan peran sebagai pasangan yang tidak bisa saling mendominasi antara satu dengan lainnya. Maka, sangat penting peranan psikologi pada kehidupan sebelum pernikahan agar dapat memberikan refleksi pada pikiran dalam menjalin hidup dikemudian hari agar tidak adanya perselisihan karena masalah yang ditimbulkan.',
      },
      {
        name: 'Rahman Syaidan',
        createdAt: moment().format('dddd, DD mm YYYY'),
        review:
          'Peranan psikologi pada pernikahan bukan hal yang mudah karena bergantung pada emosi yang saling mendominasi pada kedua pasangan dalam menjalin rumah tangga. Mengatur emosional menjadi peranan penting yang perlu diperhatikan dan tidak bisa dianggap mudah. Terutama, pada setiap waktu yang harus dilalui secara bersama dan peran sebagai pasangan yang tidak bisa saling mendominasi antara satu dengan lainnya. Maka, sangat penting peranan psikologi pada kehidupan sebelum pernikahan agar dapat memberikan refleksi pada pikiran dalam menjalin hidup dikemudian hari agar tidak adanya perselisihan karena masalah yang ditimbulkan.',
      },
      {
        name: 'Rahman Syaidan',
        createdAt: moment().format('dddd, DD mm YYYY'),
        review:
          'Peranan psikologi pada pernikahan bukan hal yang mudah karena bergantung pada emosi yang saling mendominasi pada kedua pasangan dalam menjalin rumah tangga. Mengatur emosional menjadi peranan penting yang perlu diperhatikan dan tidak bisa dianggap mudah. Terutama, pada setiap waktu yang harus dilalui secara bersama dan peran sebagai pasangan yang tidak bisa saling mendominasi antara satu dengan lainnya. Maka, sangat penting peranan psikologi pada kehidupan sebelum pernikahan agar dapat memberikan refleksi pada pikiran dalam menjalin hidup dikemudian hari agar tidak adanya perselisihan karena masalah yang ditimbulkan.',
      },
      {
        name: 'Rahman Syaidan',
        createdAt: moment().format('dddd, DD mm YYYY'),
        review:
          'Peranan psikologi pada pernikahan bukan hal yang mudah karena bergantung pada emosi yang saling mendominasi pada kedua pasangan dalam menjalin rumah tangga. Mengatur emosional menjadi peranan penting yang perlu diperhatikan dan tidak bisa dianggap mudah. Terutama, pada setiap waktu yang harus dilalui secara bersama dan peran sebagai pasangan yang tidak bisa saling mendominasi antara satu dengan lainnya. Maka, sangat penting peranan psikologi pada kehidupan sebelum pernikahan agar dapat memberikan refleksi pada pikiran dalam menjalin hidup dikemudian hari agar tidak adanya perselisihan karena masalah yang ditimbulkan.',
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

  const ecourseDetailBenefit = useMemo(
    () => [
      'E-Course bisa di akses kapan pun',
      'Akses selama 1 tahun',
      'Durasi E-Course 60 menit',
      'Sertifikat Digital',
    ],
    []
  );

  return (
    <DefaultLayout>
      <div className="container pt-10 px-4 px-lg-0">
        <div className="d-flex flex-column flex-lg-row justify-content-between">
          <div
            style={{ width: width >= 992 ? '55%' : '100%' }}
            className="mb-4 mb-lg-0"
          >
            <div className="w-100 h-75 mb-4 overflow-hidden rounded-5">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Newborn Care 101"
              />
            </div>
            <div className="shadow rounded-4 bg-lotion">
              <div className="d-flex p-3 align-items-center">
                <div className="me-4">
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
                <div className="me-4">
                  <p className="fw-bold mb-1">Narasumber</p>
                  <p className="mb-0">Rahman Syaidan</p>
                </div>
                <div className="me-4">
                  <p className="fw-bold mb-1">Background</p>
                  <p className="mb-0">Psikolog Keluarga</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: width >= 992 ? '40%' : '100%' }}>
            <div className="shadow rounded-4 p-3 mb-4 bg-anti-flash">
              <h4 className="mb-0 fw-bold">
                PROMO BELIFEFUL 50 <span className="text-persian-green">%</span>
              </h4>
            </div>
            <div className="shadow rounded-4 p-3">
              <div className="border-bottom">
                <h4 className="fw-bold mb-4">Newborn Care 101</h4>
              </div>
              <div className="border-bottom">
                {ecourseDetailBenefit.map((value, i) => (
                  <ECourseDetailBenefit text={value} key={i} />
                ))}
              </div>
              <div className="d-flex mt-4 mb-3 justify-content-between">
                <span>Harga Normal</span>
                <span>Rp 300.000</span>
              </div>
              <div className="d-flex mb-4 justify-content-between fw-bolder fs-5">
                <span>Harga</span>
                <span>Rp 150.000</span>
              </div>
              <button className="btn btn-gold fw-bolder w-100 mb-4">
                Beli E-Course
              </button>
              <button className="btn btn-outline-gold text-dark-charcoal fw-bolder w-100">
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <h4 className="fw-bold my-4">Deskripsi</h4>
        <div className="card rounded-4 shadow p-3">
          Peranan psikologi pada pernikahan bukan hal yang mudah karena
          bergantung pada emosi yang saling mendominasi pada kedua pasangan
          dalam menjalin rumah tangga. Mengatur emosional menjadi peranan
          penting yang perlu diperhatikan dan tidak bisa dianggap mudah.
          Terutama, pada setiap waktu yang harus dilalui secara bersama dan
          peran sebagai pasangan yang tidak bisa saling mendominasi antara satu
          dengan lainnya. Maka, sangat penting peranan psikologi pada kehidupan
          sebelum pernikahan agar dapat memberikan refleksi pada pikiran dalam
          menjalin hidup dikemudian hari agar tidak adanya perselisihan karena
          masalah yang ditimbulkan.
        </div>
        <h4 className="fw-bold my-4">Preview</h4>
        <div className="d-flex text-nowrap overflow-auto">
          {previewContents.map((content, i) => (
            <div
              key={i}
              className={`me-${
                i === previewContents.length - 1 ? '0' : '4'
              } w-100`}
            >
              <div
                style={{
                  width: width <= 768 ? '20rem' : '22.5rem',
                }}
              >
                <div
                  className="rounded-4"
                  style={{
                    width: '100%',
                    height: '12.25rem',
                    backgroundImage: `url('${content.imgUrl}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="text-wrap">
                  <p className="mb-1 fw-bold">{content.title}</p>
                  <span>{content.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4 className="fw-bold my-4">Materi</h4>
        <div className="shadow rounded-4 p-3 mb-5">
          {curriculumContents.map((content, i) => (
            <Fragment key={i}>
              <div>
                <div
                  className="d-flex align-items-center justify-content-between w-100"
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => setCurriculumIdx(i)}
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center me-2"
                      style={{
                        width: '1.25rem',
                        height: '1.25rem',
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={content.type.icon}
                        alt={content.type.value}
                      />
                    </div>
                    <h5 className="fw-bold mb-0">{content.title}</h5>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{
                      width: '1rem',
                      height: '1rem',
                    }}
                  >
                    <img
                      className="img-fluid"
                      src={i === curriculumIdx ? ChevronUp : ChevronDownImage}
                    />
                  </div>
                </div>
                <ol
                  className={`mb-0 d-${i === curriculumIdx ? 'block' : 'none'}`}
                >
                  {content.childrens.map((children, j) => (
                    <li key={j} className="my-3">
                      <div className="d-flex justify-content-between">
                        <span>{children.title}</span>
                        <span>{children.duration}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              {i !== curriculumContents.length - 1 && (
                <hr className="text-gray opacity-75" />
              )}
            </Fragment>
          ))}
        </div>
        <h4 className="fw-bold my-4">Ulasan</h4>
        <div className="card rounded-4 shadow p-3 mb-5">
          {reviewContents.slice(0, sizeShowReview).map((content, i) => (
            <div key={i} className="d-flex">
              <div className="me-2" style={{ width: '15%' }}>
                <img
                  src="https://ui-avatars.com/api/?name=rahman&background=random&length=1"
                  alt={content.name}
                  className="img-fluid rounded-circle"
                />
              </div>
              <div>
                <h6 className="text-persian-green fw-semibold">
                  {content.name}
                </h6>
                <span className="fs-7 mb-3">{content.createdAt}</span>
                <p className="mb-3">{content.review}</p>
                <hr className="text-gray opacity-75" />
              </div>
            </div>
          ))}
          {sizeShowReview < reviewContents.length ? (
            <div className="d-flex">
              <button
                className="btn btn-persian-green mx-auto"
                onClick={() =>
                  setSizeShowReview(
                    sizeShowReview + 3 > reviewContents.length
                      ? reviewContents.length
                      : sizeShowReview + 3
                  )
                }
              >
                <div className="d-flex align-items-center text-lotion">
                  <span className="me-2">Muat lebih banyak</span>
                  <div
                    className="d-flex align-items-center"
                    style={{
                      width: '1rem',
                      height: '1rem',
                    }}
                  >
                    <ChevronDown />
                  </div>
                </div>
              </button>
            </div>
          ) : null}
        </div>
        <div className="placeholder-glow mb-5">
          <div
            className="w-100 placeholder rounded"
            style={{
              height: width >= 992 ? '12rem' : '10rem',
            }}
          />
        </div>
        <h4
          className={`fw-bold text-${width >= 992 ? 'start' : 'center'} my-4`}
        >
          Cek ini juga yuk!
        </h4>
        <div
          className={`position-relative mb-5${
            width >= 992 ? '' : ' overflow-hidden'
          }`}
          style={{ height: '80vh', zIndex: '4' }}
        >
          <div
            className="position-absolute top-50 start-50 translate-middle w-100 d-lg-none d-block"
            style={{ zIndex: '3' }}
          >
            <div className="d-flex justify-content-between w-100">
              <ECourselCarouselButton onClick={() => carouselHandler('left')}>
                <i className="bi bi-chevron-left"></i>
              </ECourselCarouselButton>
              <ECourselCarouselButton onClick={() => carouselHandler('right')}>
                <i className="bi bi-chevron-right"></i>
              </ECourselCarouselButton>
            </div>
          </div>
          <div
            className={`d-flex justify-content-lg-between w-100 h-${
              width >= 992 ? 'auto' : '100'
            }`}
          >
            {ecourseData.map((ecourse, i) => (
              <Fragment key={i}>
                {width >= 992 ? (
                  <ECourseCard margin="mx-0" width="32%" data={ecourse} />
                ) : (
                  <div
                    id={carouselCardId}
                    className={`w-100 px-3 px-lg-0${
                      width >= 992 ? '' : ' position-absolute'
                    }`}
                    style={
                      width >= 992
                        ? {}
                        : {
                            transform: `translateX(${i * 100}%)`,
                            zIndex: '2',
                            transition: 'all 0.5s ease-in-out',
                          }
                    }
                  >
                    <ECourseCard
                      margin={'mx-0'}
                      width={`${width >= 992 ? '30' : '100'}%`}
                      data={ecourse}
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECourseDetail;
