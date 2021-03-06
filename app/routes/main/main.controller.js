//@ts-check

/**
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {};
            req.vueOptions.head.title = "Kongmedia";
            req.vueOptions.head.description = "Kongmedia";
            res.renderVue("main/main.vue", data, req.vueOptions);
        },
    );
};
