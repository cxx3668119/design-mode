import './0_概念模板'
console.log(user);
// 维护权限列表
const jobList = ['FE', 'BE'];

// 策略
let strategies = {
  checkRole: function (value) {
    return value === 'juejin';
  },
  checkGrade: function (value) {
    return value >= 1;
  },
  checkJob: function (value) {
    return jobList.indexOf(value) > 1;
  },
  checkEatType: function (value) {
    return value === 'eat melons';
  }
};

// 校验规则
var Validator = function () {
  this.cache = [];

  // 添加策略事件
  this.add = function (value, method) {
    this.cache.push(function () {
      return strategies[method](value);
    });
  };

  // 检查
  this.check = function () {
    for (let i = 0; i < this.cache.length; i++) {
      let valiFn = this.cache[i];
      var data = valiFn(); // 开始检查
      if (!data) {
        return false;
      }
    }
    return true;
  };
};
console.log(strategies);
console.log(Validator);