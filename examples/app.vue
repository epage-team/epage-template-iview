<template lang="pug">
.demo-container
  //- .demo-header
  //-   span.demo-title Epage演示示例
  //-   span.demo-btns
  //-     Button.demo-btn(type='primary' size='small' @click='validateForm') 校验表单
  //-     Button.demo-btn(type='warning' size='small' @click='resetForm') 重置表单
  //-     Button.demo-btn(type='info' size='small' @click='getFormData') 获取表单值

  .demo-epage
    div(ref='form')

</template>
<script>
import Epage from 'epage'
import config from './epage.config.js'

export default {
  data () {
    return {
      epage: null,
      render: null,
      model: {
        kTbIYTMwA: 'C23'
      }
    }
  },
  mounted () {
    const el = this.$refs.form
    const option = { ...config, el }
    // 设计器
    this.epage = new Epage(option)
    this.epage.$render.store.updateModel(this.model)

    // 渲染默认编辑模式
    // this.render = new Render({ el, widgets: myWidgets, schema })
    // this.render.store.updateModel(this.model)
    // this.listenerForm()
  },
  methods: {
    checkPreview (action) {
      const text = {
        reset: '请在预览视图重置表单',
        validate: '请在预览视图校验表单',
        formdata: '请在预览视查看表单值'
      }
      const tab = this.epage.store.getTab()
      if (tab !== 'preview') {
        this.$Message.warning(text[action])
        return false
      }
      return true
    },
    validateForm (args) {
      if (!this.checkPreview('validate')) return
      const render = this.render || this.epage.$render
      render.validateFields().then(args => {
        console.log('validate: ', args)
      })
    },
    resetForm (args) {
      if (!this.checkPreview('reset')) return
      const render = this.render || this.epage.$render
      render.resetFields()
    },
    getFormData () {
      if (!this.checkPreview('formdata')) return
      const render = this.render || this.epage.$render
      const formData = render.store.getFormData()

      this.$Notice.open({
        title: 'Form Data或打开开发者工具查看',
        duration: 3,
        render: h => {
          return h('pre', {
            domProps: {
              innerHTML: JSON.stringify(formData, null, 2)
            }
          })
        }
      })
      console.log('form data: ', formData)
    },
    listenerForm () {
      // 添加监听
      this.render
        .on('kTbIYTMwA', 'change', e => {
          console.log('onChange: ', e.target.value)
        })
        // .off('k17U0aTQ4', 'change')
    }
  }
}
</script>
<style lang="less">
.demo-container {
  // .demo-header {
  //   height: 50px;
  //   width: 100%;
  //   border-bottom: 1px solid #ddd;
  //   padding: 10px 16px;
  //   box-sizing: border-box;
  //   .demo-title {
  //     font-size: 18px;
  //     font-weight: bold;
  //   }
  //   .demo-btns {
  //     margin-left: 32px;
  //     vertical-align: bottom;
  //   }
  //   .demo-btn{
  //     margin-left: 16px;
  //   }
  // }
  .demo-epage{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
