import path from"path";import filePathOneLayer from"file-path-one-layer";async function lift(){let t=this.controllers={};(await filePathOneLayer(path.join(this.projectPath,"controllers"))).forEach(e=>{let a=require(e.path);t[e.name]=a.default?a.default:a})}export default lift;
//# sourceMappingURL=bundle.esm.js.map
