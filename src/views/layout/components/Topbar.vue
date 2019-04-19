<template>
    <div class="topbar">
        <div class="topbar-logo">项目管理平台</div>
        <div class="userinfo">
            用户：
            <el-dropdown>
                <span style="margin-right: 20px; font-size: 16px; color: #fff; cursor: pointer;">
                    {{users.truename}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="resetPsd">修改密码</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-button style="margin-right: 20px; color: #fff" @click="logout" type="text">退出</el-button>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class'

@Component
export default class Topbar extends Vue {
    @Getter('getUsers') public users!: any
    @Action('FedLogOut') public FedLogOut!: any
    async logout() {
        try {
            await this.FedLogOut()
            location.reload()
        }catch {

        }
    }
    resetPsd() {
        this.$router.push('/reset-psd')
    }
}
</script>

<style lang="stylus" scoped>
    .topbar {
        height: 60px;
        line-height: 60px;
        background-color: #0099FF ;
        border-bottom: 1px solid #e9ecf3;
        &-logo {
            float: left;
            padding-left: 20px;
            color: #ffffff;
        }
    }

    .avatar-container {
        height: 50px;
        display: inline-block;
        position: absolute;
        right: 35px;
        .avatar-wrapper {
            cursor: pointer;
            margin-top: 5px;
            position: relative;
            .user-avatar {
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }
            .el-icon-caret-bottom {
                position: absolute;
                right: -20px;
                top: 25px;
                font-size: 12px;
            }
        }
    }

    .userinfo {
        float: right;
        color: #fff;
    }
</style>

