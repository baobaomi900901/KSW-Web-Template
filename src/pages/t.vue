<template>
    <div class="KRPOMTemplat flex text-white">
      <div class="menu-left bg-blue-400">左侧菜单</div>
      <!-- 左侧菜单-黄色 -->
      <div class="page bg-yellow-500 flex flex-col">
        <!-- 一级页签-灰色 -->
        <div class="first-page-tab bg-gray-300"></div>
        <!-- 一级页签-深灰色 -->
        <div class="second-page-tab bg-gray-500"></div>
        <!-- 内容区-白色 -->
        <div class="content-area bg-white">
          <!-- 左侧视图-绿色 -->
          <div class="content-left-view bg-green-500"></div>
          <!-- 右侧内容 -->
  
  
          <div class="content-right border-green-500">
            <!-- 控制区 -->
            <div class="content-right-controls text-black bg-slate-700">
              <div class="left">
                <div class="page-title">标题</div>
                <div class="data-description">数据描述</div>
              </div>
              <div class="right">
                <div class="main-buttons bg-blue-300">主要按钮</div>
                <div class="secondary-buttons bg-blue-200">次要按钮</div>
              </div>
            </div>
            <!-- 右侧数据容器 -->
            <div class="content-data-area border-yellow-500 border-8">
              <!-- 筛选条件, 绝对定位, 橙色 -->
              <div class="content-data-area-filter bg-orange-500">筛选条件</div>
              <!-- table红色 -->
              <div class="content-data-area-table bg-red-500">表格容器</div>
              <!-- 分页 -->
              <div class="content-data-area-pagination bg-purple-500">分页器</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>