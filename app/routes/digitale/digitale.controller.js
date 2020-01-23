//@ts-check

/**
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/digitale",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                title: "Digitale"
            };
            req.vueOptions.head.title = `Kongmedia - ${data.title}`;
            req.vueOptions.head.description = "Kongmedia";
            res.renderVue("digitale/digitale.vue", data, req.vueOptions);
        },
    );
};
