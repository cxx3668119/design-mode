// 权限逻辑判断
// 用户：权限要求

// 是否是用户
// 等级1级以上
// 前端开发
// 吃瓜群众
const user = {
  role: 'juejin',
  grade: 2,
  job: 'FE',
  type: 'eat melons'
}

function checkAuth(data) {
  if (data.role !== 'juejin') {
    console.log('不是掘金用户');
    return false;
  }
  if (data.grade < 1) {
    console.log('掘金等级小于 1 级');
    return false;
  }
  if (data.job !== 'FE') {
    console.log('不是前端开发');
    return false;
  }
  if (data.type !== 'eat melons') {
    console.log('不是吃瓜群众');
    return false;
  }

  data.cxx = 'chenxinxin'
  return data;
}
console.log(checkAuth(user));

module.exports = {
  user,
}