<template>
	<Page actionBarHidden="true" androidStatusBarBackground="#FED55F">
            <FlexboxLayout flexDirection="column" justifyContent="space-between">
                <Image height="150" src="~/images/logo-max.png" stretch="aspectFit"
                    horizontalAlignment="center" class="logo" />

                <StackLayout margin="20">
                    <Label class="desc" text="Bienvenue dans notre application mobile"></Label>
                    <Label class="desc" text="Le but de cette application est d'une part de mettre nos connaissances sur NativeScript à l'oeuvre, et d'autre part présenter des groupes de musiques que nous aimons" textWrap="true"></Label>
            	</StackLayout>

                <Button  text="Découvrir" class="btn-yellow" margin="20" @tap="$goTo('app',navOptions)"></Button>
            </FlexboxLayout>
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
                    name: "slide",
                    duration: 380
                }
            }
        }
    }
}
</script>

<style scoped>
	Page {
        background: linear-gradient(to bottom, #1a6ef5, #1839ad, #1839ad);
        color: #fff;
		font-family: Helvetica, sans-serif;
    }

    .logo {
        margin: 20px 0 40px 0;
    }

    .desc{
        background: #fff;
        color : #1E243A;
        padding: 40px;
        border-radius: 4px;
        margin: 20px 20px;
        width: 100%;
    }

    .btn-yellow{
        background: #FED55F;
        border-radius: 4px;
        color: #1E243A
    }
</style>

