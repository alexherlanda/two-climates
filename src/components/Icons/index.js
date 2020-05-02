import React from 'react';
import Icon from '@ant-design/icons';

import { ReactComponent as Sun } from '../../assets/flat-icon/sun.svg';
import { ReactComponent as Ubrella } from '../../assets/flat-icon/umbrella.svg';
import { ReactComponent as Humidity } from '../../assets/flat-icon/humidity.svg';
import { ReactComponent as Dawn } from '../../assets/flat-icon/dawn.svg';
import { ReactComponent as Sunset } from '../../assets/flat-icon/sunset.svg';
import { ReactComponent as Sunny } from '../../assets/flat-icon/sunny.svg';

const SunIcon = (props) => <Icon component={Sun} {...props} />;
const UbrellaIcon = (props) => <Icon component={Ubrella} {...props} />;
const HumidityIcon = (props) => <Icon component={Humidity} {...props} />;
const DawnIcon = (props) => <Icon component={Dawn} {...props} />;
const SunsetIcon = (props) => <Icon component={Sunset} {...props} />;
const SunnyIcon = (props) => <Icon component={Sunny} {...props} />;

const ClimateIcon = (props) => {
  const { type } = props;
  switch (type) {
    case 'sun':
      return <SunIcon {...props} />;
    case 'ubrella':
      return (
        //Freepik
        <UbrellaIcon style={{ fontSize: '30px', color: '#434343' }} {...props} />
      );

    case 'humidity':
      return (
        //Good Ware
        <HumidityIcon style={{ fontSize: '30px', color: '#434343' }} {...props} />
      );

    case 'dawn':
      return (
        //Freepik
        <DawnIcon style={{ fontSize: '36px', color: '#434343' }} {...props} />
      );

    case 'sunset':
      return (
        //Freepik
        <SunsetIcon style={{ fontSize: '36px', color: '#434343' }} {...props} />
      );

    case 'sunny':
      return (
        //Kiranshastry
        <SunnyIcon style={{ fontSize: '75px', color: '#434343' }} {...props} />
      );

    case 'logo':
      return (
        //Kiranshastry
        <SunnyIcon style={{ fontSize: '35px', color: 'white' }} {...props} />
      );

    default:
      return <div />;
  }
};

export default ClimateIcon;
