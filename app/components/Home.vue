<template>
	<Page actionBarHidden="true" androidStatusBarBackground="#1a6ef5">
            <StackLayout orientation="vertical" horizontalAlignment="center">
                <Image height="30" src="~/images/logo.png" stretch="aspectFit"
                    horizontalAlignment="center" class="logo" />
				<Label marginLeft="25" marginRight="25" text="Bienvenue dans notre application mobile"></Label>
            	<Label marginLeft="25" marginRight="25" text="Le but de cette application est d'une part de mettre nos connaissances sur nativeScript à l'oeuvre, et d'autre part présenter des groupes de musiques que nous aimons" textWrap="true"></Label>
            	<Button  text="Close" class="btn btn-primary" marginTop="20" @tap="$goTo('app',navOptions)"></Button>
            </StackLayout>
	</Page>
</template>

<script>
export default {
	computed :{
        navOptions(){
            return {
                clearHistory: true,
                backstackVisible: true,
                transition: {
                    name: "fade",
                    duration: 380,
                    curve: "easeOut"
                }
            }
        }
    }
}
</script>

<style scoped>
	Page {
        background: linear-gradient(to bottom, #1a6ef5, #252323, #000);
        color: #fff;
        font-family: Helvetica, sans-serif;
    }

    .logo {
        margin: 20px 0 40px 0;
    }
</style>

