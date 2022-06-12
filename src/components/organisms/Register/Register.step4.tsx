import Card from '@components/atoms/Card';
import { Flex } from '@components/atoms/Flex';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';
import {
  BarPasswordLevel,
  PasswordLevelAdviceWrapper,
} from './Register.step4.style';
import { RegisterActionType, useRegisterContext } from '@contexts/Register';
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const RegisterYellowStep4 = () => {
  return (
    <>
      <div style={{ paddingRight: '4.125rem' }}>
        <Paragraph
          fs='4'
          weight={FontWeightEnum.bolder}
          variant={ColorThemeEnum.lincolnGreen}
        >
          Buat password yang kuat dan aman
        </Paragraph>
        <Paragraph
          fs='6'
          weight={FontWeightEnum.bold}
          variant={ColorThemeEnum.lincolnGreen}
        >
          Pemilihan password kamu sangat mempengaruhi keamanan data privasi kamu
        </Paragraph>
      </div>
      <div style={{ paddingRight: '4.125rem' }}>
        <Span
          weight={FontWeightEnum.semi}
          variant={ColorThemeEnum.lincolnGreen}
        >
          Dengan mendaftar, saya setuju bahwa Belifeful akan menggunakan data
          saya seperti dinyatakan pada{' '}
          <Span
            weight={FontWeightEnum.semi}
            variant={ColorThemeEnum.persianGreen}
          >
            Kebijakan Privasi
          </Span>
        </Span>
      </div>
    </>
  );
};

export const RegisterWhiteStep4a = () => {
  const {
    state: { password },
    dispatch,
  } = useRegisterContext();
  const [passwordLevel, setPasswordLevel] = useState({
    level: 0,
    variant: ColorThemeEnum.gray,
    label: 'Very Weak',
  });

  useEffect(() => {
    if (password) {
      let level = 0;
      let variant = ColorThemeEnum.gray;
      let label = 'Very Weak';
      if (password.length >= 8) {
        level++;
      }

      const lower = password.match(/[a-z]/g);
      const upper = password.match(/[A-Z]/g);
      const number = password.match(/[0-9]/g);
      // const symbol = password.match(/\!\@\#\$\^\&\*/g);

      if (lower && upper && number) {
        level++;
      }

      switch (level) {
        case 1:
          variant = ColorThemeEnum.coralRed;
          label = 'Weak';
          break;
        case 2:
          variant = ColorThemeEnum.coral;
          label = 'Good';
          break;
        default:
          break;
      }

      setPasswordLevel({
        level,
        variant,
        label,
      });
    }
  }, [password]);

  const passwordLevelAdvice = useMemo(
    () => [
      'Lebih dari 8 karakter',
      'Gunakan gabungan angka, huruf kecil dan huruf besar',
    ],
    []
  );

  return (
    <>
      <Card style={{ marginBottom: '3.25rem' }}>
        <Paragraph
          fs='5'
          weight={FontWeightEnum.bold}
          style={{ marginBottom: '1.375rem' }}
        >
          Daftar
        </Paragraph>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: RegisterActionType.SET_STEP,
              payload: {
                step: '4b',
              },
            });
          }}
        >
          <Input
            placeholder='Password'
            type='password'
            style={{ marginBottom: '0.5rem' }}
            value={password}
            onChange={(e) => {
              dispatch({
                type: RegisterActionType.SET_PASSWORD,
                payload: {
                  password: e.target.value,
                },
              });
            }}
          />
          {password && (
            <>
              <Flex
                justifyContent='space-between'
                style={{ marginBottom: '0.5rem' }}
              >
                <BarPasswordLevel
                  size='39'
                  style={{ borderRadius: '2px 0px 0px 2px' }}
                  variant={
                    passwordLevel.level >= 1
                      ? passwordLevel.variant
                      : ColorThemeEnum.gray
                  }
                />
                <BarPasswordLevel
                  size='60'
                  style={{ borderRadius: '0px 2px 2px 0px' }}
                  variant={
                    passwordLevel.level >= 2
                      ? passwordLevel.variant
                      : ColorThemeEnum.gray
                  }
                />
                {/* <BarPasswordLevel
                  size='48'
                  style={{ borderRadius: '0px 2px 2px 0px' }}
                  variant={
                    passwordLevel.level >= 3
                      ? passwordLevel.variant
                      : ColorThemeEnum.gray
                  }
                /> */}
              </Flex>
              <Flex style={{ alignItems: 'center' }}>
                <svg
                  width='17'
                  height='17'
                  viewBox='0 0 17 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_4112_8518)'>
                    <path
                      d='M8.55729 14.741C12.2392 14.741 15.224 11.7563 15.224 8.07438C15.224 4.39248 12.2392 1.40771 8.55729 1.40771C4.87539 1.40771 1.89062 4.39248 1.89062 8.07438C1.89062 11.7563 4.87539 14.741 8.55729 14.741Z'
                      stroke={
                        passwordLevel.level === 1
                          ? '#FF3838'
                          : passwordLevel.level === 2
                          ? '#FF7755'
                          : // : passwordLevel === 3
                            // ? '#0BB68C'
                            '#BABABA'
                      }
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8.55859 10.7409V8.07422'
                      stroke={
                        passwordLevel.level === 1
                          ? '#FF3838'
                          : passwordLevel.level === 2
                          ? '#FF7755'
                          : // : passwordLevel === 3
                            // ? '#0BB68C'
                            '#BABABA'
                      }
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8.55859 5.40771H8.56526'
                      stroke={
                        passwordLevel.level === 1
                          ? '#FF3838'
                          : passwordLevel.level === 2
                          ? '#FF7755'
                          : // : passwordLevel === 3
                            // ? '#0BB68C'
                            '#BABABA'
                      }
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_4112_8518'>
                      <rect
                        width='16'
                        height='16'
                        fill='white'
                        transform='translate(0.558594 0.0742188)'
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Span
                  style={{ marginLeft: '0.2rem' }}
                  weight={FontWeightEnum.bold}
                  variant={passwordLevel.variant}
                >
                  {passwordLevel.label}
                </Span>
              </Flex>
            </>
          )}
          <PasswordLevelAdviceWrapper style={{ marginTop: '0.5rem' }}>
            <ol style={{ paddingLeft: '1.5rem' }}>
              {passwordLevelAdvice.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ol>
          </PasswordLevelAdviceWrapper>
          <Button
            variant={ColorThemeEnum.gold}
            weight='800'
            block
            style={{ marginTop: '0.75rem' }}
          >
            Selesai
          </Button>
        </form>
      </Card>
    </>
  );
};

export const RegisterWhiteStep4b = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (count > 0) {
      timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      navigate('/');
    }

    return () => clearTimeout(timer);
  });

  return (
    <>
      <Card style={{ marginBottom: '3.25rem' }}>
        <Flex block style={{ alignItems: 'center' }} justifyContent='center'>
          <Span fs='5' weight={FontWeightEnum.bold}>
            Pendaftaran Berhasil
          </Span>
          <img
            style={{ width: 'auto', height: '20px', marginLeft: '1rem' }}
            src='/src/assets/images/correct_icon.png'
          />
        </Flex>
      </Card>
      <Paragraph
        weight={FontWeightEnum.bold}
        variant={ColorThemeEnum.gray}
        style={{ marginBottom: '0.5rem' }}
      >
        Kamu akan dialihkan ke halaman Homepage
      </Paragraph>
      <Paragraph weight={FontWeightEnum.bold} variant={ColorThemeEnum.gray}>
        Jika halaman tidak berubah klik <Link to='/'>redirect</Link>
      </Paragraph>
    </>
  );
};
