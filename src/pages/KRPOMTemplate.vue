<!--
* @description  
* @fileName  KRPOMDemo
* @author userName
* @date 2023-06-29 16:53:21
* @version V3.0.0
!-->
<template>
  <div class="KRPOMTempla w-full h-full flex flex-1 text-white">
    <div class="menu-left bg-blue-400">左侧菜单</div>
    <!-- 左侧菜单-黄色 -->
    <div class="page w-full h-full flex-1 flex flex-col bg-yellow-500">
      <!-- 一级页签-灰色 -->
      <div class="first-page-tab w-full bg-gray-300"></div>
      <!-- 一级页签-深灰色 -->
      <div class="second-page-tab bg-gray-500"></div>
      <!-- 内容区-白色 -->
      <div class="content-area flex-1 w-full h-full flex bg-gray-300">
        <!-- 左侧内容-视图-绿色 -->
        <div class="content-left-view h-full bg-green-500"></div>
        <!-- 右侧内容-红色 -->
        <div class="content-right flex-1 w-full flex flex-col bg-red-500">
          <!-- 控制区 -->
          <div
            class="content-right-controls text-black flex justify-between pl-1 pr-4 py-3 bg-slate-700"
          >
            <div class="left">
              <div class="page-title mb-2">标题</div>
              <div class="data-description">数据描述</div>
            </div>
            <div class="right flex-1 flex flex-col justify-end">
              <div class="main-buttons flex justify-end bg-blue-300">
                主要按钮
              </div>
              <div class="secondary-buttons mt-2 flex justify-end bg-blue-200">
                次要按钮
              </div>
            </div>
          </div>

          <!-- 右侧数据容器 -->
          <div class="content-data-area flex-1 relative flex flex-col">
            <!-- 筛选条件, 绝对定位, 橙色 -->
            <div
              class="content-data-area-filter absolute top-0 right-0 h-full bg-orange-500"
            >
              筛选条件
            </div>
            <!-- table红色 -->
            <div class="content-data-area-table flex-1 bg-red-500">表格容器</div>
            <!-- 分页 -->
            <div class="content-data-area-pagination bg-purple-500">分页器</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import KHeaderTitle1 from "../components/KHeaderTitle1.vue";
</script>

<style scoped>
.KRPOMTemplat {
}
.menu-left {
  width: 240px;
}
.page {
}

.first-page-tab {
  height: 48px;
}
.second-page-tab {
  width: 100%;
  height: 40px;
}
.content-area {
}
.content-left-view {
  width: 240px;
}
.content-right {
}
.content-right-controls {
  height: 96px;
}

.content-right-controls .left {
}

.content-right-controls .left .page-title {
  height: 32px;
}

.content-right-controls .left .data-description {
  height: 32px;
}

.content-right-controls .right {
}

.content-right-controls .right .main-buttons {
  height: 32px;
}

.content-right-controls .right .secondary-buttons {
  height: 32px;
}

.content-data-area {
}

.content-data-area-filter {
  width: 280px;
}
.content-data-area-table {
}
.content-data-area-pagination {
  height: 56px;
}
</style>