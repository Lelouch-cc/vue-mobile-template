// 秒数转化为时间
export function secondToTime (number) {
  const h = Math.floor(number / 3600)
  const m = Math.floor((number / 60 % 60))
  const s = Math.floor((number % 60))

  return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`
}

/**
 * formatDate 日期时间格式化函数
 * 将 Date 转化为指定格式的 String
 * @default 默认格式 2018-01-01 12:00:00
 * 年     （y），可以用1-4个占位符
 * 月     （M）
 * 日     （d）
 * 小时    12小时制（h） 24小时制（H）
 * 分     （m）
 * 秒     （s）
 * 毫秒   （S）只能用1个占位符（是1-3位数字）
 * 周     （E）
 * 季度   （q），可以用1-2个占位符
 * eg:
 * formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss.S') ==> 2009-03-10 08:09:04.423
 * formatDate(new Date(), 'yyyy-MM-dd E HH:mm:ss') ==> 2009-03-10 二 20:09:04
 * formatDate(new Date(), 'yyyy-MM-dd EE hh:mm:ss') ==> 2009-03-10 周二 08:09:04
 * formatDate(new Date(), 'yyyy-MM-dd EEE hh:mm:ss') ==> 2009-03-10 星期二 08:09:04
 * formatDate(new Date(), 'yyyy-M-d h:m:s.S') ==> 2006-7-2 8:9:4.18
 */
export const formatDate = (value, fmt = 'yyyy-MM-dd HH:mm:ss') => {
  const time = new Date(value)
  const obj = {
    'M+': time.getMonth() + 1,
    'd+': time.getDate(),
    'h+': time.getHours() % 12 === 0 ? 12 : time.getHours() % 12,
    'H+': time.getHours(),
    'm+': time.getMinutes(),
    's+': time.getSeconds(),
    'S': time.getMilliseconds(),
    'q+': Math.floor((time.getMonth() + 3) / 3)
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in obj) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (obj[k]) : (('00' + obj[k]).substr(('' + obj[k]).length)))
    }
  }
  return fmt
}

// 使用*遮蔽字符串
export const mask = (cc, num = 4, mask = '*') => {
  return ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num)
}

// 获取真实PX
export const getRealPx = (px) => {
  const clientWidth = document.documentElement.clientWidth

  // 根据设计稿的大小计算，此处按照750的设计稿计算
  return clientWidth / 750 * px
}

/**
 * 数字格式化
 * @param {*} number
 * @param {*} param1
 */
export function formatNumber (number, {
  decimals = 0,
  decimal = '.',
  seperator = ','
} = {}) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)
  let result

  function toFixedFix (x, y) {
    let k = Math.pow(10, prec)
    return `${(Math.round(x * k) / k).toFixed(y)}`
  }

  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  result = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`).split('.')

  if (result[0].length > 3) {
    result[0] = result[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, seperator)
  }
  if ((result[1] || '').length < prec) {
    result[1] = result[1] || ''
    result[1] += new Array(prec - result[1].length + 1).join('0')
  }
  return result.join(decimal)
}

// 格式化Url中的参数
export const formatUrlData = function (url) {
  const obj = {}
  url.replace(/([^?&=]+)=([^&#]+)/g, (_, k, v) => {
    obj[k] = v
  })
  return obj
}

// 数字补位
export const numberPad = function (source, length = 2) {
  let pre = ''
  const negative = source < 0
  const string = String(Math.abs(source))
  if (string.length < length) {
    pre = (new Array(length - string.length + 1)).join('0')
  }
  return (negative ? '-' : '') + pre + string
}
