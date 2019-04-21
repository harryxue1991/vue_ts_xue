import MsRender from './ms-render';

MsRender.install = function(Vue) {
    Vue.component(MsRender.name, MsRender);
};

export default MsRender;