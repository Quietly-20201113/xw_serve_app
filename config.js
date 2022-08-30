const configs = {
    mysql: {
      host: '106.54.173.217',
      port: '3306',
      user: 'root',
      password: '123456',  // 自己设置的密码
      database: 'xw_mysql' // 数据库的名字
    },
    // 打印错误
    log: {
      error (message) {
        console.log('[knex error]', message)
      }
    }
  }
  
  module.exports = configs