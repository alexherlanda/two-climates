import React from 'react';
import { Layout, Row, Col } from 'antd';
import ClimateCard from './components/ClimateCard';

import 'antd/dist/antd.css';
import { alexisPlaces, itzelPlaces } from './models';

function App() {
  const { Content, Header } = Layout;

  const colProps = {
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
  };

  return (
    <Layout hasSider={false}>
      <Header />
      <Layout>
        <Content>
          <br />
          <Row align="middle" justify="center">
            <Col {...colProps}>
              <ClimateCard
                cardPlaces={alexisPlaces}
                ownerCardName="Alexis"
                cityName="Cuautitlán Izcalli"
              />
            </Col>

            <Col {...colProps}>
              <ClimateCard
                cardPlaces={itzelPlaces}
                ownerCardName="Itzel"
                cityName="Londres"
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
