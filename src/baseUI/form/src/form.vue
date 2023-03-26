<script setup lang="ts">
import { ref, watch } from 'vue'
import type { FormItem } from '../types/index'
const props = withDefaults(
  defineProps<{
    modelValue: { [key: string]: any }
    labelWidth?: string
    formItems: FormItem[]
    itemStyle?: object
    colLayout?: object
    layout?: 'horizontal' | 'vertical' | 'inline'
  }>(),
  {
    formItems: () => [],
    itemStyle: () => ({ padding: '10px 10px' }),
    colLayout: () => ({
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 8 },
      xl: { span: 6 }
    }),

    layout: 'horizontal'
  }
)

const emits = defineEmits(['update:modelValue'])
const formData = ref({ ...props.modelValue })

watch(
  formData,
  (newValue) => {
    emits('update:modelValue', newValue)
  },
  { deep: true }
)
</script>

<template>
  <div class="ls-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <a-form labelAlign="right" :layout="layout">
      <a-row :gutter="20">
        <template v-for="(item, index) in formItems" :key="index">
          <a-col v-bind="colLayout">
            <a-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
              <!-- input || password -->
              <template v-if="item.type === 'input' || item.type === 'password'">
                <a-input
                  v-if="item.type === 'input'"
                  v-model:value="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                />
                <a-input-password
                  v-else
                  v-model:value="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                />
              </template>
              <!-- select -->
              <template v-else-if="item.type === 'select'">
                <a-select
                  ref="select"
                  v-model:value="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                >
                  <a-select-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.title }}
                  </a-select-option>
                </a-select>
              </template>
              <!-- datapicker -->
              <template v-else-if="item.type === 'datapicker'">
                <a-range-picker v-model:value="formData[`${item.field}`]" />
              </template>
            </a-form-item>
          </a-col>
        </template>
      </a-row>
    </a-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ls-form {
  padding-top: 18px;
}
</style>
