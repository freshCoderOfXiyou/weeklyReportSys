<template >
	<div id="loadMain">
		<!--  -->
		<div id="loadInner">
			<h4>welcome to weekly report sys!</h4>
			<div id="loadForm">
				<div id="choose">
					<div id="chooseLoad" @click="choose(1)">load</div>
					<div id="chooseRegister" @click="choose(2)">register</div>
				</div>
				<div id="userId">
					<label for="userId">user id:</label>
					<input type="text" name="userId" v-model="userId">		
				</div>
				<div id="userLabel" v-show='registerArea'>
					<label for="userName">user name:</label>
					<input type="text" name="userName"  v-model="username">
				</div>
				<div id="userPswLabel">
					<label for="userPsw">user psw:</label>
					<input type="password" name="userPsw" v-model="userpsw">
				</div>
				<div id="confirmPswLabel" v-show='registerArea'>
					<label for="userPswConfrim">psw confirm:</label>
					<input type="password" name="userPswConfrim" v-model="confirmpsw">
				</div>
				<div id="work" v-show='registerArea'>
					<div v-for="item in work">
						<input type="checkbox" :name="item.ename" v-model="item.check" :id='item.ename'>
						<label :for="item.ename">{{item.cname}}</label>
					</div>
				</div>
				<div id="submitDiv" @click="subInfo">
					<button id="submitBtn">submit</button>
				</div>
				<!-- <p>
					{{work}}
				</p> -->
				<div id="alert" v-show="inputError">
					The password isn't same , please input again.
				</div>
			</div>
		</div>
	</div>	
</template>

<style type="text/css">
	#loadMain{
		width: 100%;
		background: yellow;
	}
		#choose{

		}
		#choose>div{
			float: left;
			width: 150px;
			margin-right: 5px;
			background: green;
		}
		#loadInner{
			width: 1190px;
			background: #ececec;
			margin:0 auto;
			height: 500px;
			position: relative;
		}
		#loadForm{
			width: 500px;
			height: 350px;
			background: white;
			position: absolute;
			right: 60px;
			top: 60px;
		}
		#loadForm>div{
			width: 400px;
			height: 50px;
			line-height: 50px;
			background: yellow;
		}
		#work>div{
			float: left;
		}
		#alert{
			color:red;
		}
</style>

<script type="text/javascript">	
import axios from "axios"
export default {

	data(){
		return{
			registerArea:false,
			username:"jiangyy",
			userpsw:"123",
			confirmpsw:"123",
			inputError:false,
			userId:"7003",
			selectedWork:[],
			/*work:['电影','电视剧','少儿','娱乐','体育','新闻','爱学习','记录','爱爸妈','健身','音乐','爱宠','财经','栏目','点播','高清','游戏','芒果','电竞','大片','首页','播控','杭州生活','个人中心','杭州发布']*/
			work:[{ename:"movie",cname:'电影',check:false},{ename:"series",cname:'电视剧',check:false},{ename:"child",cname:'少儿',check:false},{ename:"entertain",cname:'娱乐',check:false},{ename:"sport",cname:'体育',check:false},{ename:"news",cname:'新闻',check:false},{ename:"loveLearn",cname:'爱学习',check:false}]
		}
	},
	methods:{
		subInfo() {
			var fristPsw = this.userpsw;
			var secondPsw = this.confirmpsw;
			this.inputError = ! (fristPsw === secondPsw) 
			var thisName = this.username
			for (var i = this.work.length - 1; i >= 0; i--) {
				if (this.work[i].check) {
					this.selectedWork[i]=this.work[i].ename	
				}	
			}
			if (this.inputError) {
				this.inputError = true 
				return	
			}
			if (this.registerArea) {
				console.log("for register api")
				axios.post("/apiregister/register",{
						name:this.username,
						psw:this.userpsw,
						id:this.userId,
						work:this.selectedWork
					})
					.then((res)=>{
						console.log(res.data)
					})
					.catch(function (error) {
					    console.log(error);
					});
			}
			else{
				axios.post("/apiregister/load",{
					psw:this.userpsw,
					id:this.userId
				}).then((res)=>{
					console.log(res.data)
				})
				.catch((err)=>{
					console.error(err)
				})
			}

		},
		choose(arg){
			if (arg == 1) {
				this.registerArea = false
			}else{
				this.registerArea = true 
			}

		}
	}
}
</script>
