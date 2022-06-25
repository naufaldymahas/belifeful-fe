import { useMemo } from 'react';
import HomeIcon from '@assets/images/home.png';
import ECourseIcon from '@assets/images/e-course.png';
import CartIcon from '@assets/images/cart.png';
import ProfileIcon from '@assets/images/profile.png';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '@contexts/Global.context';

const BottomNavigation = () => {
  const {
    state: { width },
  } = useGlobalContext();

  const bottomNavItems = useMemo(
    () => [
      {
        title: 'Home',
        icon: HomeIcon,
        url: '/',
      },
      {
        title: 'E-Course',
        icon: ECourseIcon,
        url: '/',
      },
      {
        title: 'Keranjang',
        icon: CartIcon,
        url: '/',
      },
      {
        title: 'Profile',
        icon: ProfileIcon,
        url: '/login',
      },
    ],
    []
  );

  return (
    <nav className={`fixed-bottom w-100 px-3 px-md-5 px-xxl-6 pb-3`}>
      <div className="bg-lotion px-4 py-3 rounded-4 shadow">
        <div className="row justify-content-between">
          {bottomNavItems.map((item, i) => (
            <Link
              to={item.url}
              className="col-3 text-center text-decoration-none link-dark-charcoal"
              key={i}
            >
              <div
                style={{ width: width >= 768 ? '25%' : '40%' }}
                className="mx-auto"
              >
                <img className="img-fluid" src={item.icon} alt={item.title} />
              </div>
              <div className="fw-semibold">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
