import { FC } from 'react';

const ECourseContainer: FC = ({ children }) => {
  return (
    <div className="d-flex flex-wrap flex-column flex-lg-row justify-content-center">{children}</div>
  );
};

export default ECourseContainer;
