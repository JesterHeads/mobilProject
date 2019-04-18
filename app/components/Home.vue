<template>
	<Page class="page">
		<ActionBar title="AlterPicture" class="action-bar" />
        <FlexBoxLayout flexDirection="column" justifyContent="center" alignItems="center">
            <Label text="Welcome in our app to alter picture."  class="title-label"></Label>
            <Label text="This is an app developped as a project for our course in Web Technologies for mobility, in other word, learning to develop application for mobil devices." textWrap="true" class="title-label"></Label>
            <Button text="Close" class="btn btn-primary myButton" marginTop="20" @tap="$goTo('app',navOptions)"></Button>
        </FlexBoxLayout>
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
                    curve: "easeIn"
                }
            }
        }
    }
};
</script>

<style scoped>
    .title-label{
        margin : 30px 20px;
        text-align : center;
    }

    .label{
        margin : 0 20px;
        text-align : center;
    }

    .myButton{
        width : 40%;
        border-radius: 50%
    }
</style>
