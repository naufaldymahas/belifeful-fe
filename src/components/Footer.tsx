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

interface FooterProps {
  width: number;
}

const Footer: FC<FooterProps> = ({ width }) => {
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
        paddingX={width <= 600 ? '1.5' : '6.25'}
        variant={ColorThemeEnum.antiFlashWhite}
      >
        <FlexItem
          size={width <= 992 ? '50' : '25'}
          className={width <= 600 ? 'text-center' : undefined}
        >
          <img
            className={`h-auto w-${width <= 1080 ? '75' : '50'}`}
            src={Logo}
          />
        </FlexItem>
        {width <= 600 && (
          <FlexItem size="50">
            <Paragraph weight={FontWeightEnum.bolder} fs="5">
              {footerItems[0].title}
            </Paragraph>
            {footerItems[0].desc}
          </FlexItem>
        )}
        {width > 600 && (
          <FlexItem size="75">
            <Flex justifyContent="space-between">
              {footerItems.map((item, i) => (
                <FlexItem key={i} size={i === 0 ? '30' : '20'}>
                  <Paragraph weight={FontWeightEnum.bolder} fs="5">
                    {item.title}
                  </Paragraph>
                  {item.desc && <Span>{item.desc}</Span>}
                  {item.list &&
                    item.list.map((desc, j) => (
                      <FooterList key={j}>
                        <li
                          style={{
                            marginBottom:
                              item.list.length + 1 === j ? '0' : '0.875rem',
                          }}
                        >
                          {desc}
                        </li>
                      </FooterList>
                    ))}
                </FlexItem>
              ))}
            </Flex>
          </FlexItem>
        )}
      </FooterSection>
      {width <= 600 && (
        <>
          <FooterSection
            paddingX={width <= 600 ? '1.5' : '6.25'}
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
            paddingX={width <= 600 ? '1.5' : '6.25'}
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
        alignItems="center"
        variant={ColorThemeEnum.gold}
        paddingX={width <= 600 ? '1.5' : '6.25'}
      >
        {width <= 600 && (
          <FlexItem>
            <Span weight={FontWeightEnum.semi}>{copyright}</Span>
          </FlexItem>
        )}

        <FlexItem>
          <Flex justifyContent={width <= 600 ? 'space-evenly' : 'end'}>
            <img src={Instagram} />
            <img className={width <= 600 ? 'ml-3' : 'ml-0'} src={Youtube} />
            <img className={width <= 600 ? 'ml-3' : 'ml-0'} src={Facebook} />
            <img className={width <= 600 ? 'ml-3' : 'ml-0'} src={Twitter} />
          </Flex>
        </FlexItem>
      </FooterSection>
      {width <= 600 && (
        <FooterSection
          variant={ColorThemeEnum.antiFlashWhite}
          paddingX={width <= 600 ? '1.5' : '6.25'}
          justifyContent="center"
          style={{ paddingBottom: '7.5rem' }}
        >
          <Span>{copyright}</Span>
        </FooterSection>
      )}
    </FooterWrapper>
  );
};

export default Footer;
