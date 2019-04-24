<template>
    <Page actionBarHidden="true" androidStatusBarBackground="#eb2328">
        <GridLayout rows="50, *, 50">
            <StackLayout row="0" orientation="horizontal" horizontalAlignment="center">
                <Image height="30" src="~/images/marvel-logo.png" stretch="aspectFit"
                    horizontalAlignment="center" class="logo" />
            </StackLayout>
            <Group row="1" v-show="tabIndex === 0" :groups="groups"
                :selected-index="selectedGroupIndex" @update:selected="onSelectedGroup" />
            <GroupList row="1" v-show="tabIndex === 1" :groups="groups"
                @update:tab="onTabChange" @update:selected="onSelectedGroup" />
            <FlexboxLayout row="2" height="60">
                <Button v-for="(tab, index) in tabs" :key="index" width="50%"
                    :text="tab" class="tab" @tap="onTabChange(index)" :class="{ 'is-active': tabIndex === index }" />
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import GroupList from "./GroupList";
    import Group from "./Group";
    import timeline from "../data/timeline.json";

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
                tabs: ["Group", "Group list"]
            };
        },

        methods: {
            onSelectedIndexChange(index) {
                this.tabIndex = index.value;
            },

            onTabChange(index) {
                this.tabIndex = index;
            },

            onSelectedGroup(index) {
                this.selectedGroupIndex = index;
            }
        }
    };
</script>

<style scoped lang="scss">
    Page {
        background: linear-gradient(to bottom, #eb2328, #252323, #000);
        color: #fff;
        font-family: Helvetica, sans-serif;
    }

    .logo {
        margin: 20px 0;
    }

    .tab {
        text-align: center;
        font-weight: 700;
        font-size: 19px;
        background: #000;
        color: #fff;
        text-transform: capitalize;

        &.is-active {
            background: #fff;
            color: #000;
        }
    }
</style>