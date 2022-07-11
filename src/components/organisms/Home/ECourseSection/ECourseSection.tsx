import ECourseCard from '@components/organisms/ECourse/ECourseCard';
import ECourseContainer from '@components/organisms/ECourse/ECourseContainer';
import { useGlobalContext } from '@contexts/Global.context';
import { useMemo } from 'react';

const ECourseSection = () => {
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

  const {
    state: { width },
  } = useGlobalContext();

  return (
    <div className="container pt-7 pt-lg-10 pt-xl-6 px-4 px-lg-0 mb-5">
      <h1 className="text-center fw-bolder text-lincoln-green">
        Edukasi Terbaik mulai dari
      </h1>
      <h1 className="text-center fw-bolder text-coral mb-5">80rb saja!</h1>
      <ECourseContainer>
        {ecourseData.map((ecourse, i) => (
          <ECourseCard
            key={i}
            width={`${width >= 992 ? '30' : '100'}%`}
            data={ecourse}
          />
        ))}
      </ECourseContainer>
    </div>
  );
};

export default ECourseSection;
