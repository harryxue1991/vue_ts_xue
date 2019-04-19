<template>
    <div class="login-container clearfix">
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
            <h3 class="title">项目管理平台</h3>
            <el-form-item prop="username">
                <span class="svg-container svg-container_login">
                    <svg-icon icon-class="user" />
                </span>
                <el-input type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
            </el-form-item>
            <el-form-item prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password"></svg-icon>
                </span>
                <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin('loginForm')" v-model="loginForm.password" autoComplete="on"
                placeholder="password"></el-input>
                <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin('loginForm')">登入</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" @click.native.prevent="forgetPassword">忘记密码</el-button>
            </el-form-item>            
        </el-form>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class'

@Component
export default class Login extends Vue {
    @Action('Login') public actionLogin!: any

    loginForm: any = {
        username: '',
        password: ''
    };
    loading: boolean= false;
    pwdType: string= 'password';

    get loginRules() {
        const validatePass = (rule: any, value: any, callback: any): void => {
            if (value.length < 6) {
                callback(new Error('密码不能小于6位'))
            } else {
                callback()
            }
        }
        const rules = {
            username: [{ required: false, trigger: 'blur' }],
            password: [{ required: true, trigger: 'blur', validator: validatePass }]
        };
        return rules;
    }

    mounted() {}

    showPwd() {
        if (this.pwdType === 'password') {
            this.pwdType = ''
        } else {
            this.pwdType = 'password'
        }
    };
    private handleLogin(formName: any) {
        const refFormName = this.$refs[formName] as HTMLFormElement;
        refFormName.validate(async (valid: any) => {
            if (valid) {
                this.loading = true;
                try {
                    const res = await this.actionLogin(this.loginForm);
                    this.loading = false
                    this.$router.push({ path: '/' })
                }catch {
                    this.loading = false
                }
            } else {
                console.log('error submit!!')
                return false;
            }
        });
    }
    forgetPassword() {
        this.$router.push('/forget')
    }
}

</script>

<style rel="stylesheet/scss" lang="stylus">
$bg = #2d3a4b;
$light_gray = #eee;
/* reset element-ui css */
.login-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
            &:-webkit-autofill {
                -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: #fff !important;
            }
        }
    }
    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
}
</style>

<style rel="stylesheet/scss" lang="stylus" scoped>
$bg = #2d3a4b;
$dark_gray = #889aa4;
$light_gray = #eee;
.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 520px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
    }
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
        span {
        &:first-of-type {
            margin-right: 16px;
        }
        }
    }
    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
        &_login {
        font-size: 20px;
        }
    }
    .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }
    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
}
</style>
