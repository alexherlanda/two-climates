import React, { useState } from 'react';
import { Card, Row, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import ConfigurationModal from '../ConfigurationModal';
import ClimateIcon from '../Icons';
import ClimateDataGrid from '../ClimateDataGrid';
import PropTypes from 'prop-types';

function ClimateCard(props) {
  const { Text, Title } = Typography;
  const { cityName, ownerCardName, cardPlaces, loading } = props;
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
  //TODO: loading state is to small to reflect the usual size of the app
  return (
    <Card
      loading={loading}
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

      <ClimateDataGrid />
    </Card>
  );
}

ClimateCard.propTypes = {
  cityName: PropTypes.string,
  ownerCardName: PropTypes.string,
  cardPlaces: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

ClimateCard.defaultProps = {
  cityName: 'cityName',
  ownerCardName: 'ownerCardName',
  cardPlaces: [{}],
  loading: false,
};

export default ClimateCard;
