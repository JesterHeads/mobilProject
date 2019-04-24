<template>
    <GridLayout rows="320, *">
        <Pager row="0" ref="pagerView" for="movie in movies"
            @selectedIndexChange="onSelect($event)" :selectedIndex="selectedIndex">
            <v-template>
                <StackLayout>
                    <AbsoluteLayout width="224" height="320"
                        horizontalAlignment="center">
                        <Image top="" height="100%" :src="movie.Poster" class="thumb movies-timeline__item"
                            :class="{ 'is-watched': movie.watched }" stretch="aspectFit" />
                        <Image v-show="movie.watched" left="70" top="130"
                            height="70" stretch="aspectFit" src="~/images/tick.png" />
                    </AbsoluteLayout>
                </StackLayout>
            </v-template>
        </Pager>
        <ScrollView row="1">
            <StackLayout class="movies-timeline__movie" :class="{ 'is-watched': movie.watched }">
                <Label class="movies-timeline__title" :text="movie.Title"
                    textWrap="true" />
                <FlexboxLayout justifyContent="space-between">
                    <Label class="movies-timeline__total">
                        <FormattedString>
                            <Span text="Movie: " />
                            <Span :text="selectedIndex + 1" fontWeight="bold" />
                            <Span :text="` of ${moviesCount}`" />
                        </FormattedString>
                    </Label>
                    <Button class="movies-timeline__button" :text="watchedButtonLabel"
                        @tap="onButtonTap" />
                </FlexboxLayout>
                <Label class="movies-timeline__desc" :text="movie.Plot"
                    textWrap="true" />
            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
    export default {
        name: "Timeline",

        props: {
            movies: {
                type: Array,
                required: true
            },
            selectedIndex: {
                type: Number,
                required: true
            }
        },

        computed: {
            movie() {
                return this.movies[this.selectedIndex];
            },

            moviesCount() {
                return this.movies.length;
            },

            watchedButtonLabel() {
                return this.movie.watched ? "Add to watch list" :
                    "Watched it";
            },

            selectedMovie() {
                return this.movies[this.selectedIndex];
            }
        },
        methods: {
            onButtonTap() {
                const selectedMovie = this.movies[this.selectedIndex];
                const currentToWatch = selectedMovie.watched;

                this.$set(
                    this.movies,
                    this.selectedIndex,
                    Object.assign(selectedMovie, {
                        watched: !currentToWatch
                    })
                );
                this.$refs.pagerView.nativeView.refresh(true);
            },

            onSelect(index) {
                this.$emit("update:selected", index);
            }
        }
    };
</script>

<style lang="scss">
    $text-color: #fff;
    $color-disabled: #444444;
    $border-color: #fff;
    $marvel-red: #1a6ef5;

    .movies-timeline {

        &__item {
            opacity: 1;

            &.is-watched {
                opacity: 0.5;
            }
        }


        &__movie {
            padding: 40px;
            color: $text-color;

            &.is-watched {
                color: $color-disabled;

                .movies-timeline__total {
                    color: $color-disabled;
                }
            }
        }

        &__title {
            font-size: 24px;
            padding: 0 0 15px;
            margin: 0 0 15px;
            font-weight: bold;
            border-bottom-color: $marvel-red;
            border-bottom-width: 2px;
        }

        &__button {
            font-size: 16px;
            color: $text-color;
            background: $marvel-red;
            border-radius: 8px;
            height: 50px;
            padding: 0 10px;
            text-transform: capitalize;
        }

        &__total {
            font-size: 16px;
            padding: 10px;
            background: #fff;
            color: #000;
        }

        &__desc {
            font-size: 13px;
            margin-top: 30px;
        }
    }
</style>