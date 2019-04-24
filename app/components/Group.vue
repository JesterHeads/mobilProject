<template>
    <GridLayout rows="320, *">
        <Pager row="0" ref="pagerView" for="group in groups"
            @selectedIndexChange="onSelect($event)" :selectedIndex="selectedIndex">
            <v-template>
                <StackLayout>
                    <AbsoluteLayout width="224" height="320"
                        horizontalAlignment="center">
                        <Image top="" height="100%" :src="group.Poster" class="thumb groups-timeline__item"
                            :class="{ 'is-watched': group.watched }" stretch="aspectFit" />
                        <Image v-show="group.watched" left="70" top="130"
                            height="70" stretch="aspectFit" src="~/images/tick.png" />
                    </AbsoluteLayout>
                </StackLayout>
            </v-template>
        </Pager>
        <ScrollView row="1">
            <StackLayout class="groups-timeline__group" :class="{ 'is-watched': group.watched }">
                <Label class="groups-timeline__title" :text="group.Title"
                    textWrap="true" />
                <FlexboxLayout justifyContent="space-between">
                    <Label class="groups-timeline__total">
                        <FormattedString>
                            <Span text="Group: " />
                            <Span :text="selectedIndex + 1" fontWeight="bold" />
                            <Span :text="` of ${groupsCount}`" />
                        </FormattedString>
                    </Label>
                    <Button class="groups-timeline__button" :text="watchedButtonLabel"
                        @tap="onButtonTap" />
                </FlexboxLayout>
                <Label class="groups-timeline__desc" :text="group.Plot"
                    textWrap="true" />
            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
    export default {
        name: "Group",

        props: {
            groups: {
                type: Array,
                required: true
            },
            selectedIndex: {
                type: Number,
                required: true
            }
        },

        computed: {
            group() {
                return this.groups[this.selectedIndex];
            },

            groupsCount() {
                return this.groups.length;
            },

            watchedButtonLabel() {
                return this.group.watched ? "Add to watch list" :
                    "Watched it";
            },

            selectedGroup() {
                return this.groups[this.selectedIndex];
            }
        },
        methods: {
            onButtonTap() {
                const selectedGroup = this.groups[this.selectedIndex];
                const currentToWatch = selectedGroup.watched;

                this.$set(
                    this.groups,
                    this.selectedIndex,
                    Object.assign(selectedGroup, {
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

    .selectedGroups-timeline {

        &__item {
            opacity: 1;

            &.is-watched {
                opacity: 0.5;
            }
        }


        &__selectedGroup {
            padding: 40px;
            color: $text-color;

            &.is-watched {
                color: $color-disabled;

                .selectedGroups-timeline__total {
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