<template lang="pug">
.ep-widget
  .epmy-myMessage(:class='cls') {{schema.option.message}}

  //- //- 显示模式展示
  //- template(v-if='mode === "display"')

  //- //- 编辑模式展示
  //- template(v-else)

</template>
<script>
import { viewExtend } from 'epage-iview'

export default {
  extends: viewExtend,
  computed: {
    cls () {
      const { type } = this.schema.option
      return `epmy-myMessage-${type}`
    }
  }
}
</script>
