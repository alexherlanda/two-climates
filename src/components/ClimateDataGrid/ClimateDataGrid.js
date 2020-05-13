import React from 'react';
import ClimateIcon from '../Icons';
import { Card, Row } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { gridStyle } from './styles';
import moment from 'moment';
import ClimateStatic from '../ClimateStatic';
function ClimateDataGrid(props) {
  const { data } = props;

  const formatHour = (timeStamp) => {
    const hour = moment.unix(timeStamp);
    return hour.format('HH:mm');
  };

  return (
    <Row align="middle" justify="center" style={{ marginTop: 20 }}>
      <Card.Grid style={gridStyle} title="Sensación térmica">
        <ClimateStatic
          value={data ? data.feelsLike + ' C°' : ''}
          icon={<ClimateIcon type="sensation" />}
        />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Amanecer">
        <ClimateStatic
          value={data ? formatHour(data.sunrise) : ''}
          unit=""
          icon={<ClimateIcon type="dawn" />}
        />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Maximo">
        <ClimateStatic
          value={data ? data.tempMax + ' C°' : ''}
          unit=""
          icon={<CaretUpOutlined style={{ fontSize: '36px' }} />}
        />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Humedad">
        <ClimateStatic
          value={data ? data.humidity + '%' : ' '}
          unit=""
          icon={<ClimateIcon type="humidity" />}
        />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Puesta del Sol">
        <ClimateStatic
          value={data ? formatHour(data.sunset) : ''}
          unit=""
          icon={<ClimateIcon type="sunset" />}
        />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Minimo">
        <ClimateStatic
          value={data ? data.tempMin + 'C' : ''}
          unit=""
          icon={<CaretDownOutlined style={{ fontSize: '36px' }} />}
        />
      </Card.Grid>
    </Row>
  );
}

export default ClimateDataGrid;
