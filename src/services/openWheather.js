import request from './requests';

export async function getClimateByCityId(params) {
  return request('', {
    method: 'GET',
    params: {
      ...params,
      //! App id is not public. Use your own appId for OpenWhetner
      appid: '418eb025a5987a2c2125c3d46b58ba9b',
    },
  });
}
