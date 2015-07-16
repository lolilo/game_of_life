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

            for (var y=0; y<this.hegith; y++) {
                for (var x=0; x<this.width; x++) {
                    var neighbors = this.aliveNeighbors(this.prevBoard, x, y)
                }
            }
        },

        aliveNeighbors: function (array, x, y) {
            var prevRow = array[y-1] || [];
            var nextRow = array[y+1] || [];

            return [
                prevRow[x-1], prevRow[x], prevRow[x+1],
                array[y][x-1], array[y][x+1],
                array[y+1][x-1], array[y+1][x], array[y+1][x+1]
            ].reduce(function (prev, curr) {
                return prev + +!!a; // convert to bool, then convert to num 0 or 1
            }, 0);
        },

        toString: function () {
            return this.board.map(function (row) { return row.join(' '); }).join('\n');
        }
    };

    function cloneArray(array) {
        return array.slice().map(function (row) { return row.slice(); });
    }

})();


var game = new Life([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
]);

console.log(game + '');

game.next();

console.log(game + '');
