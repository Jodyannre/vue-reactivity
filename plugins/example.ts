export default {
    install: (app: any, option: any) => {
        app.config.globalProperties.$count = 0
        app.config.globalProperties.$saySomething = () => alert(option.message)
    }
}