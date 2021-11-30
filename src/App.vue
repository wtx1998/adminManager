<script setup lang="ts">
    // setInterval(()=>{
		// 	    Expires = uni.getStorageSync('ExpiresIn')
		// 	    AuthTime=uni.getStorageSync('IssueTime')
		// 	    var currentTime = new Date();    //结束时间  
		// 	    var diffTime =Math.ceil((currentTime.getTime() - new Date(AuthTime).getTime())/1000)+60;
		// 		if(diffTime>Expires){
		// 		  uni.request({
		// 		  	url:API_URL+'Auth/Refresh?tk='+uni.getStorageSync('token'),
		// 			method:'POST',
		// 			success:(res)=> {
		// 				uni.setStorageSync("token", res.data.accessToken)
		// 				uni.setStorageSync('IssueTime',res.data.issueTime)	
		// 			  }
		// 			})
		// 		}
		// 	},3000)
</script>

<template>
	<router-view />
</template>

<style>
#app {
	width: 100%;
	height: 100%;
}
</style>
