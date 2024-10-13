import { useEffect, useState } from 'react'
import opencascade from "../node_modules/opencascade.js/dist/opencascade.full.js"
import opencascadeWasm from "../node_modules/opencascade.js/dist/opencascade.full.wasm?url"
import { visualizeShapes } from "./visualize.js"; 
/*Create Object and Update Statuses*/
export async function createCube(lengthCube){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    console.log(lengthCube)
    if (parseFloat(lengthCube) > 0){
        const box = new oc.BRepPrimAPI_MakeBox_2(lengthCube, lengthCube, lengthCube).Shape();
        const modelUrl = visualizeShapes(oc, box);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        return {code: false, result: null}
        //setStatus(2)
    }   
}

export async function createSphere(radius){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    console.log(radius)
    if (parseFloat(radius) > 0){
        const sphere = new oc.BRepPrimAPI_MakeSphere_1(radius).Shape();
        const modelUrl = visualizeShapes(oc, sphere);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createCylinder(radius, height){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(radius) > 0 && parseFloat(height) > 0){
        const cylinder = new oc.BRepPrimAPI_MakeCylinder_1(radius, height).Shape();
        const modelUrl = visualizeShapes(oc, cylinder);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createCone(radius, height){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(radius) > 0 && parseFloat(height) > 0){
        const cone = new oc.BRepPrimAPI_MakeCone_1(radius, null, height).Shape();
        const modelUrl = visualizeShapes(oc, cone);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createPyramid(base_length, height){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(base_length) > 0 && parseFloat(height) > 0){
        const wedge = new oc.BRepPrimAPI_MakeWedge_3(base_length, height, base_length, base_length/2, base_length/2, base_length/2, base_length/2).Shape();
        const modelUrl = visualizeShapes(oc, wedge);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createBox(length, width, height){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(length) > 0 && parseFloat(height) > 0 && parseFloat(width) > 0){
        const box = new oc.BRepPrimAPI_MakeBox_2(length, width, height).Shape();
        const modelUrl = visualizeShapes(oc, box);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createTorus(radius1, radius2){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(radius1) > 0 && parseFloat(radius2) > 0){
        const torus = new oc.BRepPrimAPI_MakeTorus_1(radius1, radius2).Shape();
        const modelUrl = visualizeShapes(oc, torus);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createWedge(baselength, basewidth, height, xMax){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(baselength) > 0 && parseFloat(basewidth) > 0 && parseFloat(height) > 0 && parseFloat(xMax) > 0){
        const wedge = new oc.BRepPrimAPI_MakeWedge_1(baselength, height, basewidth, xMax).Shape();
        const modelUrl = visualizeShapes(oc, wedge);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        return {code: false, result: null}
        //setStatus(2)
    } 
}