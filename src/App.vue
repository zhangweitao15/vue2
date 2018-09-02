<template>
  <div id="myapp">
      <!-- header -->
      <app-header></app-header>
      <div class="container-fluid">
        <div class="row">
          <!-- sidebar -->
          <app-sidebar></app-sidebar>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <!-- AppList -->
            <!-- <app-list></app-list> -->
            <!-- 路由渲染的位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// 导入AppHeader组件
import AppHeader from  './components/AppHeader';
// 导入 AppSidebar 组件
import AppSidebar from  './components/AppSidebar';
// 导入list组件 
import AppList from  './components/AppList';
// Es6 中模块化的语法 导出一个对象
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    AppHeader,
    AppSidebar
    // 'app-list': AppList
  }
}
</script>

<style>

</style>
