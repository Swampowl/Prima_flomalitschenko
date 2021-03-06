"use strict";
var L01_FirstFudge;
(function (L01_FirstFudge) {
    var ƒ = FudgeCore;
    let node = new ƒ.Node("testKnot");
    console.log("HeLlO wOrlD!");
    console.log(node);
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        const canvas = document.querySelector("canvas");
        ƒ.Debug.log(canvas);
        let node = new ƒ.Node("Quad");
        let mesh = new ƒ.MeshQuad();
        let cmpMesh = new ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        let mtrSolidWhite = new ƒ.Material("SolidWhite", ƒ.ShaderUniColor, new ƒ.CoatColored(ƒ.Color.CSS("WHITE")));
        let cmpMaterial = new ƒ.ComponentMaterial(mtrSolidWhite);
        node.addComponent(cmpMaterial);
        let cmpCamera = new ƒ.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(2);
        cmpCamera.mtxPivot.rotateY(180);
        L01_FirstFudge.viewport = new ƒ.Viewport();
        L01_FirstFudge.viewport.initialize("Viewport", node, cmpCamera, canvas);
        ƒ.Debug.log(L01_FirstFudge.viewport);
        L01_FirstFudge.viewport.draw();
    }
})(L01_FirstFudge || (L01_FirstFudge = {}));
//# sourceMappingURL=index.js.map