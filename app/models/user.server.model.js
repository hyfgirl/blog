/**
 * @Author  wq
 * @Date    2018-04-23T16:44:47+08:00
 * @Description mongoose Schema of user
 */
const Schema = require('mongoose').Schema;

module.exports = new Schema({
    // 姓名
    name: String,
    // 账号
    username: String,
    //昵称
    nickname: String,
    //性别 男：1 女：2
    sex:{
      type: String,
      enum: [0, 1, 2],
      default: 0
    },
    //盐
    salt: String,
    //手机号
    mobile: String,
    //邮箱
    email: String,
    //密码
    password: String,
    //是否被冻结
    isSuspend: {
      type: Boolean
    },
    // 课件包
    role: {type: Schema.Types.ObjectId, ref: 'Role'}
  },
  {
    timestamps: true,
    collection: 'mg_user'
  }
);
