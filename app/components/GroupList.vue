<template>
    <ScrollView>
        <StackLayout class="group-list">
            <Label class="group-list__title" text="To Group" />
            <FlexboxLayout flexWrap="wrap" justifyContent="center">
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
                const index = this.groups.findIndex(group => group.Title ===
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
            margin-bottom : 26px
        }

        &__movie {
            margin: 0 10px 20px;
        }

    }
</style>