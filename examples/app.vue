<template lang="pug">
.form-demo
  div(ref='form')

</template>
<script>
import widgets, { Render, Epage } from 'epage-iview'
import { widgets as customWidgets } from '@'
import mockSchema from './schema.json'

const { helper } = Epage

// 扩展自定义rule
// Rule.set(rules)
// 自定义widget 的validators
// helper.setValidators(widgets, { richText: ['phone'] })
const myWidgets = helper.mergeWidgets(widgets, ...customWidgets)

export default {
  mounted () {
    this.getSchema().then(schema => {
      // 创建设计器
      const epage = this.formDesign(schema)
      this.getModel().then(model => {
        epage.store.updateModel(model)
      })

      // 渲染默认编辑模式
      // const form = this.formRender(schema)
      // this.getModel().then(model => {
      //   form.store.updateModel(model)
      // })
      // this.listenerForm(form)
    })
  },
  methods: {
    getSchema () {
      return Promise.resolve(mockSchema)
    },
    formRender (schema) {
      const el = this.$refs.form
      return new Render({ el, widgets: myWidgets, schema })
    },
    formDesign (schema) {
      const el = this.$refs.form
      return new Epage({ el, widgets: myWidgets, schema, Render })
    },
    getModel () {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ k17U0aTQ4: '这是关键字' })
        }, 1000)
      })
    },
    listenerForm (form) {
      // 添加监听
      form
        .on('k17U0aTQ4', 'change', e => {
          console.log(e.target.value, 9999)
        })
        // .off('k17U0aTQ4', 'change')
    },
    saveForm (schema) {
      console.log('schema: ', schema)
    }
  }
}
</script>
<style lang="less">
.form-demo{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
