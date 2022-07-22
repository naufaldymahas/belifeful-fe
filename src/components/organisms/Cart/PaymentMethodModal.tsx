import Modal from '@components/molecules/Modal';
import { Dispatch, FC, SetStateAction, useMemo } from 'react';

const PaymentMethodModal: FC<{
  shown: boolean;
  setShown: Dispatch<SetStateAction<boolean>>;
}> = ({ shown, setShown }) => {
  const methods = useMemo(
    () => [
      {
        title: 'Mandiri Virtual Account',
      },
      {
        title: 'BCA Virtual Account',
      },
      {
        title: 'BNI Virtual Account',
      },
      {
        title: 'BTN Virtual Account',
      },
      {
        title: 'BRIVA',
      },
    ],
    []
  );

  return (
    <Modal setShown={setShown} shown={shown} title='Pilih Metode Pembayaran'>
      <div
        style={{
          maxHeight: '20rem',
          overflow: 'auto',
        }}
      >
        <h5 className='fw-bolder mb-3'>Transfer Virtual Account</h5>
        {methods.map((content, i) => (
          <div
            key={i}
            className={`py-3 d-flex align-items-center justify-content-between${
              i === methods.length - 1 ? '' : ' border-bottom'
            }`}
          >
            <span className='fw-bolder'>{content.title}</span>
            <i className='bi bi-chevron-right fw-bolder pe-3'></i>
          </div>
        ))}
      </div>
    </Modal>
  );
};
export default PaymentMethodModal;
