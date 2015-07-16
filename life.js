(function() {

    var _ = self.Life = function(seed) {
        this.seed = seed;
        this.height = seed.length;
        this.width = seed[0].length;

        this.prevBoard = [];
        this.board = cloneArray(seed)
    };

    _.prototype = {
        next: function () {
            this.prevBoard = cloneArray(this.board)
        },

        toString: function () {

        }
    };

    function cloneArray(array) {
        return array.slice().map(function (row) { return row.slice(); });
    }

})();



var game = new Life([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]);

console.log(game);

game.next();

console.log(game);
