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
    cardId,
    ownerCardName,
    cardPlaces,
    loading,
    data,
    setActivePlace: setActivePlaceById,
  } = props;

  const { Text, Title } = Typography;
  const [modalIsVisible, setShowModalIsVisible] = useState(false);

  const handleOnOk = (values) => {
    const { cityId } = values;
    setActivePlaceById({ cardId: cardId, cityId: cityId });
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
      style={{ margin: 2.5 }}
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
        <ClimateIcon type={data ? data.mainCard.icon : undefined} />
      </Row>
      <Row align="middle" justify="center">
        <Title> {data ? data.mainCard.temp + '°' : ''} </Title>
      </Row>
      <Row align="middle" justify="center">
        <Title level={4}>
          {data
            ? data.mainCard.description.charAt(0).toUpperCase() +
              data.mainCard.description.slice(1)
            : ''}
        </Title>
      </Row>
      <Row align="middle" justify="center">
        <Text>{data ? data.mainCard.cityName : ''}</Text>
      </Row>

      <ClimateDataGrid data={data.dataGrid} />
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
