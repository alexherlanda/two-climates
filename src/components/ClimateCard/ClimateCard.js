import React, { useState } from 'react';
import { Card, Statistic, Row, Typography } from 'antd';
import { EditOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import ConfigurationModal from '../ConfigurationModal';
import ClimateIcon from '../Icons';
//TODO: Separate this into style file
const gridStyle = {
  width: '33%',
  textAlign: 'center',
};

function ClimateCard(props) {
  const { Text, Title } = Typography;
  const { cityName, ownerCardName, cardPlaces } = props;
  const [modalIsVisible, setShowModalIsVisible] = useState(false);

  const handleOnOk = () => {
    setShowModalIsVisible(false);
  };

  const handleOnCancel = () => {
    setShowModalIsVisible(false);
  };

  const handleOnOpenSettings = () => {
    setShowModalIsVisible(true);
  };

  return (
    <Card
      title={ownerCardName}
      extra={<EditOutlined onClick={handleOnOpenSettings} />}
    >
      <ConfigurationModal
        visible={modalIsVisible}
        onOk={handleOnOk}
        onCancel={handleOnCancel}
        ownerCardName={ownerCardName}
        cardPlaces={cardPlaces}
      />

      <Row align="middle" justify="center" style={{ marginBottom: 25 }}>
        <ClimateIcon type="sunny" />
      </Row>
      <Row align="middle" justify="center">
        <Title> 19° C </Title>
      </Row>
      <Row align="middle" justify="center">
        <Title level={4}> Sunny </Title>
      </Row>
      <Row align="middle" justify="center">
        <Text>{cityName}</Text>
      </Row>
      {/* TODO: This grids should be an independent component */}
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
    </Card>
  );
}

export default ClimateCard;
