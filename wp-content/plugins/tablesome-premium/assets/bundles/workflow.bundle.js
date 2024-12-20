(() => {
    var n = {
        init: function() {
            this.eventListeners()
        },
        eventListeners: function() {
            var n = this;
            ["wpcf7mailsent", "submit_success", "forminator:form:submit:success", "gform_confirmation_loaded", "fluentform_submission_success"].forEach((function(t) {
                jQuery(document).on(t, (function(t) {
                    n.formRedirection()
                }))
            }))
        },
        formRedirection: function() {
            jQuery.get(tablesome_ajax_object.ajax_url, {
                action: "get_redirection_data",
                nonce: tablesome_ajax_object.nonce,
                dataType: "JSON"
            }, (function(n) {
                if ("success" == n.status && 0 != n.data.length) {
                    var t = n.data.filter((function(n) {
                            return !0 === n.open_in_new_tab
                        })),
                        e = n.data.filter((function(n) {
                            return !1 === n.open_in_new_tab
                        }));
                    t.length > 0 && t.forEach((function(n) {
                        window.open(n.url, "_blank")
                    })), e.length > 0 && e.forEach((function(n) {
                        setTimeout((function() {
                            window.location.replace(n.url)
                        }), 1e3)
                    }))
                }
            }))
        }
    };
    jQuery(document).ready((function() {
        n.init()
    }))
})();