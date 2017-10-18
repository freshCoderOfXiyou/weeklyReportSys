<template >
	<div id="loadMain">
		<!--  -->
		<div id="loadInner">
			<h4>welcome to weekly report sys!</h4>
			<div id="loadForm">
				<div id="userLabel">
					<label for="userName">user name:</label>
					<input type="text" name="userName">
				</div>
				<div id="userPswLabel">
					<label for="userPsw">user psw:</label>
					<input type="password" name="userPsw">
				</div>
				<div id="confirmPswLabel">
					<label for="userPswConfrim">psw confirm:</label>
					<input type="password" name="userPswConfrim">
				</div>
				<div id="submitDiv" @click="subInfo">
					<button id="submitBtn">submit</button>

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
</style>

<script type="text/javascript">	
export default {
	data(){
		return{

		}
	},
	methods:{
		subInfo() {
			console.log("sub")
		}
	}
}
</script>
