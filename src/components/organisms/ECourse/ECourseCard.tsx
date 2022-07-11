import { FC } from 'react';
import { Link } from 'react-router-dom';
import RatingImage from '@assets/images/rating.png';
import { formatRupiah } from '@utils/utils';

interface ECourseCardProp {
  width: string;
  margin?: string;
  data: {
    thumbnail: string;
    title: string;
    price: {
      normalPrice: number;
      finalPrice: number;
      percentage: number;
    };
    instructor: {
      name: string;
      position: string;
      personalPicture: string;
    };
    averageRating: number;
  };
}

const ECourseCard: FC<ECourseCardProp> = ({ width, data, margin }) => {
  return (
    <div
      className={`shadow rounded-5 ${margin ? margin : 'mx-lg-3'} mb-5`}
      style={{ width }}
    >
      <div
        style={{
          borderTopLeftRadius: '2rem',
          borderTopRightRadius: '2rem',
          height: '13.5rem',
          backgroundImage: `url(${data.thumbnail})`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="p-3">
        <h5
          className="fw-bolder mb-3"
          style={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {data.title}
        </h5>
        <div className="d-flex">
          <div className="w-25">
            <div
              style={{
                width: '3rem',
                height: '3rem',
                backgroundImage: `url(${data.instructor.personalPicture})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>
          <div className="d-flex flex-column">
            <span>{data.instructor.name}</span>
            <span>{data.instructor.position}</span>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div className="w-50">
            <div className="d-flex align-items-center">
              <div className="me-1" style={{ width: '15px' }}>
                <img className="img-fluid" src={RatingImage} alt="" />
              </div>
              <div className="me-1" style={{ width: '15px' }}>
                <img className="img-fluid" src={RatingImage} alt="" />
              </div>
              <div className="me-1" style={{ width: '15px' }}>
                <img className="img-fluid" src={RatingImage} alt="" />
              </div>
              <div className="me-1" style={{ width: '15px' }}>
                <img className="img-fluid" src={RatingImage} alt="" />
              </div>
              <div style={{ width: '15px' }}>
                <img className="img-fluid" src={RatingImage} alt="" />
              </div>
            </div>
            <span>{data.averageRating}/5</span>
          </div>
          <div className="w-50 text-end">
            <p className="mb-0 fs-4 fw-bolder text-coral">
              {formatRupiah(data.price.finalPrice)}
            </p>
            <span className="fw-semibold text-gray text-decoration-line-through">
              {formatRupiah(data.price.normalPrice)}
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
