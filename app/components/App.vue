<template>
	<Page class="page">
		<ActionBar title="AlterPicture"></ActionBar>
		<StackLayout>
			<Button text="Take a picture" class="btn btn-primary" marginTop="20" @tap="takePicture"></Button>
            <Image :src="pictureFromCamera" width="300" height="300" stretch="aspectFit"></Image>
			<Button v-if="pictureFromCamera" text="Save on device" class="btn btn-primary" marginTop="30" @tap="savePic"></Button>
		</StackLayout>
	</Page>
</template>

<script>
import * as camera from "nativescript-camera";
import * as http from "http";

const imgSource = require("image-source")
const imgAsset = require("image-asset")
const fileSystem = require ("file-system")
const platform = require("platform")
const dialog = require("tns-core-modules/ui/dialogs")

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
		},
		savePic(){
			
			imgSource.fromAsset(this.pictureFromCamera).then((img) => {
				UIImageWriteToSavedPhotosAlbum(img)
				this.alert()
			}).finally(()=>
				dialog.alert({
					title : "the picture has been saved in your photo gallery",
					okButtonText : "OK"
				})
			)
		},
	}
}
</script>

<style scoped>
	.questionButton{
		border : 10px solid blue;
		border-radius : 50%
	}
</style>
