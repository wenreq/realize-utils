/**
 * 删除本地存储
 * @date 2022-02-17
 * @param {string} name 本地存储名称
 * @returns {boolean} 删除成功 true，否则 false
 */
function removeStorage(name) {
  return window.localStorage.removeItem(name)
}

module.exports = removeStorage