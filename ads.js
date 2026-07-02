(function () {

    const ads = {

        banner300() {
            this.load({
                width:300,
                height:250
            });
        },

        banner728() {
            this.load({
                width:728,
                height:90
            });
        },

        banner468() {
            this.load({
                width:468,
                height:60
            });
        },

        banner320() {
            this.load({
                width:320,
                height:50
            });
        },

        banner160x300() {
            this.load({
                width:160,
                height:300
            });
        },

        banner160x600() {
            this.load({
                width:160,
                height:600
            });
        },

        load(opt){

            const container=document.currentScript.parentElement;

            container.style.display="flex";
            container.style.justifyContent="center";
            container.style.width="100%";
            container.style.margin="20px auto";
            container.style.overflow="hidden";

            // Tempat memuat script iklan sesuai dokumentasi resmi penyedia.

        }

    };

    window.Ads = ads;

})();
