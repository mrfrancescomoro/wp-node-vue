//@ts-check

/**
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/radio",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                title: "Radio"
            };
            req.vueOptions.head.title = `Kongmedia - ${data.title}`;
            req.vueOptions.head.description = "Kongmedia";
            res.renderVue("radio/radio.vue", data, req.vueOptions);
        },
    );
};
