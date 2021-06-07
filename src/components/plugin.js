import plugin from "@/components/plugin.vue"

const myPlugin = {
  install: function(Vue) {
    const plug = Vue.extend(plugin)
    const instance = new plug()

    
    Vue.prototype.$myPlugin = (msg,val) => {
      instance.$mount(document.createElement('div'))
      msg.appendChild(instance.$el) // 放入msg容器
      instance.val = val.name
      instance.rmb = val.rmb
      instance.rate = val.rate
    }
  }
}

export default myPlugin