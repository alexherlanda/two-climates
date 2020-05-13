import React, { useState } from 'react';
import { Card, Col, Row, Typography } from 'antd';

import PropTypes from 'prop-types';

function ClimateStatic(props) {
  const { value, unit, icon } = props;

  const { Text, Title } = Typography;

  return (
    <>
      <Row justify="center">
        <Row>{icon}</Row>
      </Row>
      <Row justify="center">
        <Col>
          <Text> {value} </Text>
        </Col>
        <Col>
          <Text> {unit} </Text>
        </Col>
      </Row>
    </>
  );
}

ClimateStatic.propTypes = {
  value: PropTypes.string,
};

ClimateStatic.defaultProps = {
  value: '',
};

export default ClimateStatic;
