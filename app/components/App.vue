<template>
    <Page actionBarHidden="true" androidStatusBarBackground="#FED55F">

        <GridLayout rows="50, *, 50">
            <StackLayout row="0" orientation="horizontal" horizontalAlignment="center">
                <Image height="30" src="~/images/logo.png" stretch="aspectFit"
                    horizontalAlignment="center" />
            </StackLayout>
            <Group row="1" v-show="tabIndex === 2" :groups="groups"
                :selected-index="selectedGroupIndex" @update:selected="onSelectedGroup" />
            <GroupList row="1" v-show="tabIndex === 1" :groups="groups"
                @update:tab="onTabChange" @update:selected="onSelectedGroup" />
            <FlexboxLayout row="2" height="60">
                <Image v-for="(tab, index) in tabs"  :key="index" 
                    height="5" :src="'~/images/menu/' + tab" stretch="aspectFit"
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
    import groups from "../data/groups.json";

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
                groups: groups,
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

    .tab {
        text-align: center;
        font-weight: 700;
        font-size: 19px;
        padding : 500px;
        background: #1E243A;

        &.is-active {
            background: #FED55F;
            
        }
    }
</style>