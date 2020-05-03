import React, { useState } from 'react';
import { Card, Row, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import ConfigurationModal from '../ConfigurationModal';
import ClimateIcon from '../Icons';
import ClimateDataGrid from '../ClimateDataGrid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActivePlace } from '../../redux/actions/cardClimateActions';

function ClimateCard(props) {
  const {
    ownerCardName,
    cardPlaces,
    loading,
    activePlace,
    setActivePlace: setActivePlaceById,
  } = props;

  const { Text, Title } = Typography;
  const [modalIsVisible, setShowModalIsVisible] = useState(false);

  const handleOnOk = (values) => {
    console.log('values :>> ', values);
    setShowModalIsVisible(false);
    setActivePlaceById({ placeId: values.placeId });
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
        onCancel={handleOnCancel}
        ownerCardName={ownerCardName}
        cardPlaces={cardPlaces}
        handleOnOk={handleOnOk}
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
        <Text>{activePlace.label}</Text>
      </Row>

      <ClimateDataGrid />
    </Card>
  );
}

ClimateCard.propTypes = {
  ownerCardName: PropTypes.string,
  cardPlaces: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  setActivePlace: PropTypes.func.isRequired,
};

ClimateCard.defaultProps = {
  ownerCardName: 'ownerCardName',
  cardPlaces: [{}],
  loading: false,
};

export default connect(null, { setActivePlace })(ClimateCard);
