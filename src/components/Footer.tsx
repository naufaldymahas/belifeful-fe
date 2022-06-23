import { FC, useMemo } from 'react';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { Flex, FlexItem } from './atoms/Flex';
import { Paragraph } from './atoms/Paragraph';
import { Span } from './atoms/Span';
import Logo from '@assets/images/logo.png';
import Instagram from '@assets/images/instagram.png';
import Facebook from '@assets/images/facebook.png';
import Twitter from '@assets/images/twitter.png';
import Youtube from '@assets/images/youtube.png';
import { FooterList, FooterSection, FooterWrapper } from './Footer.style';
import { useGlobalContext } from '@contexts/Global.context';
import Container from './atoms/Container';

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

  return (
    <FooterWrapper>
      <FooterSection
        paddingX={width <= 992 ? '1.5' : '6.25'}
        variant={ColorThemeEnum.antiFlashWhite}
      >
        <Container className="d-flex">
          <FlexItem
            size={width <= 992 ? '50' : '25'}
            className={width <= 992 ? 'text-center' : undefined}
          >
            <img
              className={`h-auto w-${width <= 1080 ? '75' : '50'}`}
              src={Logo}
            />
          </FlexItem>
          {width <= 992 && (
            <FlexItem size="50">
              <Paragraph weight={FontWeightEnum.bolder} fs="5">
                {footerItems[0].title}
              </Paragraph>
              {footerItems[0].desc}
            </FlexItem>
          )}
          {width > 992 && (
            <FlexItem size="75">
              <Flex justifyContent="space-between">
                {footerItems.map((item, i) => (
                  <FlexItem key={i} size={i === 0 ? '30' : '20'}>
                    <Paragraph weight={FontWeightEnum.bolder} fs="5">
                      {item.title}
                    </Paragraph>
                    {item.desc && (
                      <Span weight={FontWeightEnum.semi}>{item.desc}</Span>
                    )}
                    {item.list &&
                      item.list.map((desc, j) => (
                        <FooterList key={j}>
                          <li
                            style={{
                              marginBottom:
                                item.list.length + 1 === j ? '0' : '0.875rem',
                            }}
                          >
                            <Span weight={FontWeightEnum.semi}>{desc}</Span>
                          </li>
                        </FooterList>
                      ))}
                  </FlexItem>
                ))}
              </Flex>
            </FlexItem>
          )}
        </Container>
      </FooterSection>
      {width <= 992 && (
        <>
          <FooterSection
            paddingX={width <= 992 ? '1.5' : '6.25'}
            variant={ColorThemeEnum.antiFlashWhite}
            paddingTop="0"
          >
            <Flex justifyContent="center" block>
              {footerItems[1].list!.map((desc, i) => (
                <Span
                  key={i}
                  style={{
                    paddingLeft: i === 0 ? '' : '0.5rem',
                    paddingRight:
                      footerItems[1].list!.length === i + 1 ? '' : '0.5rem',
                    borderRight:
                      footerItems[1].list!.length === i + 1
                        ? ''
                        : '1px solid gray',
                  }}
                >
                  {desc}
                </Span>
              ))}
            </Flex>
          </FooterSection>
          <FooterSection
            paddingX={width <= 992 ? '1.5' : '6.25'}
            variant={ColorThemeEnum.antiFlashWhite}
            paddingTop="0"
          >
            <Flex justifyContent="center" block>
              {footerItems[2].list!.map((desc, i) => (
                <Span
                  key={i}
                  style={{
                    paddingLeft: i === 0 ? '' : '0.5rem',
                    paddingRight:
                      footerItems[2].list!.length === i + 1 ? '' : '0.5rem',
                    borderRight:
                      footerItems[2].list!.length === i + 1
                        ? ''
                        : '1px solid gray',
                  }}
                >
                  {desc}
                </Span>
              ))}
            </Flex>
          </FooterSection>
        </>
      )}
      <FooterSection
        variant={ColorThemeEnum.gold}
        paddingX={width <= 992 ? '1.5' : '6.25'}
      >
        <div className="w-100">
          <Container className="d-flex align-items-center">
            {width > 992 && (
              <FlexItem>
                <Span weight={FontWeightEnum.semi}>{copyright}</Span>
              </FlexItem>
            )}
            <FlexItem>
              <Flex justifyContent={width <= 992 ? 'space-evenly' : 'end'}>
                <a
                  target="_blank"
                  href="https://www.instagram.com/belifeful.id"
                  style={{ width: '35px', height: '35px' }}
                >
                  <img className={`w-100 h-auto`} src={Instagram} />
                </a>
                <div
                  style={{ width: '35px', height: '35px' }}
                  className={`ml-${width > 992 ? '3' : '0'}`}
                >
                  <img className={`w-100 h-auto`} src={Youtube} />
                </div>
                <div
                  style={{ width: '35px', height: '35px' }}
                  className={`ml-${width > 992 ? '3' : '0'}`}
                >
                  <img className={`w-100 h-auto`} src={Facebook} />
                </div>
                <div
                  style={{ width: '35px', height: '35px' }}
                  className={`ml-${width > 992 ? '3' : '0'}`}
                >
                  <img className={`w-100 h-auto`} src={Twitter} />
                </div>
              </Flex>
            </FlexItem>
          </Container>
        </div>
      </FooterSection>
      {width <= 992 && (
        <FooterSection
          variant={ColorThemeEnum.antiFlashWhite}
          paddingX={width <= 992 ? '1.5' : '6.25'}
          justifyContent="center"
          style={{ paddingBottom: '7.5rem' }}
        >
          <Span weight={FontWeightEnum.semi}>{copyright}</Span>
        </FooterSection>
      )}
    </FooterWrapper>
  );
};

export default Footer;
