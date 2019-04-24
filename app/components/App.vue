<template>
    <Page actionBarHidden="true" androidStatusBarBackground="#1a6ef5">
        <GridLayout rows="50, *, 50">
            <StackLayout row="0" orientation="horizontal" horizontalAlignment="center">
                <Image height="30" src="~/images/logo.png" stretch="aspectFit"
                    horizontalAlignment="center" class="logo" />
            </StackLayout>


            <MoviesTimeline row="1" v-show="tabIndex === 0" :movies="movies"
                :selected-index="selectedMovieIndex" @update:selected="onSelectedMovie" />

            <WatchList row="1" v-show="tabIndex === 1" :movies="movies"
                @update:tab="onTabChange" @update:selected="onSelectedMovie" />


            <FlexboxLayout row="2" height="60">
                <Button v-for="(tab, index) in tabs" :key="index" width="50%"
                    :text="tab" class="tab" @tap="onTabChange(index)" :class="{ 'is-active': tabIndex === index }" />
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import WatchList from "./WatchList";
    import MoviesTimeline from "./MoviesTimeline";
    import timeline from "../data/timeline.json";

    export default {
        name: "App",

        components: {
            WatchList,
            MoviesTimeline
        },

        data() {
            return {
                tabIndex: 0,
                movies: timeline,
                selectedMovieIndex: 0,
                tabs: ["Timeline", "Watch list"]
            };
        },

        methods: {
            onSelectedIndexChange(index) {
                this.tabIndex = index.value;
            },

            onTabChange(index) {
                this.tabIndex = index;
            },

            onSelectedMovie(index) {
                this.selectedMovieIndex = index;
            }
        }
    };
</script>

<style scoped lang="scss">
    Page {
        background: linear-gradient(to bottom, #1a6ef5, #252323, #000);
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
        background: #000;
        color: #fff;
        text-transform: capitalize;

        &.is-active {
            background: #1a6ef5;
            color: #fff;
        }
    }
</style>