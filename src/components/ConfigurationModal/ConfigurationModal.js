import React from 'react';
import { Modal, Form, Select } from 'antd';
import PropTypes from 'prop-types';

function ConfigurationModal(props) {
  const { ownerCardName, cardPlaces } = props;
  const { ...other } = props;
  const { Option } = Select;

  const createOptions = () => {
    return cardPlaces.map((place) => (
      <Option key={place.id} value={place.value}>
        {place.label}
      </Option>
    ));
  };

  return (
    <Modal title={`Ajustes para ${ownerCardName}`} {...other}>
      <Form layout="vertical">
        <Form.Item
          rules={[{ required: true, message: 'Por favor selecciona una ciudad' }]}
          name="city"
          label={`¿Donde esta esta ${ownerCardName}?`}
        >
          <Select placeholder="Selecciona una ciudad" showSearch>
            {createOptions()}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

ConfigurationModal.propTypes = {
  ownerCardName: PropTypes.string,
  cardPlaces: PropTypes.array,
};
ConfigurationModal.defaultProps = {
  ownerCardName: 'ownerCardName',
  cardPlaces: [],
};

export default ConfigurationModal;
