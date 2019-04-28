<template>
    <Page @swipe="swipe" actionBarHidden="true" androidStatusBarBackground="#FED55F">

        <GridLayout rows="50, *, 50">
            <StackLayout row="0" orientation="horizontal" horizontalAlignment="center">
                <Image height="30" src="~/images/logo.png" stretch="aspectFit"
                    horizontalAlignment="center" class="logo" />
            </StackLayout>
            <Group row="1" v-show="tabIndex === 2" :groups="groups"
                :selected-index="selectedGroupIndex" @update:selected="onSelectedGroup" />
            <GroupList row="1" v-show="tabIndex === 1" :groups="groups"
                @update:tab="onTabChange" @update:selected="onSelectedGroup" />
            <FlexboxLayout row="2" height="50">
                <Image v-for="(tab, index) in tabs"  :key="index" 
                    height="20%" :src="'~/images/menu/' + tab" stretch="aspectFit"
                    width="50%"
                    class="tab" @tap="onTabChange(index)" :class="{ 'is-active': tabIndex === index }"
                    />
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import GroupList from "./GroupList";
    import Group from "./Group";
    import timeline from "../data/timeline.json";

    import GestureTypes from "tns-core-modules/ui/gestures";


    export default {
        name: "App",

        components: {
            GroupList,
            Group
        },

        data() {
            return {
                tabIndex: 1,
                groups: timeline,
                selectedGroupIndex: 0,
                tabs: ["home.png", "list.png", "user.png"]
            };
        },

        methods: {

            onTabChange(index) {
                if(index == 0){
                    this.$goTo('home', {
                        clearHistory: true,
                        backstackVisible: true,
                        transition: {
                            name: "slideRight",
                            duration: 380
                        }
                    });
                }else{
                    this.tabIndex = index;
                }
            },

            onSelectedGroup(index) {
                this.selectedGroupIndex = index;
            },

            swipe(args){
                if(args.direction == 2 && this.tabIndex == 1)
                    this.tabIndex++;
                else if(args.direction == 1 && this.tabIndex == 2)
                    this.tabIndex--;
            }
        }
    };
</script>

<style scoped lang="scss">
    Page {
        background: linear-gradient(to bottom, #1a6ef5, #1839ad, #1839ad);
        color: #fff;
        font-family: Helvetica, sans-serif;
    }

    .logo {
        margin: 20px 0 40px 0;
    }

    .tab {
        text-align: center;
        font-weight: 700;
        font-size: 19px;
        background: #1E243A;
        padding: 40px;

        &.is-active {
            background: #FED55F;
            
        }
    }
</style>