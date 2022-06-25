import Container from '@components/atoms/Container';
import ECourseCard from './ECourseCard';

const ECourseSection = () => {
  return (
    <Container>
      <h2 className="text-center fw-bolder text-lincoln-green">
        Edukasi Terbaik mulai dari
      </h2>
      <h2 className="text-center fw-bolder text-coral mb-5">80rb saja!</h2>
      <div className="d-flex flex-wrap justify-content-center">
        <ECourseCard width="30%" />
        <ECourseCard width="30%" />
        <ECourseCard width="30%" />
        <ECourseCard width="30%" />
        <ECourseCard width="30%" />
        <ECourseCard width="30%" />
        <ECourseCard width="30%" />
        <ECourseCard width="30%" />
        <ECourseCard width="30%" />
      </div>
    </Container>
  );
};

export default ECourseSection;
