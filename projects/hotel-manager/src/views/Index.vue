<template>
  <div class="index">
    <div class="left">
      <h2>Bing酒店综合平台</h2>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#142334"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><User /></el-icon>
            <span>账号管理</span>
          </template>
          <el-menu-item index="1-1">角色管理</el-menu-item>
          <el-menu-item index="1-2">用户管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><House /></el-icon>
            <span>客房管理</span>
          </template>
          <el-menu-item index="2-1">房型管理</el-menu-item>
          <el-menu-item index="2-2">房间管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>客户管理</span>
          </template>
          <el-menu-item index="3-1">入住管理</el-menu-item>
          <el-menu-item index="3-2">客户订单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="4-1">菜单管理</el-menu-item>
          <el-menu-item index="4-2">字典管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="right">
      <div class="top">
        <el-menu
          :ellipsis="false"
          mode="horizontal"
          active-text-color="#ffd04b"
          background-color="#142334"
          text-color="#fff"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="3">消息</el-menu-item>
          <el-menu-item index="4">订单</el-menu-item>
          <el-sub-menu index="2">
            <template #title>管理员</template>
            <el-menu-item index="2-1">个人中心</el-menu-item>
            <el-menu-item index="2-2">修改密码</el-menu-item>
            <el-menu-item index="2-3">退出系统</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
      <div class="content">3</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, House, Document, Setting } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  display: flex;
  .left {
    width: 200px;
    background-color: #142334;
    color: #fff;
    h2 {
      font-size: 18px;
      font-family: FangSong;
      text-align: center;
      height: 60px;
      line-height: 60px;
    }
    .el-menu {
      border-right: none;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .top {
      height: 60px;
      background-color: #142334;
      display: flex;
      justify-content: flex-end;
      .el-menu {
        border-bottom: none;
      }
    }
    .content {
      flex: 1;
      padding: 5px;
    }
  }
}
</style>
