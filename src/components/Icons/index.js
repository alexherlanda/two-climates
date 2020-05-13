import React from 'react';
import Icon from '@ant-design/icons';

import { ReactComponent as Ubrella } from '../../assets/flat-icon/umbrella.svg';
import { ReactComponent as Humidity } from '../../assets/flat-icon/humidity.svg';
import { ReactComponent as Dawn } from '../../assets/flat-icon/dawn.svg';
import { ReactComponent as Sunset } from '../../assets/flat-icon/sunset.svg';

import { ReactComponent as Icon01d } from '../../assets/flat-icon/01d.svg';
import { ReactComponent as Icon01n } from '../../assets/flat-icon/01n.svg';
import { ReactComponent as Icon02d } from '../../assets/flat-icon/02d.svg';
import { ReactComponent as Icon02n } from '../../assets/flat-icon/02n.svg';
import { ReactComponent as Icon03d } from '../../assets/flat-icon/03d.svg';
import { ReactComponent as Icon04d } from '../../assets/flat-icon/04d.svg';
import { ReactComponent as Icon09d } from '../../assets/flat-icon/09d.svg';
import { ReactComponent as Icon10d } from '../../assets/flat-icon/10d.svg';
import { ReactComponent as Icon11d } from '../../assets/flat-icon/11d.svg';
import { ReactComponent as Icon13d } from '../../assets/flat-icon/13d.svg';
import { ReactComponent as Icon50d } from '../../assets/flat-icon/50d.svg';
import { ReactComponent as Sensation } from '../../assets/flat-icon/sensation.svg';

const UbrellaIcon = (props) => <Icon component={Ubrella} {...props} />;
const HumidityIcon = (props) => <Icon component={Humidity} {...props} />;
const DawnIcon = (props) => <Icon component={Dawn} {...props} />;
const SunsetIcon = (props) => <Icon component={Sunset} {...props} />;
const SensationIcon = (props) => <Icon component={Sensation} {...props} />;

const ClimateIcon01d = (props) => <Icon component={Icon01d} {...props} />;
const ClimateIcon01n = (props) => <Icon component={Icon01n} {...props} />;
const ClimateIcon02d = (props) => <Icon component={Icon02d} {...props} />;
const ClimateIcon02n = (props) => <Icon component={Icon02n} {...props} />;
const ClimateIcon03d = (props) => <Icon component={Icon03d} {...props} />;
const ClimateIcon04d = (props) => <Icon component={Icon04d} {...props} />;
const ClimateIcon09d = (props) => <Icon component={Icon09d} {...props} />;
const ClimateIcon10d = (props) => <Icon component={Icon10d} {...props} />;
const ClimateIcon11d = (props) => <Icon component={Icon11d} {...props} />;
const ClimateIcon13d = (props) => <Icon component={Icon13d} {...props} />;
const ClimateIcon50d = (props) => <Icon component={Icon50d} {...props} />;

const ClimateIcon = (props) => {
  const { type } = props;
  switch (type) {
    case '01d':
      return (
        //Freepik
        <ClimateIcon01d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '01n':
      return (
        //Freepik
        <ClimateIcon01n
          style={{ fontSize: '65px', marginBottom: '17px', color: '#434343' }}
          {...props}
        />
      );

    case '02d':
      return (
        //Freepik
        <ClimateIcon02d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '02n':
      return (
        //Freepik
        <ClimateIcon02n style={{ fontSize: '82px', color: '#434343' }} {...props} />
      );

    case '03d':
      return (
        //Freepik
        <ClimateIcon03d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '03n':
      return (
        //Freepik
        <ClimateIcon03d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '04d':
      return (
        //Freepik
        <ClimateIcon04d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '04n':
      return (
        //Freepik
        <ClimateIcon04d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '09d':
      return (
        //Freepik
        <ClimateIcon09d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '09n':
      return (
        //Freepik
        <ClimateIcon09d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '10d':
      return (
        //Freepik
        <ClimateIcon10d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '10n':
      return (
        //Freepik
        <ClimateIcon10d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '11d':
      return (
        //Freepik
        <ClimateIcon11d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '11n':
      return (
        //Freepik
        <ClimateIcon11d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '13d':
      return (
        //Freepik
        <ClimateIcon13d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '13n':
      return (
        //Freepik
        <ClimateIcon13d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '50d':
      return (
        //Freepik
        <ClimateIcon50d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case '50n':
      return (
        //Freepik
        <ClimateIcon50d style={{ fontSize: '80px', color: '#434343' }} {...props} />
      );

    case 'ubrella':
      return (
        //Freepik
        <UbrellaIcon style={{ fontSize: '30px', color: '#434343' }} {...props} />
      );

    case 'humidity':
      return (
        //Good Ware
        <HumidityIcon style={{ fontSize: '36px', color: '#434343' }} {...props} />
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

    case 'sensation':
      return (
        //Freepik
        <SensationIcon style={{ fontSize: '36px', color: '#434343' }} {...props} />
      );

    default:
      return <div />;
  }
};

export default ClimateIcon;
