const defaultUrl = 'upload/pic/2017/06/23/pIdrRBtwqs.jpg'
const prefix = '//mup.yanguangsoft.com/'

export default function cloudPic(url) {
  if (!url) return prefix + defaultUrl
  if (url.indexOf('http') === -1) return prefix + url
  return url
}
