const regMobile = /^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|17[0-9]{1})+\d{8})$/

const regEmail = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i

const regId = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

export function isMobile(value = '') {
  return regMobile.test(value)
}

export function isEmail(value = '') {
  return regEmail.test(value)
}

export function isId(value = '') {
  return regId.test(value)
}
