import MailIcon from '@assets/images/mail_icon.png';
import { RegisterActionType, useRegisterContext } from '@contexts/Register';
import { useEffect, useMemo, useState } from 'react';
import { useGlobalContext } from '@contexts/Global.context';

export const RegisterYellowStep2 = () => {
  return (
    <>
      <div className="px-5 ps-lg-0 text-lincoln-green">
        <h2 className="fw-bolder mb-4">
          Verifikasi E-mail demi keamanan akun kamu
        </h2>
        <span className="fw-bold fs-5">
          Pastikan email atau nomor telepon yang digunakan aktif
        </span>
      </div>
      <span className="px-5 ps-lg-0 text-lincoln-green d-lg-block d-none">
        Pahami <span className="text-persian-green">Kebijakan Privacy</span>{' '}
        kami sebelum mendaftar
      </span>
    </>
  );
};

export const RegisterWhiteStep2a = () => {
  const { state, dispatch } = useRegisterContext();
  return (
    <>
      <h2 className="text-center fw-bolder mb-5">Pilih metode verifikasi</h2>
      <div
        className="shadow p-3 d-flex rounded-4 justify-content-between align-items-center"
        style={{
          cursor: 'pointer',
        }}
        onClick={() => {
          dispatch({
            type: RegisterActionType.SET_STEP,
            payload: {
              step: '2b',
            },
          });
        }}
      >
        <div>
          <p className="mb-0 fw-semibold">E-mail ke</p>
          <span>{state.email}</span>
        </div>
        <div
          style={{ height: '1.25rem', width: '1.25rem' }}
          className="d-flex align-items-center"
        >
          <img src={MailIcon} alt="mail" className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export const RegisterWhiteStep2b = () => {
  const {
    state: { width },
  } = useGlobalContext();
  const { state, dispatch } = useRegisterContext();
  const [isCorrect, setIsCorrect] = useState(-1);
  const [count, setCount] = useState(30);

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

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (count > 0) {
      timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const otp = state.otp.join('');
    if (otp.length === 6) {
      if (otp === '123456') {
        setIsCorrect(1);
        timer = setTimeout(() => {
          dispatch({
            type: RegisterActionType.SET_STEP,
            payload: {
              step: '3',
            },
          });
        }, 1000);
      } else {
        setIsCorrect(0);
      }
    }

    return () => clearTimeout(timer);
  }, [state.otp]);

  return (
    <div className="text-center">
      <h3 className="fw-bolder mb-3">Masukan Kode Verifikasi</h3>
      <p className="text-gray fw-bold">
        Kode verifikasi telah dikirimkan melalu email ke {state.email}
      </p>
      <form className="mb-4 d-flex justify-content-evenly">
        {state.otp.map((val, i) => (
          <input
            key={i}
            className="text-center border border-3 border-start-0 border-top-0 border-end-0 border-gold bg-lotion fs-3 fw-bold"
            type="text"
            pattern="\d*"
            maxLength={1}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            style={{
              width: width >= 992 ? '7%' : '12%',
              borderRadius: '0',
            }}
            tabIndex={i + 1}
            value={val}
            disabled={isCorrect === 1}
            onChange={(e) => {
              const newOTP = [...state.otp];
              newOTP[i] = e.target.value;
              dispatch({
                type: RegisterActionType.SET_OTP,
                payload: {
                  otp: newOTP,
                },
              });
            }}
          />
        ))}
      </form>
      {isCorrect > -1 && (
        <div className="mb-4 d-flex justify-content-center align-items-center">
          <span className="fw-bold me-2">
            {isCorrect ? 'Verifikasi Berhasil' : 'Kode OTP Salah'}
          </span>
          <i
            className={`bi bi-${
              isCorrect ? 'check-lg' : 'x-circle'
            } fw-bolder text-${isCorrect ? 'persian-green' : 'coral-red'} fs-5`}
          ></i>
        </div>
      )}
      {count ? (
        <span className="fw-bold text-gray">
          Mohon tunggu dalam{' '}
          <span className="text-dark-charcoal">{count} detik</span> untuk kirim
          ulang
        </span>
      ) : (
        <>
          <p
            className="fw-bold mb-1 text-persian-green"
            style={{ cursor: 'pointer' }}
            onClick={() => setCount(30)}
          >
            Kirim Ulang
          </p>
          <span
            onClick={() => {
              dispatch({
                type: RegisterActionType.SET_OTP,
                payload: {
                  step: '1',
                },
              });
            }}
            style={{ cursor: 'pointer' }}
            className="fw-bold text-gray"
          >
            Ubah E-mail saya
          </span>
        </>
      )}
    </div>
  );
};
