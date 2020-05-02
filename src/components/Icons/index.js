import React from 'react';
import Icon from '@ant-design/icons';

import { ReactComponent as Sun } from '../../assets/flat-icon/sun.svg';

const SunIcon = (props) => <Icon component={Sun} {...props} />;

const ClimateIcon = (props) => {
  const { type } = props;
  switch (type) {
    case 'sun':
      return <SunIcon {...props} />;

    default:
      return <div />;
  }
};

export default ClimateIcon;
