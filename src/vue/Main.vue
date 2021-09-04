<template>
	<div class="root">
        <theme-controller ref="tc" />
		<title-bar title="Axeri" />

        <app>
            <template v-slot:sidebar>
                <side-rail>
                    <template v-slot:top>
                        <side-rail-button icon="home" />
                    </template>
                </side-rail>

                <side-bar>
                    <side-bar-link>Home</side-bar-link>
                </side-bar>
            </template>
        </app>
	</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Ref } from "vue-property-decorator";

export default class Main extends Vue {
    @Ref("tc") tc!: any;

    public mounted() {
        this.tc.loadTheme("Dark");
    }
}
</script>