import { useGlobalContext } from '@contexts/Global.context';
import { ECourselCarouselButton } from '@pages/ECourse/ECourseDetail.style';
import { FC, Fragment, useCallback, useMemo, useState } from 'react';
import ECourseCard from './ECourse/ECourseCard';

interface SimiliarECourseProps {
  ecourseData: {
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
  }[];
}

const SimiliarECourse: FC<SimiliarECourseProps> = ({ ecourseData }) => {
  const carouselCardId = useMemo(() => 'carousel-card', []);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const {
    state: { width },
  } = useGlobalContext();

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

  return (
    <>
      <h4 className={`fw-bold text-${width >= 992 ? 'start' : 'center'} my-4`}>
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
            {carouselIdx > 0 ? (
              <ECourselCarouselButton onClick={() => carouselHandler('left')}>
                <i className="bi bi-chevron-left"></i>
              </ECourselCarouselButton>
            ) : (
              <div />
            )}
            {carouselIdx < ecourseData.length-1 ? (
              <ECourselCarouselButton onClick={() => carouselHandler('right')}>
                <i className="bi bi-chevron-right"></i>
              </ECourselCarouselButton>
            ) : (
              <div />
            )}
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
    </>
  );
};

export default SimiliarECourse;
