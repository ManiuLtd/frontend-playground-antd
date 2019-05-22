<template>
    <div id="app">
        <a-layout id="components-layout-demo-side" style="min-height: 100vh">
            <a-layout-sider
                    collapsible
                    v-model="collapsed"
            >
                <div class="logo"/>
                <a-menu
                        theme="dark"
                        :defaultSelectedKeys="['1']"
                        mode="inline">
                    <a-menu-item
                            @click="() => $router.push('/')"
                            key="1">
                        <a-icon type="windows"/>
                        <span>Nav</span>
                    </a-menu-item>
                    <a-sub-menu
                            key="sub1"
                    >
                        <span slot="title"><a-icon type="user"/><span>Playground</span></span>
                        <a-menu-item
                                @click="() => $router.push(item.path)"
                                v-for="item in routes"
                                :key="item.path">
                            <a-icon :type="item.icon"/>
                            {{item.name}}
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <!--<a-layout-header style="background: #fff; padding: 0">
                    <h3 style="padding-left: 16px;">{{$route.name}}</h3>
                </a-layout-header>-->
                <a-layout-content style="margin: 0 16px">
                    <a-breadcrumb style="margin: 16px 0">
                        <a-breadcrumb-item>Playground</a-breadcrumb-item>
                        <a-breadcrumb-item>{{$route.name}}</a-breadcrumb-item>
                    </a-breadcrumb>
                    <a-card
                        :bordered="false"
                    >
                        <router-view/>
                    </a-card>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    Frank
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                collapsed: false,
                routes: this.$router.options.routes[1].children
            }
        },
        mounted() {
        }
    }
</script>

<style>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }
</style>
