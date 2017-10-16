<template>
	<div>
		<vhead>
			<span slot="userName">load</span> 
		</vhead>
		<loadMain></loadMain>
		<vfooter></vfooter>
	</div>
</template>

<style type="text/css">
	
</style>

<script type="text/javascript">
	import vfooter from "@/components/vfooter.vue"
	import vhead from "@/components/vhead.vue"
	import loadMain from "@/components/loadMain.vue"
	export default {
		data(){
			return{

			}
		},
		components:{
			vfooter,
			vhead,
			loadMain
		}
	}
</script>