import { Dispatch, FC, SetStateAction } from 'react';

const BottomMobileSheet: FC<{
  title: string;
  shown: boolean;
  setShown: Dispatch<SetStateAction<boolean>>;
}> = ({ children, title, shown, setShown }) => {
  const closeHandler = (e: any) => {
    if (e.target.classList.contains('bg-dark-charcoal')) {
      setShown(false);
    }
  };

  return (
    <div
      className={`position-fixed top-0 w-100 h-100 d-${
        shown ? 'block' : 'none'
      }`}
      style={{ zIndex: '1031' }}
      onClick={closeHandler}
    >
      <div className="bg-dark-charcoal opacity-75 position-absolute w-100 h-100" />
      <div
        className="position-fixed w-100 bottom-0 bg-lotion p-3"
        style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
      >
        <div className="mb-3">
          <div className="d-flex align-items-center pb-1">
            <i
              className="bi bi-x-circle fw-bolder fs-4 me-2"
              onClick={() => setShown(false)}
            ></i>
            <h4 className="my-auto fw-bolder">{title}</h4>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomMobileSheet;
