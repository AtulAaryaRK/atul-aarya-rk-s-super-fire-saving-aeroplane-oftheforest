sprites.on_fire_created(function (location) {
    scene.createParticleEffectAtLocation(location, effects.fire)
    sprites.set_flame_strength(location, 5)
    music.knock.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Fire Plane 2 Left Animation`,
    700,
    true
    )
})
sprites.on_fire_destroyed(function (location) {
    scene.clearParticleEffectsAtLocation(location)
    tiles.setTileAt(location, assets.tile`burnt tree`)
    music.thump.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Fire Plane 2 Right Animation`,
    700,
    true
    )
})
scene.onOverlapTile(SpriteKind.Water, assets.tile`tree fire`, function (sprite, location) {
    sprite.destroy()
    sprites.change_flame_strength_by(location, -1)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.spray(mySprite, assets.image`water`)
})
let mySprite: Sprite = null
game.set_health_of_trees(7)
game.set_strength_of_wind(3)
game.set_dryness_of_grass(3)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Fire Plane 2 Right`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 10; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}
hud.fire_hud(true)
hud.danger_hud(true)
hud.forest_hud(true)
hud.forest_hud_healthy(7)
hud.forest_hud_burned(2)
game.onUpdate(function () {
    sprites.random_spread()
})
