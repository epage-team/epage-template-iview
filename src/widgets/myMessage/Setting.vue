<template lang="pug">
setting-form(:store='store')
  span(slot='rule')
  span(slot='placeholder')
  span(slot='name')
  span(slot='disabled')
  span(slot='help')
  span(slot='title')
  span(slot='description')
  FormItem(label='消息内容')
    Input(
      size='small'
      type='textarea'
      v-model='selectedSchema.option.message'
      placeholder='请输入消息内容...'
    )
  FormItem(label='消息类型')
    RadioGroup(size='small' v-model='selectedSchema.option.type')
      Radio(label='tip') 提示
      Radio(label='warning') 警告
      Radio(label='error') 错误
</template>
<script>
import { Epage } from 'epage-iview'

const { SettingForm, settingExtend } = Epage.setting

export default {
  components: { SettingForm },
  extends: settingExtend,
  methods: {}
}
</script>
