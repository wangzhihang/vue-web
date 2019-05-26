<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>AGV</template>
						<el-menu-item index="AGVManage">AGV管理</el-menu-item>
						<el-menu-item index="callManage">呼叫管理站</el-menu-item>
						<el-menu-item index="lineManage">线路管理</el-menu-item>
						<el-menu-item index=sitegroupManage>站点群管理</el-menu-item>
						<el-menu-item index="systemManage">系统配置</el-menu-item>
						<el-menu-item index="userManage">用户</el-menu-item>
					</el-submenu>
					<!-- <el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i></template>
						<el-menu-item>呼叫站</el-menu-item>
						<el-menu-item>按钮</el-menu-item>
						<el-menu-item>任务流</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-plus"></i>线路管理</template>
						<el-menu-item>新增站点</el-menu-item>
						<el-menu-item>添加线路</el-menu-item>
						<el-menu-item>删除对象</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-plus"></i>站点群管理</template>
						<el-menu-item>站点群</el-menu-item>
						<el-menu-item>站点</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-plus"></i>系统配置</template>
						<el-menu-item>呼叫站</el-menu-item>
						<el-menu-item>按钮</el-menu-item>
						<el-menu-item>任务流</el-menu-item>
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-message"></i>用户</template>
						<el-menu-item>呼叫站</el-menu-item>
						<el-menu-item>按钮</el-menu-item>
						<el-menu-item>任务流</el-menu-item>
					</el-submenu> -->
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	
</style>
