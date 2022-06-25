import { FC, useMemo } from 'react';
import Logo from '@assets/images/logo.png';
import Instagram from '@assets/images/instagram.png';
import Facebook from '@assets/images/facebook.png';
import Twitter from '@assets/images/twitter.png';
import Youtube from '@assets/images/youtube.png';
import { useGlobalContext } from '@contexts/Global.context';

const Footer: FC = () => {
  const {
    state: { width },
  } = useGlobalContext();

  const copyright = useMemo(() => `©${new Date().getFullYear()} Belifeful`, []);
  const footerItems = useMemo(
    () => [
      {
        title: 'belifeful.id',
        desc: 'belifeful adalah platform edukasi parenting, pernikahan, pra-nikah, dan hubungan yang berbasis online.',
      },
      {
        title: 'Tentang',
        list: ['Tentang Kami', 'Bantuan', 'Kontak Kami'],
      },
      {
        title: 'Lainnya',
        list: ['Syarat dan Ketentuan', 'Kebijakan Privasi'],
      },
    ],
    []
  );

  const logoItems = useMemo(
    () => [
      {
        src: Instagram,
        link: 'https://instagram.com/belifeful.id',
        alt: 'instagram',
      },
      {
        src: Youtube,
        link: 'https://www.youtube.com/channel/UCMXqirB5Ml_adGH9xTHwkig',
        alt: 'youtube',
      },
      {
        src: Facebook,
        link: 'https://facebook.com/belifeful.id',
        alt: 'facebook',
      },
      {
        src: Twitter,
        link: 'https://twitter.com/belifeful.id',
        alt: 'twitter',
      },
    ],
    []
  );

  return (
    <>
      <div className="bg-anti-flash">
        <div className="container px-4 px-lg-0 py-4">
          <div className="row mb-3 justify-content-between align-items-sm-center">
            <div className="col-lg-2 col-md-4 col-6 align-self-center">
              <img className="img-fluid" src={Logo} alt="" />
            </div>
            {footerItems.map((content, i) => (
              <div
                key={i}
                className={`col-lg-2 col-6 d-lg-block${i > 0 ? ' d-none' : ''}`}
              >
                <p className="fw-bold mb-1 mb-lg-3 fs-4">{content.title}</p>
                {content.desc && (
                  <span className="fw-semibold">{content.desc}</span>
                )}
                {content.list && (
                  <ul className="list-unstyled">
                    {content.list.map((item, j) => (
                      <li className="mb-3" key={j}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {width < 992 &&
            footerItems.map((content, i) => {
              if (i === 0) {
                return null;
              }

              return (
                <div className="d-flex justify-content-center mb-3" key={i}>
                  {content.list!.map((desc, j) => (
                    <span
                      className={`fs-6 fw-semibold px-2${
                        j !== content.list!.length - 1
                          ? ' border-end border-gray'
                          : ''
                      }`}
                      key={j}
                    >
                      {desc}
                    </span>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
      <div className="bg-gold py-2">
        <div className="container px-4 px-lg-0">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="d-none d-lg-block fw-semibold mb-0">{copyright}</h6>
            <div className="d-flex mx-auto mx-lg-0 justify-content-center justify-content-lg-end">
              {logoItems.map((item, i) => (
                <a
                  target="_blank"
                  href={item.link}
                  className={`col-1${
                    i !== logoItems.length - 1 ? ' me-3' : ''
                  }`}
                  key={i}
                >
                  <img src={item.src} alt={item.alt} className="img-fluid" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex d-lg-none bg-anti-flash d-flex pt-4 pb-9 justify-content-center">
        <h5 className="fw-semibold">{copyright}</h5>
      </div>
    </>
  );
};

export default Footer;
