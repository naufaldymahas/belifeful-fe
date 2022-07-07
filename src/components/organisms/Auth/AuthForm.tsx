import { FC, FormEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '@contexts/Global.context';

type AuthFormProps = {
  authType: 'register' | 'login' | 'login_password';
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

const AuthForm: FC<AuthFormProps> = ({ authType, children, onSubmit }) => {
  return (
    <>
      <h2 className="text-center fw-bolder mb-5">
        {authType === 'register' ? 'Daftar' : 'Masuk'}
      </h2>
      <form className="mb-3" onSubmit={onSubmit}>
        {authType !== 'login_password' ? (
          <input
            className="form-control mb-3"
            placeholder="Email Address"
            type="email"
            name="email"
            id="email"
          />
        ) : (
          <>
            <input
              className="form-control mb-3"
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
            <div className="mb-3 d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="remember"
                  name="remember"
                />
                <label
                  className="form-check-label fw-semibold"
                  htmlFor="remember"
                >
                  Ingat Saya
                </label>
              </div>
              <Link
                className="link-coral-red text-decoration-none fw-semibold"
                to={'#'}
              >
                Lupa Password?
              </Link>
            </div>
          </>
        )}
        <button className="btn btn-gold fw-bolder w-100">Lanjutkan</button>
      </form>
      <div className="mb-3 text-center text-gray d-flex justify-content-between align-items-center">
        <hr className="opacity-75 col-3" />
        <span className="col-6">
          atau {authType === 'register' ? 'daftar' : 'masuk'} dengan
        </span>
        <hr className="opacity-75 col-3" />
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-gray"
          style={{
            width: '49%',
          }}
        >
          Google
        </button>
        <button
          className="btn btn-outline-gray"
          style={{
            width: '49%',
          }}
        >
          Facebook
        </button>
      </div>
      {children}
    </>
  );
};

export default AuthForm;
