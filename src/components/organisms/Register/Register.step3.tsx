import { useMemo } from 'react';
import { RegisterActionType, useRegisterContext } from '@contexts/Register';

export const RegisterYellowStep3 = () => {
  return (
    <>
      <div className="px-5 ps-lg-0 text-lincoln-green">
        <h2 className="fw-bolder mb-4">Hi, Kita kenalan yuk</h2>
        <span className="fw-bold fs-5">
          Isi informasi di samping agar kami bisa mengenalmu
        </span>
      </div>
      <span className="px-5 ps-lg-0 text-lincoln-green d-lg-block d-none">
        Pahami <span className="text-persian-green">Kebijakan Privacy</span>{' '}
        kami sebelum mendaftar
      </span>
    </>
  );
};

export const RegisterWhiteStep3 = () => {
  const { dispatch } = useRegisterContext();

  const submitHandler = useMemo(
    () => (e: any) => {
      e.preventDefault();
      if (e.target[0].value && e.target[1].value && e.target[2].value) {
        dispatch({
          type: RegisterActionType.SET_BIODATA,
          payload: {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            handphone: e.target[2].value,
          },
        });

        dispatch({
          type: RegisterActionType.SET_STEP,
          payload: {
            step: '4a',
          },
        });
      }
    },
    []
  );

  return (
    <>
      <h2 className="text-center fw-bolder mb-5">Daftar</h2>
      <form onSubmit={submitHandler}>
        <div className="row mb-4">
          <div className="col-6">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              placeholder="Nama Depan"
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
              placeholder="Nama Belakang"
            />
          </div>
        </div>
        <input
          type="text"
          name="handphone"
          id="handphone"
          className="form-control mb-4"
          placeholder="Nomor Handphone"
        />
        <button className="w-100 btn btn-gold fw-bold">Lanjutkan</button>
      </form>
    </>
  );
};
