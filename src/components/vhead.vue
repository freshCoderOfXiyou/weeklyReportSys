<template>
	<div id="headerArea">
		<div id="headerInnerArea">
			<span>this is my header</span>
			<span id="headerExit">exit</span>
			<span id="headerName">
				<slot name="userName" ></slot>
			</span>
		</div>
	</div>
</template>
<style type="text/css">
	#headerArea{
		width: 100%;
		height: 35px;
		background: #C12127;
	}
	#headerInnerArea{
		width: 1190px;
		height: 100%;
		margin:0 auto;
		/*background: black;*/
		line-height: 35px;
		color:white;
	}
		#headerName{
			float: right;
			margin-right: 10px;
		}
		#headerExit{
			float: right;
			margin-right:20px;

		}
</style>
<script type="text/javascript">
	export default {
		data(){
			return{

			}
		},
		methods:{

		},
		components:{
			
		}
	}
</script>