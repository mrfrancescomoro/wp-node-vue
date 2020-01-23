//@ts-check

/**
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/televisione",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                title: "Televisione"
            };
            req.vueOptions.head.title = `Kongmedia - ${data.title}`;
            req.vueOptions.head.description = "Kongmedia";
            res.renderVue("televisione/televisione.vue", data, req.vueOptions);
        },
    );
};
