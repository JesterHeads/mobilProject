<template>
	<Page class="page">
		<ActionBar title="AlterPicture"></ActionBar>
		<StackLayout>
			<Button text="Take a picture" class="btn btn-primary" marginTop="20"></Button>
            <Image :src="pictureFromCamera" width="300" height="300" stretch="aspectFit"></Image>
		</StackLayout>
	</Page>
</template>

<script>
import * as camera from "nativescript-camera";
import * as http from "http";
export default {
	data() {
		return {
			pictureFromCamera: null,
		};
	},
	methods: {
		takePicture() {
			// See the options at https://github.com/NativeScript/nativescript-camera#using-the-options-to-take-memory-efficient-picture
			// for more information on how to customize the pictures you take.
			camera.takePicture({ width: 300, height: 300, keepAspectRatio: true }).then(imageAsset => {
				this.pictureFromCamera = imageAsset;
			})
			.catch(err => {
				console.log("Error -> " + err.message);
			});
		}
	}
}
</script>

<style scoped>
	.questionButton{
		border : 10px solid blue;
		border-radius : 50%
	}
</style>
