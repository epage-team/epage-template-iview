import { schema } from 'epage-core'

export default class MyMessageSchema extends schema.BaseSchema {
  constructor (props) {
    super() // super 不传参数时  $init 不会执行
    this.option.message = '' // 消息内容
    this.option.type = 'tip' // 消息类型
    this.create(props) // 初始化schema、widget、descriptor
  }
}

// 静态配置
Object.assign(MyMessageSchema, {
  title: '消息',
  widget: 'myMessage', // 组件类型的唯一标识，相同时表示同一个组件 必须和 this.widget相同
  preview: '', // 缩略图
  logic: {
    value: [],
    // event: ['focus', 'blur', 'change']
    event: []
  }
})
