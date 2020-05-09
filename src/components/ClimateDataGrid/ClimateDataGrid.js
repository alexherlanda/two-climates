import React from 'react';
import ClimateIcon from '../Icons';
import { Card, Statistic, Row } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { gridStyle } from './styles';
import moment from 'moment';

function ClimateDataGrid(props) {
  const { data } = props;

  const formatHour = (timeStamp) => {
    const hour = moment.unix(timeStamp);
    return hour.format('HH:mm');
  };

  return (
    <Row align="middle" justify="center" style={{ marginTop: 20 }}>
      <Card.Grid style={gridStyle} title="Prob. de precipitaciones">
        <Statistic prefix={<ClimateIcon type="ubrella" />} value="19%" />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Amanecer">
        <Statistic
          prefix={<ClimateIcon type="dawn" />}
          value={data ? formatHour(data.sunrise) : ''}
        />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Maximo">
        <Statistic
          prefix={<CaretUpOutlined />}
          value={data ? data.tempMax + 'C' : ''}
        />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Humedad">
        <Statistic
          prefix={<ClimateIcon type="humidity" />}
          value={data ? data.humidity + '%' : ' '}
        />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Puesta del Sol">
        <Statistic
          prefix={<ClimateIcon type="sunset" />}
          value={data ? formatHour(data.sunset) : ''}
        />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Minimo">
        <Statistic
          prefix={<CaretDownOutlined />}
          value={data ? data.tempMin + 'C' : ''}
        />
      </Card.Grid>
    </Row>
  );
}

export default ClimateDataGrid;
