<template>
    <GridLayout rows="320, *">

        <Pager row="0" ref="pagerView" for="group in groups"
            @selectedIndexChange="onSelect($event)" :selectedIndex="selectedIndex">
            <v-template>
                <StackLayout>
                    <Image height="100%" :src="group.Poster" class="thumb" stretch="aspectFit" />
                </StackLayout>
            </v-template>
        </Pager>

            <StackLayout row="1" class="group">
                <Label class="title" :text="group.Name" textWrap="true" />
                <ScrollView row="1">
                    <StackLayout class="info">
                        <Label :text="'Genre : ' + group.genre" textWrap="true" />
                        <Label class="website" :text="group.website" textWrap="true" @tap="openWebsite(group.website)"/>
                        <Label  :text="group.Presentation"  textWrap="true" />
                    </StackLayout>
                </ScrollView>
            </StackLayout>
    </GridLayout>
</template>

<script>

    import * as utils from "tns-core-modules/utils/utils";

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
            selectedGroup() {
                return this.groups[this.selectedIndex];
            }
        },
        methods: {
            onSelect(index) {
                this.$emit("update:selected", index);
            },
            openWebsite(url){
                confirm({
                    title: "Attention",
                    message: `Etes-vous sûr de vouloir être redirigé sur ${url} ?`,
                    okButtonText: "Oui",
                    cancelButtonText: "Annuler"
                }).then((result) => {
                    if(result)
                        utils.openUrl(url);
                });
            }
        }
    };
</script>

<style lang="scss">
    $text-color: #fff;
    $color-disabled: #444444;
    $border-color: #fff;
    $blue: #1a6ef5;

     .group {

        padding: 15px;

        .title {
            font-size: 24px;
            padding: 20px 0;
            margin-bottom: 20px;
            font-weight: bold;
            border-bottom-color: #FED55F;
            border-bottom-width: 2px;
            text-align: center;
        }

        .info *{
            padding: 20px;
            margin: 0 auto;
            text-align: justify;
        }

        .info .website{
            text-decoration: underline
        }
    }
</style>