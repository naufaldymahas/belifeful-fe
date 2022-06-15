import Card from '@components/atoms/Card';
import { Flex } from '@components/atoms/Flex';
import { Paragraph } from '@components/atoms/Paragraph';
import { Span } from '@components/atoms/Span';
import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import { RegisterCardStep2 } from './Register.style';
import MailIcon from '@assets/images/mail_icon.png';
import { RegisterOTPForm, RegisterOTPInput } from './Register.step2.style';
import { RegisterActionType, useRegisterContext } from '@contexts/Register';
import { useEffect, useMemo, useState } from 'react';
import CorrectIcon from '@assets/images/correct_icon.png';
import WrongIcon from '@assets/images/wrong_icon.png';

export const RegisterYellowStep2 = () => {
  return (
    <>
      <div style={{ paddingRight: '4.125rem' }}>
        <Paragraph
          fs="4"
          weight={FontWeightEnum.bolder}
          variant={ColorThemeEnum.lincolnGreen}
        >
          Verifikasi E-mail demi keamanan akun kamu
        </Paragraph>
        <Paragraph
          fs="6"
          weight={FontWeightEnum.bold}
          variant={ColorThemeEnum.lincolnGreen}
        >
          Pastikan email yang kamu gunakan aktif
        </Paragraph>
      </div>
      <Span weight={FontWeightEnum.semi} variant={ColorThemeEnum.lincolnGreen}>
        Pahami{' '}
        <Span
          weight={FontWeightEnum.semi}
          variant={ColorThemeEnum.persianGreen}
        >
          Kebijakan Privasi
        </Span>{' '}
        kami sebelum mendaftar
      </Span>
    </>
  );
};

export const RegisterWhiteStep2a = () => {
  const { state, dispatch } = useRegisterContext();

  return (
    <>
      <Card style={{ marginBottom: '3.25rem' }}>
        <Paragraph
          fs="5"
          weight={FontWeightEnum.bold}
          style={{ marginBottom: '1.375rem' }}
        >
          Pilih metode verifikasi
        </Paragraph>
        <RegisterCardStep2
          onClick={() => {
            dispatch({
              type: RegisterActionType.SET_STEP,
              payload: { step: '2b' },
            });
          }}
        >
          <Flex flexDirection="column">
            <Span weight={FontWeightEnum.bold}>E-mail ke</Span>
            <Span weight={FontWeightEnum.semi}>{state.email}</Span>
          </Flex>
          <img src={MailIcon} />
        </RegisterCardStep2>
      </Card>
      <Span
        weight={FontWeightEnum.bold}
        variant={ColorThemeEnum.persianGreen}
        className="pointer"
        onClick={() =>
          dispatch({
            type: RegisterActionType.SET_STEP,
            payload: { step: '1' },
          })
        }
      >
        Ubah E-mail saya
      </Span>
    </>
  );
};

export const RegisterWhiteStep2b = () => {
  const { state, dispatch } = useRegisterContext();
  const [count, setCount] = useState(30);
  const [isFailed, setIsFailed] = useState(0);

  const handleKeyDown = useMemo(
    () => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        !(e.key.match(/[0-9]/g) || e.key === 'Delete' || e.key === 'Backspace')
      ) {
        e.preventDefault();
        return;
      }
    },
    []
  );

  const handleKeyUp = useMemo(
    () => (e: any) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        const next = e.target.tabIndex - 2;
        if (next > -1) {
          e.target.form.elements[next].focus();
        }
      } else if (e.key.match(/[0-9]/g)) {
        if (e.target.tabIndex < 6) {
          e.target.form.elements[e.target.tabIndex].focus();
        }
      }
    },
    []
  );

  const changeHandler = useMemo(
    () => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = [...state.otp];
      newValue[e.target.tabIndex - 1] = e.target.value;
      dispatch({
        type: RegisterActionType.SET_OTP,
        payload: {
          otp: newValue,
        },
      });
    },
    [state.otp]
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (count > 0) {
      timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    let isDone = true;
    for (const otp of state.otp) {
      if (!otp) {
        isDone = false;
        break;
      }
    }

    if (isDone) {
      dispatch({
        type: RegisterActionType.SET_STEP,
        payload: {
          step: '3',
        },
      });
    }
  }, [state.otp]);

  if (!state.email) {
    dispatch({
      type: RegisterActionType.SET_STEP,
      payload: { step: '1' },
    });
    return null;
  }

  return (
    <>
      <Card style={{ marginBottom: '3.25rem' }}>
        <Paragraph
          fs="5"
          weight={FontWeightEnum.bold}
          style={{ marginBottom: '1.375rem' }}
        >
          Masukan Kode Verifikasi
        </Paragraph>
        <Paragraph
          variant={ColorThemeEnum.gray}
          center
          weight={FontWeightEnum.bold}
        >
          Kode verifikasi telah dikirimkan melalu email ke {state.email}
        </Paragraph>
        <RegisterOTPForm>
          <RegisterOTPInput
            maxLength={1}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            tabIndex={1}
            isFailed={isFailed === 2}
            value={state.otp[0]}
            onChange={changeHandler}
          />
          <RegisterOTPInput
            maxLength={1}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            tabIndex={2}
            isFailed={isFailed === 2}
            value={state.otp[1]}
            onChange={changeHandler}
          />
          <RegisterOTPInput
            maxLength={1}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            tabIndex={3}
            isFailed={isFailed === 2}
            value={state.otp[2]}
            onChange={changeHandler}
          />
          <RegisterOTPInput
            maxLength={1}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            tabIndex={4}
            isFailed={isFailed === 2}
            value={state.otp[3]}
            onChange={changeHandler}
          />
          <RegisterOTPInput
            maxLength={1}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            tabIndex={5}
            isFailed={isFailed === 2}
            value={state.otp[4]}
            onChange={changeHandler}
          />
          <RegisterOTPInput
            maxLength={1}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            tabIndex={6}
            isFailed={isFailed === 2}
            value={state.otp[5]}
            onChange={changeHandler}
          />
        </RegisterOTPForm>
        {isFailed > 0 && (
          <Flex
            block
            justifyContent="center"
            style={{ marginBottom: '1.375rem' }}
          >
            <Span weight={FontWeightEnum.bold} className="mr-1">
              {isFailed === 1 ? 'Verifikasi berhasil' : 'Kode OTP salah'}
            </Span>
            <img src={isFailed === 1 ? CorrectIcon : WrongIcon} />
          </Flex>
        )}
        {count > 0 ? (
          <Span
            variant={ColorThemeEnum.gray}
            weight={FontWeightEnum.bold}
            center
          >
            Mohon tunggu dalam{' '}
            <Span variant={ColorThemeEnum.darkCharcoal}>{count} detik</Span>{' '}
            untuk kirim ulang
          </Span>
        ) : (
          <>
            <Paragraph
              className="mb-1 pointer"
              weight={FontWeightEnum.bold}
              variant={ColorThemeEnum.persianGreen}
            >
              Kirim Ulang
            </Paragraph>
            <Paragraph
              weight={FontWeightEnum.bold}
              variant={ColorThemeEnum.gray}
              className="pointer"
              onClick={() => {
                dispatch({
                  type: RegisterActionType.SET_STEP,
                  payload: { step: '1' },
                });
              }}
            >
              Ubah E-mail saya
            </Paragraph>
          </>
        )}
      </Card>
    </>
  );
};
