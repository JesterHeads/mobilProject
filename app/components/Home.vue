<template>
	<Page actionBarHidden="true" androidStatusBarBackground="#FED55F">
            <FlexboxLayout flexDirection="column" justifyContent="space-between">
                <Image height="150" src="~/images/logo-max.png" stretch="aspectFit"
                    horizontalAlignment="center" marginTop="10"/>

                <StackLayout margin="0 20">
                    <Label class="desc" text="Bienvenue dans notre projet pour le cours de Technologies Web pour la mobilité"  textWrap="true"></Label>
                    <Label class="desc" text="Le but de cette application est d'une part d'explorer les possibilités offertes par NativeScript pour le développement d'applications mobiles native, et d'autre part présenter des groupes de musiques que nous aimons." textWrap="true"></Label>
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

    .desc{
        background: #fff;
		color : #1E243A;
		padding : 30px;
		margin : 20 0;
		word-wrap: break-word;
        border-radius: 4px;
        width: 100%;
    }

    .btn-yellow{
        background: #FED55F;
        border-radius: 4px;
        color: #1E243A
    }
</style>

