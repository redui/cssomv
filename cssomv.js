var cssomv = {
    getPositionInDocument: function(node) {
        var offsetParent = node.offsetParent;
        var top = 0;
        var left = 0;
        while (offsetParent) {
            top += node.offsetTop;
            left += node.offsetLeft;
            node = offsetParent;
            offsetParent = node.offsetParent;
        }
        return {
            left: left,
            top: top
        };
    },
    getPositionInViewport: function(node) {
        var documentLeft = this.getDocumentLeft();
        var documentTop = this.getDocumentTop();
        var positionInDocument = this.getPositionInDocument(node);
        var leftInViewport = positionInDocument.left - documentLeft;
        var topInViewport = positionInDocument.top - documentTop;
        return {
            left: leftInViewport,
            top: topInViewport
        }
    },
    getDocumentLeft: function() {
        return document.documentElement.scrollLeft || document.body.scrollLeft;
    },
    getDocumentTop: function() {
        return document.documentElement.scrollTop || document.body.scrollTop;
    },
    getViewportWidth: function() {
        return document.documentElement.clientWidth;
    },
    getViewportHeight: function() {
        return document.documentElement.clientHeight;
    },
    isInViewport: function(node) {
        var viewportWidth = this.getViewportWidth();
        var viewportHeight = this.getViewportHeight();
        var positionInViewport = this.getPositionInViewport(node);
        return positionInViewport.top < viewportHeight && positionInViewport.left < viewportWidth
    }
}