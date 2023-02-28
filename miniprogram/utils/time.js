const dayjs = require("dayjs");

const time = (rule) => {
    const nowTime = dayjs().format(rule);
    // 去掉首尾的单引号
    return nowTime.slice(1, nowTime.length - 1);
}

// 判断是否是同一天
const isSame = (time) => dayjs(dayjs().format('YYYY-MM-DD')).isSame(dayjs(time))

module.exports = {
    time,
    isSame
}