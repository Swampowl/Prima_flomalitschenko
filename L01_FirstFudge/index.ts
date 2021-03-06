namespace L01_FirstFudge {
  import ƒ = FudgeCore;
  let node: ƒ.Node = new ƒ.Node("testKnot");
  console.log("HeLlO wOrlD!");
  console.log(node);
  window.addEventListener("load", hndLoad);
  export let viewport: ƒ.Viewport;

  function hndLoad(_event: Event): void {
      const canvas: HTMLCanvasElement = document.querySelector("canvas");
      ƒ.Debug.log(canvas);

      let node: ƒ.Node = new ƒ.Node("Quad");

      let mesh: ƒ.MeshQuad = new ƒ.MeshQuad();
      let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(mesh);
      node.addComponent(cmpMesh);
      
      let mtrSolidWhite: ƒ.Material = new ƒ.Material("SolidWhite", ƒ.ShaderUniColor, new ƒ.CoatColored(ƒ.Color.CSS("WHITE")));
      let cmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(mtrSolidWhite);
      node.addComponent(cmpMaterial);

      let cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
      cmpCamera.mtxPivot.translateZ(2);
      cmpCamera.mtxPivot.rotateY(180);

      viewport = new ƒ.Viewport();
      viewport.initialize("Viewport", node, cmpCamera, canvas);
      ƒ.Debug.log(viewport);

      viewport.draw();
  }
  
}