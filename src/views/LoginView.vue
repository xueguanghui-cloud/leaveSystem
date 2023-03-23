<script setup lang="ts">
import { reactive } from 'vue'
import { userLogin } from '@/api/user'
import { userStore } from '@/stores/user'
import router from '@/router'

interface FormState {
  userAccount: string
  userPassword: string
}

const storeUser = userStore()

const formState = reactive<FormState>({
  userAccount: '',
  userPassword: ''
})

const onFinish = (values: FormState) => {
  userLogin(values)
    .then((res) => {
      storeUser.setUser(res.data)
      router.push('/')
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <div class="userLayout">
    <a-layout>
      <a-layout-header>
        <div class="header">
          <a href="/">
            <img src="@/assets/logo.svg" alt="logo" class="logo" />
            <span class="title"> Ant Design</span>
          </a>
        </div>
      </a-layout-header>
      <a-layout-content>
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
        >
          <a-form-item
            label="userName"
            name="userAccount"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.userAccount" />
          </a-form-item>

          <a-form-item
            label="password"
            name="userPassword"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password v-model:value="formState.userPassword" />
          </a-form-item>

          <a-form-item :wrapper-col="{ span: 12 }">
            <a-button type="primary" html-type="submit">登陆</a-button>
          </a-form-item>
        </a-form>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped lang="scss">
.userLayout {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  .ant-layout {
    padding-bottom: 200px;
    background-color: transparent;
    .ant-layout-header {
      text-align: center;
      box-sizing: border-box;
      background-color: transparent;
      .header {
        height: 44px;
        line-height: 44px;
        img {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
          border-style: none;
        }
        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
    }
    .ant-layout-content {
      margin-top: 50px;
      .ant-form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .ant-form-item {
          width: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          .ant-btn {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
