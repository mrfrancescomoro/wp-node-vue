//@ts-check

/**
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/outofhome",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                title: "Out Of Home"
            };
            req.vueOptions.head.title = `Kongmedia - ${data.title}`;
            req.vueOptions.head.description = "Kongmedia";
            res.renderVue("outofhome/outofhome.vue", data, req.vueOptions);
        },
    );
};
