<template>
  	<div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		  		<div class="manage_tip">
		  			<p>AGV管理系统</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" placeholder="用户名"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
				<p class="tip">温馨提示：</p>
				<p class="tip">登陆名:admin</p>
				<p class="tip">密码:admin</p>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
	import {mapActions, mapState} from 'vuex'
	import api from '../utils/api.js'
	import md5 from 'js-md5'
	import { error } from 'util';

	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					password: '',
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
			}
		},
		mounted(){
			this.showLogin = true;
		},
		computed: {
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						this.$router.push('manage')
						// this.$http({
						// 	url:'http://192.168.10.221:8088/auth/login',
						// 	params:{
						// 		username:this.loginForm.username,
						// 		password:md5(this.loginForm.password)
						// 	}
						// }).then(function(res){
						// 	this.$router.push('manage')
						// }).catch(err => {
						// 	console.log('请求接口访问失败')
						// 	this.$message({
		                //         type: 'error',
		                //         message: '请求接口访问失败'
		                //     });
						// })
						console.log('api'+api)
						api.getLoginIn(this.loginForm.username,md5(this.loginForm.password))
						.then(result=>{
							console.log(result.data)
						}).catch(error=>{
							console.log(er)
						})
						
						
					} else {
						this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 100
						});
						return false;
					}
				});
			},
		}
		// watch: {
		// 	adminInfo: function (newValue){
		// 		if (newValue.id) {
		// 			this.$message({
        //                 type: 'success',
        //                 message: '检测到您之前登录过，将自动登录'
        //             });
		// 			this.$router.push('manage')
		// 		}
		// 	}
		// }
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.login_page{
		background-color: #324057;
	}
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
		p{
			font-size: 34px;
			color: #fff;
		}
	}
	.form_contianer{
		.wh(320px, 210px);
		.ctp(320px, 210px);
		padding: 25px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
		.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	}
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
