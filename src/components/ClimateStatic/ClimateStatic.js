import React from 'react';
import { Col, Row, Typography } from 'antd';

import PropTypes from 'prop-types';

function ClimateStatic(props) {
  const { value, icon } = props;

  const { Text } = Typography;

  return (
    <>
      <Row justify="center">
        <Row>{icon}</Row>
      </Row>
      <Row justify="center">
        <Col>
          <Text> {value} </Text>
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
