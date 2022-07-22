import Modal from '@components/molecules/Modal';
import { Dispatch, FC, SetStateAction, useMemo } from 'react';

const PromoModal: FC<{
  shown: boolean;
  setShown: Dispatch<SetStateAction<boolean>>;
}> = ({ shown, setShown }) => {
  const promoList = useMemo(
    () => [
      {
        title: 'Promo 1',
      },
      {
        title: 'Promo 2',
      },
      {
        title: 'Promo 3',
      },
      {
        title: 'Promo 4',
      },
      {
        title: 'Promo 5',
      },
    ],
    []
  );

  return (
    <Modal shown={shown} setShown={setShown} title='Pakai Promo'>
      <div
        style={{
          maxHeight: '20rem',
          overflow: 'auto',
        }}
      >
        <div className='d-flex justify-content-between pb-3 border-bottom'>
          <input
            type='text'
            name='promo'
            id='promo'
            className='form-control'
            placeholder='Masukkan kode promo'
            style={{ width: '68%' }}
          />
          <button className='btn btn-anti-flash' style={{ width: '27%' }}>
            Pakai
          </button>
        </div>
        <div className='mt-3'>
          {promoList.map((promo, i) => (
            <div key={i} className='my-4'>
              <span className='fw-bolder'>{promo.title}</span>
            </div>
          ))}
        </div>
        <button className='btn btn-gold fw-bolder w-100'>Pilih Promo</button>
      </div>
    </Modal>
  );
};

export default PromoModal;
