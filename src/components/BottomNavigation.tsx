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
        <div className="d-flex justify-content-between">
          {bottomNavItems.map((item, i) => (
            <Link
              to={item.url}
              style={{ width: 100 / bottomNavItems.length + '%' }}
              className="text-center text-decoration-none link-dark-charcoal"
              key={i}
            >
              <div
                style={{ width: width >= 768 ? '25%' : '30%' }}
                className="mx-auto"
              >
                <img className="img-fluid" src={item.icon} alt={item.title} />
              </div>
              <span className="fw-semibold fs-6">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
