//@ts-check

/**
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/contatti",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                title: "Contatti"
            };
            req.vueOptions.head.title = `Kongmedia - ${data.title}`;
            req.vueOptions.head.description = "Kongmedia";
            res.renderVue("contatti/contatti.vue", data, req.vueOptions);
        },
    );
};
