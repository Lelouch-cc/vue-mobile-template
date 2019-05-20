import { get } from 'utils/request'

const test = (data) => {
  return get('test', data)
}

export default test
