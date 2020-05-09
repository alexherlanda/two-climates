import React, { useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import ClimateCard from './components/ClimateCard';
import { HeartFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { activePlaceRequest } from '../src/redux/actions/cardClimateActions';

function App(props) {
  const { climateCards, activePlaceRequest: activePlaceReq } = props;
  const { Content, Header } = Layout;

  const colProps = {
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  };
  useEffect(() => {
    activePlaceReq({ cardId: '1', cityId: 3515807 });
    activePlaceReq({ cardId: '2', cityId: 3979654 });
  }, [activePlaceReq]);

  return (
    <Layout hasSider={false}>
      <Header>
        <HeartFilled style={{ color: 'white', fontSize: '30px' }} />
      </Header>
      <Layout>
        <Content style={{ margin: 20 }}>
          <Row align="middle" justify="center">
            {climateCards.map((card) => (
              <Col {...colProps} key={card.id}>
                <ClimateCard
                  cardId={card.id}
                  loading={card.isLoading}
                  cardPlaces={card.places}
                  ownerCardName={card.owner}
                  cityName={card.selectedPlaceName}
                  data={card.data}
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

App.prototypes = {
  climateCards: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  climateCards: [{}],
};

function mapStateToProps(state) {
  return {
    climateCards: state.climateCards,
  };
}

export default connect(mapStateToProps, { activePlaceRequest })(App);
