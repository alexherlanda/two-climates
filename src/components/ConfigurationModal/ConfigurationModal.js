import React from 'react';
import { Modal, Form, Select } from 'antd';
import PropTypes from 'prop-types';

function ConfigurationModal(props) {
  const { ownerCardName, cardPlaces, handleOnOk, ...other } = props;
  const { Option } = Select;
  const [form] = Form.useForm();

  const createOptions = () => {
    return cardPlaces.map((place) => (
      <Option key={place.id} value={place.id}>
        {place.label}
      </Option>
    ));
  };

  return (
    <Modal
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            handleOnOk(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
      title={`Ajustes para ${ownerCardName}`}
      {...other}
    >
      <Form form={form} layout="vertical" scrollToFirstError>
        <Form.Item
          rules={[{ required: true, message: 'Por favor selecciona una ciudad' }]}
          name="cityId"
          label={`¿Donde esta esta ${ownerCardName}?`}
        >
          <Select size="large" placeholder="Selecciona una ciudad">
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
