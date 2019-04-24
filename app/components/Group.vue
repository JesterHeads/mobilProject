<template>
    <GridLayout rows="320, *">

        <Pager row="0" ref="pagerView" for="group in groups"
            @selectedIndexChange="onSelect($event)" :selectedIndex="selectedIndex">
            <v-template>
                <StackLayout>
                    <Image top="" height="100%" :src="group.Poster" class="thumb groups-timeline__item" stretch="aspectFit" />
                </StackLayout>
            </v-template>
        </Pager>

        <ScrollView row="1">
            <StackLayout class="groups-timeline__group">
                <Label class="groups-timeline__title" :text="group.Title" textWrap="true" />
                <Label class="groups-timeline__genre" text="Genre : Disco, Reggae" textWrap="true" />
                <Label class="groups-timeline__desc"  :text="group.Plot"  textWrap="true" />
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
    $blue: #1a6ef5;

    .groups-timeline__group {

        padding: 10px;

        .groups-timeline__title {
            font-size: 24px;
            padding: 20px 0;
            margin-bottom: 20px;
            font-weight: bold;
            border-bottom-color: $blue;
            border-bottom-width: 2px;
            text-align: center;
        }


        .groups-timeline__desc{
            padding: 20px;
            margin: 0 auto;
            text-align: justify;
        }
    }
</style>