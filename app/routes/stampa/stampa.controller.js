//@ts-check

/**
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/stampa",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                title: "Stampa"
            };
            req.vueOptions.head.title = `Kongmedia - ${data.title}`;
            req.vueOptions.head.description = "Kongmedia";
            res.renderVue("stampa/stampa.vue", data, req.vueOptions);
        },
    );
};
