<template>
    <ScrollView>
        <StackLayout class="group-list">
            <Label class="group-list__title" text="To Group" />
            <Label class="group-list__subtitle" :text="groupListSubtitle" />
            <FlexboxLayout  flexWrap="wrap">
                <StackLayout v-for="(group, index) in groups" width="30%"
                    :key="index" class="group-list__movie">
                    <Image @tap="onItemTap(group.Title)" :src="group.Poster"
                        height="150" stretch="aspectFill" />
                </StackLayout>
            </FlexboxLayout>
        </StackLayout>
    </ScrollView>
</template>

<script>
    export default {
        name: "GroupList",

        props: {
            groups: {
                type: Array,
                required: true
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
    .group-list {
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