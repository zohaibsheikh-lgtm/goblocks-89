// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a00100001000100000000000000010001000000000000000100010000000000000001000100000000000000010001000000000101000100010001010101010001000100010100000100010001000101000001010100010001010001010101000100010100010000010001000001000100000100010000010001000001000101010100010000010000010100010100000100000000000101000001010101010101010000`, img`
2 . 2 . . . . . . . 
2 . 2 . . . . . . . 
2 . 2 . . . . . . . 
2 . 2 . . . . . . . 
2 . 2 . . . . 2 2 . 
2 . 2 . 2 2 2 2 2 . 
2 . 2 . 2 2 . . 2 . 
2 . 2 . 2 2 . . 2 2 
2 . 2 . 2 2 . 2 2 2 
2 . 2 . 2 2 . 2 . . 
2 . 2 . . 2 . 2 . . 
2 . 2 . . 2 . 2 . . 
2 . 2 2 2 2 . 2 . . 
2 . . 2 2 . 2 2 . . 
2 . . . . . 2 2 . . 
2 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
