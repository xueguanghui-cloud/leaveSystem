type FormType = 'input' | 'password' | 'select' | 'datapicker' | 'upload'

type Options = {
  title: string
  value: string | number
}

export interface FormItem {
  field: string
  type: FormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: Options[]
  // 针对特殊的属性
  otherOptions?: any
  isHidden?: boolean
}

export interface Form {
  formItems: FormItem[]
  labelWidth?: string
  colLayout?: object
  itemStyle?: any
  layout?: 'horizontal' | 'vertical' | 'inline'
}
