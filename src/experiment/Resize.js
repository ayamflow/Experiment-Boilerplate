define([], function() {

    return {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        halfScreenWidth: this.screenWidth >> 1,
        halfScreenHeight: this.screenHeight >> 1,

        resize: function() {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            this.halfScreenWidth = this.screenWidth >> 1;
            this.halfScreenHeight = this.screenHeight >> 1;
        }
    };
});