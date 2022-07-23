import { FC } from 'react';

const Container: FC<{ pt?: number }> = ({ children, pt = 7 }) => (
  <div className={`container pt-${pt} pt-lg-10 pt-xl-6 px-4 px-lg-0`}>
    {children}
  </div>
);

export default Container;
