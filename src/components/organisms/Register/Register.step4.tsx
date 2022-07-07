import { RegisterActionType, useRegisterContext } from '@contexts/Register';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterYellowStep4 = () => {
  return (
    <>
      <div className="px-5 ps-lg-0 text-lincoln-green">
        <h2 className="fw-bolder mb-4">Buat password yang kuat dan aman</h2>
        <span className="fw-bold fs-5">
          Pemilihan password kamu sangat mempengaruhi keamanan data privacy kamu
        </span>
      </div>
      <span className="px-5 ps-lg-0 text-lincoln-green d-lg-block d-none">
        Dengan mendaftar, saya setuju bahwa Belifeful akan menggunakan data saya
        seperti dinyatakan pada{' '}
        <span className="text-persian-green">Kebijakan Privacy</span>{' '}
      </span>
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
    variant: 'gray',
    label: 'Very Weak',
  });

  useEffect(() => {
    if (password) {
      let level = 0;
      let variant = 'gray';
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
          variant = 'coral-red';
          label = 'Weak';
          break;
        case 2:
          variant = 'coral';
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
      <h2 className="fw-bold text-center mb-5">Daftar</h2>
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
        <input
          type="password"
          name="password"
          id="password"
          className={`form-control mb-${password ? '2' : '4'}`}
          placeholder="Password"
          value={password}
          onChange={(e) =>
            dispatch({
              type: RegisterActionType.SET_PASSWORD,
              payload: {
                password: e.target.value,
              },
            })
          }
        />
        {password && (
          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <div
                className={`bg-${passwordLevel.variant} rounded-start`}
                style={{
                  width: '11%',
                  height: '0.5rem',
                }}
              />
              <div
                className={`bg-${passwordLevel.variant}`}
                style={{
                  width: '33%',
                  height: '0.5rem',
                }}
              />
              <div
                className={`bg-${passwordLevel.variant} rounded-end`}
                style={{
                  width: '55%',
                  height: '0.5rem',
                }}
              />
            </div>
            <div className={`d-flex fw-semibold text-${passwordLevel.variant}`}>
              <i className="bi bi-info-circle me-2"></i>
              <span>{passwordLevel.label}</span>
            </div>
          </div>
        )}
        <ol className="bg-anti-flash py-3 px-4 mb-0 rounded-4 fw-semibold">
          {passwordLevelAdvice.map((val, i) => (
            <li className="mx-4" key={i}>
              {val}
            </li>
          ))}
        </ol>
        <button className="w-100 btn btn-gold fw-bold mt-4">Selesai</button>
      </form>
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
    <div className="d-flex justify-content-center align-items-center">
      <h2 className="fw-bold text-center">Pendaftaran Berhasil</h2>
      <i className="bi bi-check-lg text-persian-green fs-1 fw-bolder" />
    </div>
  );
};
