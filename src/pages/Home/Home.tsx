import DefaultLayout from '@layouts/Default.layout';
import { useGlobalContext } from '@contexts/Global.context';
import RegisterCTA from '@components/organisms/Home/RegisterCTA/RegisterCTA';
import HeroBanner from '@components/organisms/Home/HeroBanner/HeroBanner';
import Testimonial from '@components/organisms/Home/Testimonial/Testimonial';
import SpeakerSection from '@components/organisms/Home/SpeakerSection/SpeakerSection';
import ECourseSection from '@components/organisms/Home/ECourseSection/ECourseSection';

const Home = () => {
  const {
    state: { width },
  } = useGlobalContext();

  return (
    <DefaultLayout>
      <HeroBanner width={width} />
      <ECourseSection />
      <SpeakerSection />
      <Testimonial width={width} />
      <RegisterCTA width={width} />
    </DefaultLayout>
  );
};

export default Home;
