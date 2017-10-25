<template>
<div id="operaMain">
	<vhead></vhead>
	<div id="operaMainMid">
	<span>{{nowYear}}</span>
	<span>{{nowMonth}}</span>
	<span>{{nowDate}}</span>
	<input type="month" name="" v-model="dateValue">
	<div id="operationLine">
		<span id="operLineIndex">1</span>
		<span id="operLineChoose">
			<span v-for="items in chooseJson">
				<span>{{items}}</span>
			</span>
		</span>
	</div>
	</div>
	<vfooter></vfooter>
</div>
</template>
<style type="text/css">
#operaMain{

}
#operaMainMid{
	width: 1190px;
	height: 600px;
	margin: 0 auto;
	background: #eee;
}
#operationLine{
	width: 90%;
	margin: 0 auto;
	background: blue;
}
</style>
<script type="text/javascript">
	import vfooter from "@/components/vfooter.vue"
	import vhead from "@/components/vhead.vue"
	var testJson = ["life","sports","series","film"]
	export default {
		data(){
			return{
				nowDate:"chushi",
				nowYear:"chushi",
				nowMonth:"chushi",
				testDate:"2017-10",
				dateValue:"2017-09",
				chooseJson:["life","sports","series","film"]
			}
		},
		methods:{

		},
		components:{
			vfooter,
			vhead
		},
		mounted:function(){
			this.nowDate = new Date()
			this.nowYear = this.nowDate.getFullYear()
			var tempMon = this.nowDate.getMonth()+1
			this.nowMonth = ( tempMon < 10 ) ? "0"+tempMon : tempMon
			var tempDate = this.nowYear + "-" + this.nowMonth
			this.dateValue = tempDate
			console.log(this.nowDate)
			console.log(this.nowYear)
			console.log(this.nowMonth)
			console.log(this.dateValue)
		}
	}
</script>