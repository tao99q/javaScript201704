/**
 * Created by Administrator on 2017/7/6.
 */
//通过import导入需要的模块 类似script标签中src导入文件
//导入node_modules中的模块不需要写node_modules文件夹名,直接写node_modules里面的文件夹的名字
import Vue from 'vue/dist/vue'
import App from '../vue/App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import 'animate.css';
//所有的路由都写在了route.js中,所以需要导入进来
import routes from './route';
const router=new VueRouter(routes);
const app=new Vue({
    router,
    el:"#app",
    components:{App}
});