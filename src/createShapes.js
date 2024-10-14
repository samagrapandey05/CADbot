import { useEffect, useState } from 'react'
import opencascade from "../node_modules/opencascade.js/dist/opencascade.full.js"
import opencascadeWasm from "../node_modules/opencascade.js/dist/opencascade.full.wasm?url"
import { visualizeShapes } from "./visualize.js"; 
/*Create Object and Update Statuses*/
export async function createCube(lengthCube, returnMode = 0){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    console.log(lengthCube)
    if (parseFloat(lengthCube) > 0){
        const box = new oc.BRepPrimAPI_MakeBox_2(lengthCube, lengthCube, lengthCube).Shape();
        if (returnMode === 1){
            return box;
        }
        const modelUrl = visualizeShapes(oc, box);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        if (returnMode === 1){
            return "Incorrect Dimensions";
        }
        return {code: false, result: null}
        //setStatus(2)
    }   
}

export async function createSphere(radius, returnMode = 0){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    console.log(radius)
    if (parseFloat(radius) > 0){
        const sphere = new oc.BRepPrimAPI_MakeSphere_1(radius).Shape();
        if (returnMode === 1){
            return sphere;
        }
        const modelUrl = visualizeShapes(oc, sphere);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        if (returnMode === 1){
            return "Incorrect Dimensions";
        }
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createCylinder(radius, height, returnMode = 0){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(radius) > 0 && parseFloat(height) > 0){
        const cylinder = new oc.BRepPrimAPI_MakeCylinder_1(radius, height).Shape();
        if (returnMode === 1){
            return cylinder;
        }
        const modelUrl = visualizeShapes(oc, cylinder);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        if (returnMode === 1){
            return "Incorrect Dimensions";
        }
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createCone(radius, height, returnMode = 0){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(radius) > 0 && parseFloat(height) > 0){
        const cone = new oc.BRepPrimAPI_MakeCone_1(radius, null, height).Shape();
        if (returnMode === 1){
            return cone;
        }
        const modelUrl = visualizeShapes(oc, cone);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        if (returnMode === 1){
            return "Incorrect Dimensions";
        }
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createPyramid(base_length, height, returnMode = 0){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(base_length) > 0 && parseFloat(height) > 0){
        const wedge = new oc.BRepPrimAPI_MakeWedge_3(base_length, height, base_length, base_length/2, base_length/2, base_length/2, base_length/2).Shape();
        if (returnMode === 1){
            return wedge;
        }
        const modelUrl = visualizeShapes(oc, wedge);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        if (returnMode === 1){
            return "Incorrect Dimensions";
        }
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createBox(length, width, height, returnMode = 0){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(length) > 0 && parseFloat(height) > 0 && parseFloat(width) > 0){
        const box = new oc.BRepPrimAPI_MakeBox_2(length, width, height).Shape();
        if (returnMode === 1){
            return box;
        }
        const modelUrl = visualizeShapes(oc, box);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        if (returnMode === 1){
            return "Incorrect Dimensions";
        }
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createTorus(radius1, radius2, returnMode = 0){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(radius1) > 0 && parseFloat(radius2) > 0){
        const torus = new oc.BRepPrimAPI_MakeTorus_1(radius1, radius2).Shape();
        if (returnMode === 1){
            return torus;
        }
        const modelUrl = visualizeShapes(oc, torus);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        if (returnMode === 1){
            return "Incorrect Dimensions";
        }
        return {code: false, result: null}
        //setStatus(2)
    } 
}

export async function createWedge(baselength, basewidth, height, xMax, returnMode = 0){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    
    if (parseFloat(baselength) > 0 && parseFloat(basewidth) > 0 && parseFloat(height) > 0 && parseFloat(xMax) > 0){
        const wedge = new oc.BRepPrimAPI_MakeWedge_1(baselength, height, basewidth, xMax).Shape();
        if (returnMode === 1){
            return wedge;
        }
        const modelUrl = visualizeShapes(oc, wedge);
        return {code: true, result: modelUrl}
        //setShapeModel(modelUrl)
        //setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: modelUrl}])
    }
    else{
        if (returnMode === 1){
            return "Incorrect Dimensions";
        }
        return {code: false, result: null}
        //setStatus(2)
    } 
}
/* Make modification functions extrude, rotation, translation, boolean operations*/
//Extrude: BRepPrimAPI_MakePrism(Topo_DS_Face, gp_vec)
//Rotational Sweep: BRepPrimAPI_MakeRevol_1(Topo_DS_Shape, gp_Ax1_2(gp_Pnt, gp_Dir), double angle)
//Revolution of a curve: BRepPrimAPI_MakeRevolution_4(Handle_Geom_Curve, vMin, vMax, angle)
//Addition: BRepAlgoAPI_Fuse(Topo_DS shape, Topo_DS shape)
//Intersection: BRepAlgoAPI_Common(Topo_DS shape, Topo_DS shape)
//Difference:  BRepAlgoAPI_Cut(Topo_DS shape, Topo_DS shape); 

/* Objects and Data Types: Vertex, Edge, Edge 2D, Face, Polygon, Wire, Shell, Solid*/
//Point: gp_Pnt_3(double x, double y, double z)
//Vertex: BRepBuilderAPI_MakeVertex(gp_Pnt p)
//gp_Pnt2d: gp_Pnt2d_3(double x, double y)
//gp_gp_Vec2d_4(double x, double y)
//gp_Dir2d_2(theV: gp_Vec2d)
//gp_Ax2d: gp_Ax2d_2(theP: gp_Pnt2d, theV: gp_Dir2d)
//Geom2d_Circle_2(A: gp_Ax2d, Radius: number, Sense: boolean)
//import fetch from "node-fetch";
const API_URL = "https://api-inference.huggingface.co/models/gpt2";
const API_KEY = "";
async function generateResponse(prompt){
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: prompt })
        });

        const result = await response.json();
        console.log(result);  // Logs the API response, which contains generated text
        return result;
    } catch (error) {
        console.error("Error:", error);
        return false
    }
}
export async function createCustom(description){
    const oc = await opencascade({
        locateFile: () => opencascadeWasm,
      })
    /*const functions = new Set([
        makeCube, makeBox, makeSphere, makeCylinder, makePyramid, makeCone, makeWedge, makeTorus,
        makeCurve, makeLine, makeCircle, extrude, rotational_sweep, revolve_curve, fuse, common, cut 
    ])*/
    //call the API
    const prompt = "Make a list of commands from (makeCube, makeBox, makeSphere, makeCylinder, makePyramid, makeCone, makeWedge, makeTorus) to make " + description;
    try{
    generateResponse(prompt).then((res)=>{
        console.log(res)
        if (res === false){
            return {code: false, result: null}
        }
        //find the list of relevant functions
        const compound = new oc.TopoDS_Compound();
        const builder = new oc.BRep_Builder();
        builder.MakeCompound(compound);
        var words = res[0].generated_text.split();
        for(var i = 0; i < words.length; i++){
            //make the model
            var word = words[i];
            let curShape = null
            if (word === "makeCube"){
                curShape = createCube(5, 1)
            }
            else if (word === "makeBox"){
                curShape = createBox(5, 5, 5, 1)
            }
            else if (word === "makeSphere"){
                curShape = createSphere(5, 1)
            }
            else if (word === "makeCylinder"){
                curShape = createCylinder(5, 5, 1)
            }
            else if (word === "makePyramid"){
                curShape = createPyramid(5, 5, 1)
            }
            else if (word === "makeCone"){
                curShape = createCone(5, 5, 1)
            }
            else if (word === "makeWedge"){
                curShape = createWedge(5, 5, 5, 3, 1)
            }
            else if (word === "makeTorus"){
                curShape = createTorus(5, 3, 1)
            }
            /*else if (word === "makeCurve"){

            }
            else if (word === "makeLine"){

            }
            else if (word === "makeCircle"){

            }
            else if (word === "extrude"){

            }
            else if (word === "rotational_sweep"){
                
            }
            else if (word === "revolve_curve"){

            }
            else if (word === "fuse"){

            }
            else if (word === "common"){
                
            }
            else if (word === "cut"){

            }*/
            
            if(curShape != null){
                const shell = new oc.BRepBuilderAPI_MakeShell(curShape);
                builder.Add(compound, shell.Shape());
            }
        }
        console.log(compound)
        const modelUrl = visualizeShapes(oc, compound);
        console.log(modelUrl)
        return {code: true, result: modelUrl}
    })
    } catch {
        return {code: false, result: null}
    }
}