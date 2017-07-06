/**
 * Created by Administrator on 2017/7/6.
 */


import Route1 from '../vue/componets/Route1.vue';
import Route2 from '../vue/componets/Route2.vue';
export default {
   //配置路由信息,最终导出
    routes:[
        {path:'/index',component:Route1},
        {path:"/list",component:Route2}
    ]
}