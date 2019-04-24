<template>
    <ScrollView>
        <StackLayout class="watch-list">
            <Label class="watch-list__title" text="To watch" />
            <Label class="watch-list__subtitle" :text="watchListSubtitle" />
            <FlexboxLayout v-if="toWatchList.length" flexWrap="wrap">
                <StackLayout v-for="(movie, index) in toWatchList" width="30%"
                    :key="index" class="watch-list__movie">
                    <Image @tap="onItemTap(movie.Title)" :src="movie.Poster"
                        height="150" stretch="aspectFill" />
                </StackLayout>
            </FlexboxLayout>
            <StackLayout v-else>
                <AbsoluteLayout width="290" verticalAlignment="center"
                    horizontalAlignment="center">
                    <Image width="290" src="~/images/bye.png" stretch="aspectFit" />
                    <Label top="320" left="50">
                        <FormattedString>
                            <Span text="Marvel will return" fontWeight="bold" style="font-size: 24px"/>
                        </FormattedString>
                    </Label>
                </AbsoluteLayout>
            </StackLayout>
        </StackLayout>
    </ScrollView>
</template>

<script>
    export default {
        name: "WatchList",

        props: {
            movies: {
                type: Array,
                required: true
            }
        },

        computed: {
            toWatchList() {
                return this.movies.filter(movie => !movie.watched);
            },

            watchListSubtitle() {
                if (!this.toWatchList.length) {
                    return "You watched all the movies!";
                }
                return `${this.toWatchList.length} to watch`;
            }
        },

        methods: {
            onItemTap(title) {
                const index = this.movies.findIndex(movie => movie.Title ===
                    title);
                this.$emit("update:selected", index);
                this.$emit("update:tab", 0);
            }
        }
    };
</script>

<style lang="scss">
    .watch-list {
        padding: 30px;

        &__title {
            font-size: 29px;
            font-weight: 700;
        }

        &__subtitle {
            font-size: 16px;
            padding: 20px 10px;
        }

        &__movie {
            margin: 0 10px 20px;
        }

    }
</style>