import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import Loader from 'react-loader-spinner';

const LoaderSpinner: FC = (): RE => {
  return <Loader type="Circles" />;
};

export default LoaderSpinner;
