import React from 'react';
import ClimateIcon from '../Icons';
import { Card, Statistic, Row } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { gridStyle } from './styles';

function ClimateDataGrid(props) {
  return (
    <Row align="middle" justify="center" style={{ marginTop: 20 }}>
      <Card.Grid style={gridStyle} title="Prob. de precipitaciones">
        <Statistic prefix={<ClimateIcon type="ubrella" />} value="19%" />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Amanecer">
        <Statistic prefix={<ClimateIcon type="dawn" />} value="12:00" />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Maximo">
        <Statistic prefix={<CaretUpOutlined />} value="19C" />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Humedad">
        <Statistic prefix={<ClimateIcon type="humidity" />} value="19%" />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Puesta del Sol">
        <Statistic prefix={<ClimateIcon type="sunset" />} value="12:00" />
      </Card.Grid>
      <Card.Grid style={gridStyle} title="Minimo">
        <Statistic prefix={<CaretDownOutlined />} value="19C" />
      </Card.Grid>
    </Row>
  );
}

export default ClimateDataGrid;
