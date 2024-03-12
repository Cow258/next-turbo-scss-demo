/* eslint-disable no-useless-escape */
export const rPoolPW = /^.{6,100}$/
export const rPassword = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9\.\,\`\~\!\@\#\$\%\^\&\*\(\)\-\+\{\}\[\]]{8,100}$/
export const rGoodPW = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.\,\`\~\!\@\#\$\%\^\&\*\(\)\-\+\{\}\[\]])[a-zA-Z0-9\.\,\`\~\!\@\#\$\%\^\&\*\(\)\-\+\{\}\[\]]{8,100}$/
export const rHKmobile = /^[456789][0-9]{7}$/
export const rHKtel = /^[23456789][0-9]{7}$/
export const rEmail = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/
export const rNum = /^[0-9]+$/
export const rFloat = /^[+-]?\d+(\.\d+)?$/
export const rAC = /^[a-zA-Z0-9_-]{2,50}$/
export const rKey = /^[A-Z0-9_]{2,50}$/
export const rID = /^[a-zA-Z][a-zA-Z0-9_-]{3,50}$/
export const rEng = /^[a-zA-Z\ ]+$/
export const rNickName = /^[\u3000\u3400-\u4DBF\u4E00-\u9FFFa-zA-Z0-9\ ]{1,50}$/
export const rFullName = /^[\u3000\u3400-\u4DBF\u4E00-\u9FFFa-zA-Z0-9\ ]{2,50}$/
export const rUuidV4 = /^[a-f\d]{8}-?[a-f\d]{4}-?4[a-f\d]{3}-?[89ab][a-f\d]{3}-?[a-f\d]{12}$/
export const rUuidB90 = /^([a-zA-Z0-9!#\$%&'\(\)\*\+-.\/:<=>\?@\[\]\^_`{\|}~]){20}$/
export const rUuidB85 = /^[0-9a-zA-Z\-_`~!@#$\^*\(\)\[\]{},.<>|:;]{20}$/
export const rUuidB58 = /^[1-9A-HJ-NP-Za-km-z]{22}$/
export const rUuidV4QrPath = /^\/qr\/[a-f\d]{8}[a-f\d]{4}4[a-f\d]{3}[89ab][a-f\d]{3}[a-f\d]{12}$/
export const rIG = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/
export const rBirth = /\d\d\d\d-\d\d-\d\d/
export const rxDate = /\d\d\d\d\/\d{1,2}\/\d\d/
export const rTimeMin = /^(20|21|22|23|[0-1]+\d):[0-5]+\d$/
export const rTimeSec = /(20|21|22|23|[0-1]+\d):[0-5]+\d:[0-5]+\d/
export const rDatetime = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-)) (20|21|22|23|[0-1]+\d):[0-5]+\d:[0-5]+\d$/
export const rDate = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/
export const rInt = /^-{0,1}[0-9]+$/
export const rMd5 = /^[a-zA-Z0-9]{32}$/
export const rSha1 = /^[0-9a-f]{40}$/
export const rSha256 = /^[a-fA-F0-9]{64}$/
export const rSha256Base64Url = /^[a-zA-Z0-9_-]{40,45}$/
export const rBase64Url = /^[a-zA-Z0-9_-]+$/
export const rBase64 = /^[A-Za-z0-9+/]+={0,2}$/
export const rIP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
export const rShortPath = /^[a-z0-9_-]{2,100}$/
export const rColor = /^#[a-zA-Z0-9]{6}$/
export const rDomain = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const isHKID = (id) => {
  try {
    if (!id) return false
    id = id.replace(/(\(|\)| |\[|\]|-)/g, '').split('')
    if (id.length !== 8) return false
    let result = 0
    let n = 8
    for (let i = 0; i <= 6; i++) {
      id[i] = id[i].toLocaleUpperCase().charCodeAt(0)
      id[i] = i === 0 ? (id[i] - 64) * n : (id[i] - 48) * n
      result += id[i]
      n--
    }
    result += id[7].toLocaleUpperCase() === 'A' ? 10 : Number(id[7])
    return result % 11 === 0
  } catch (error) { return false }
}
