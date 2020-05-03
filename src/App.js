import React from 'react';
import { Layout, Row, Col } from 'antd';
import ClimateCard from './components/ClimateCard';
import { HeartFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

function App(props) {
  const { climateCards } = props;
  const { Content, Header } = Layout;

  const colProps = {
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  };

  return (
    <Layout hasSider={false}>
      <Header>
        <HeartFilled style={{ color: 'white', fontSize: '30px' }} />
      </Header>
      <Layout>
        <Content>
          <Row align="middle" justify="center">
            {climateCards.map((card) => (
              <Col {...colProps} key={card.id}>
                <ClimateCard
                  cardPlaces={card.places}
                  ownerCardName={card.owner}
                  cityName={card.selectedPlaceName}
                  activePlace={card.activePlace}
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

export default connect(mapStateToProps, {})(App);
