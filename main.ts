let mySprite = sprites.create(img`
    . . . . . . . . . . . . . 2 2 . . . . . . . . .
    . . . . f f f . . . . . 2 3 3 2 . f f f . . . .
    . . . f 1 1 1 f f f f 2 3 3 3 3 2 1 1 1 f . . .
    . . . f 1 1 1 1 1 1 1 2 3 3 3 2 2 2 1 1 f . . .
    . . . f 1 1 1 1 1 1 1 2 3 3 2 3 3 3 2 2 2 . . .
    . . . . f 1 1 1 1 1 1 1 2 2 2 3 3 3 2 3 3 2 . .
    . . . f 1 1 1 1 1 1 1 1 1 1 1 2 2 2 3 3 3 2 . .
    . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 2 3 3 2 . . .
    . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 . . . .
    f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f
    . . f 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 f . .
    . f f f 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 f f f .
    . . . f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f . . .
    . . f f 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 f f . .
    . . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . . . .
    . . . . . f f 1 1 1 1 1 1 1 1 1 1 f f . . . . .
    . . . . . . . f f f f f f f f f f . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
