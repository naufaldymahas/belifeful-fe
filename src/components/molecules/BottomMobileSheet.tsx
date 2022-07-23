import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';

const BottomMobileSheet: FC<{
  title: string;
  shown: boolean;
  setShown: Dispatch<SetStateAction<boolean>>;
}> = ({ children, title, shown, setShown }) => {
  const modalRef: any = useRef(null);
  const closeHandler = (e: any) => {
    if (e.target.classList.contains('bg-dark-charcoal')) {
      setShown(false);
    }
  };

  useEffect(() => {
    if (shown) {
      modalRef.current.style.bottom = '0';
      modalRef.current.style.opacity = 1;
    }

    return () => {
      modalRef.current.style.bottom = '-10vh';
      modalRef.current.style.opacity = 0;
    };
  }, [shown]);

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
        ref={modalRef}
        className="position-fixed w-100 bg-lotion p-3"
        style={{
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          bottom: '-10vh',
          opacity: 0,
          transition: 'bottom 0.3s, opacity 0.5s'
        }}
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
