<template>
	<div class="download-page">
		<div class="container">
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<div class="download-wrapper">
						<h1 class="text-center">Entering A Black Hole Music Copyright Free</h1>

						<div class="video mt-5">
							<iframe width="100%" height="315" src="https://www.youtube.com/embed/xkJ3NXcO-PY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>


						<div class="text-center mt-4">
							<button class="btn-default" v-if="getlink == false" @click="showLink">Download</button>
							<span v-else>Wait for {{ countDown }}</span>
							<a v-show="activelink" target="_" :href="video_link">Download The Music</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data(){
			return{
				getlink: false,
				timeout_text: "",
				countDown: 10,
				video_link:"https://youtubetomp3music.com/en16/download?url="+"https://www.youtube.com/watch?v=xkJ3NXcO-PY",
				activelink: false
			}
		},
		methods:{
			showLink(){
				this.getlink = true
				console.log('showlink')
				this.countDownTimer()
				// setTimeout(()=>{
				// 	this.countDownTimer()
				//    	this.timeout_text = "wait for " + this.countDown
				// },1000);
			},

			  countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
            }
		},
		watch:{
			countDown(){
				if(this.countDown == 0){
					this.activelink = true
				}
			}
		}
	}
</script>

<style scoped>
	.download-wrapper{
		padding: 20px
	}
</style>