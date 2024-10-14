import { useEffect, useState } from 'react'
//import opencascade from "opencascade.js/dist/opencascade.full.js"
//import opencascadeWasm from "opencascade.js/dist/opencascade.full.wasm?url"
//import { visualizeShapes } from "./visualize.js"; 
import {createCube, createSphere, createCone, createPyramid, createBox, createCylinder, createTorus, createWedge, createCustom} from './createShapes.js'
import "../node_modules/@google/model-viewer";

function CadBot(props) {
    /* 
    STATE CONTROL:
        - Default page for create new shape
            - Status: 0, numViewing < 0, queryStatus: 0, curShape: null, dim: "", shapeModel: null
        - Clicked a shape button: (NOTE: different version for every shape)
            - Status: 0, numViewing < 0, queryStatus: 1, curShape: shape, dim: "", shapeModel: null
        - Submitted dimensions -> File Loading:
            - Status: 1, numViewing < 0, queryStatus: 0, curShape: shape, dim: dimensions, shapeModel: null
        - Submitted dimensions -> Loaded:
            - Status: 1, numViewing < 0, queryStatus: 0, curShape: shape, dim: dimensions, shapeModel: shapeModel
        - Submitted dimensions -> Invalid Dimension:
            - status: 2, numViewing < 0, queryStatus: 0, curShape: shape, dim: dimensions, shapeModel: null
        - Viewing Prev Dimensions:
            - status: 0, numViewing > 0, queryStatus: 0, curShape: shape, dim: dimensions, shapeModel: shapeModel
    */
    const [status, setStatus] = useState(0) //0 = default, 1 = query submitted; 3: incorrect dimensions
    const [numViewing, setNumViewing] = useState(-1)
    const [queryStatus, setQueryStatus] = useState(0) //0=none selected, 1 = shape selected
    const [prevQueries, setPrevQueries] = useState([])
    const [curShape, setCurShape] = useState(null)
    const [dim, setDim] = useState("")
    const [shapeModel, setShapeModel] = useState(null)
    
    /*Form Buttons*/
    const addCube = () => {
        setQueryStatus(1)
        setCurShape("cube")
    }
    const addSphere = () => {
        setQueryStatus(1)
        setCurShape("sphere")
    }
    const addPrism = () => {
        setQueryStatus(1)
        setCurShape("prism")
        setDim({baselength: "", width: "", height: ""})
    }
    const addPyramid = () => {
        setQueryStatus(1)
        setCurShape("pyramid")
        setDim({baselength: "", height: ""})
    }
    const addCylinder = () => {
        setQueryStatus(1)
        setCurShape("cylinder")
        setDim({radius: "", height: ""})
    }
    const addCone = () => {
        setQueryStatus(1)
        setCurShape("cone")
        setDim({radius: "", height: ""})
    }
    const addWedge = () => {
        setQueryStatus(1)
        setCurShape("wedge")
        setDim({baselength: "", maxLength: "", width: "", height: ""})
    }
    const addTorus = () => {
        setQueryStatus(1)
        setCurShape("torus")
        setDim({r1: "", r2: ""})
    }
    const addCustom = () => {
        setQueryStatus(1)
        setCurShape("custom")
    }
    const handleQuerySubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
        setQueryStatus(0)
        setStatus(1)
    }
    const newElem = () => {
        setQueryStatus(0)
        setNumViewing(-1)
        setStatus(0)
        setCurShape(null)
        setDim("")
        setShapeModel(null)
    }
    /*View Previous Query */
    const viewPrevQuery = (num) => {
        console.log(prevQueries)
        setStatus(0);
        setNumViewing(num);
        setShapeModel(prevQueries[num].shapeModel)
    }
    /*Create Object and Update Statuses after queries are submitted*/
    useEffect(()=>{
        /* If status equals 1, call the backend to make the specified shape*/
        if (status === 1){
            //Call the correct shape, update the status or prevQueries and shapeModel based on the result
            //return of functions should be {code, result}
            if(curShape==="cube"){
                createCube(dim).then((res)=>{
                    console.log("Result", res);
                    if (res.code === false){
                        setStatus(2);
                    }
                    else{
                        setShapeModel(res.result);
                        setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: res.result}])
                    }
                    console.log(shapeModel)
                })
            }
            else if(curShape==="sphere"){
                createSphere(dim).then((res)=>{
                    console.log("Result", res);
                    if (res.code === false){
                        setStatus(2);
                    }
                    else{
                        setShapeModel(res.result);
                        setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: res.result}])
                    }
                    console.log(shapeModel)
                })
            }
            else if (curShape === "prism"){
                let length = dim.baselength
                let width = dim.width
                let height = dim.height
                createBox(length, width, height).then((res)=>{
                    console.log("Result", res);
                    if (res.code === false){
                        setStatus(2);
                    }
                    else{
                        setShapeModel(res.result);
                        setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: res.result}])
                    }
                    console.log(shapeModel)
                })
            }
            else if (curShape === "pyramid"){
                let baselength = dim.baselength
                let height = dim.height
                createPyramid(baselength, height).then((res)=>{
                    console.log("Result", res);
                    if (res.code === false){
                        setStatus(2);
                    }
                    else{
                        setShapeModel(res.result);
                        setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: res.result}])
                    }
                    console.log(shapeModel)
                })
            }
            else if (curShape === "cylinder"){
                let radius = dim.radius
                let height = dim.height
                createCylinder(radius, height).then((res)=>{
                    console.log("Result", res);
                    if (res.code === false){
                        setStatus(2);
                    }
                    else{
                        setShapeModel(res.result);
                        setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: res.result}])
                    }
                    console.log(shapeModel)
                })
            }
            else if (curShape === "cone"){
                let radius = dim.radius
                let height = dim.height
                createCone(radius, height).then((res)=>{
                    console.log("Result", res);
                    if (res.code === false){
                        setStatus(2);
                    }
                    else{
                        setShapeModel(res.result);
                        setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: res.result}])
                    }
                    console.log(shapeModel)
                })
            }
            else if (curShape === "wedge"){
                let baselength = dim.baselength
                let height = dim.height
                let basewidth = dim.width
                let xMax = dim.maxLength
                createWedge(baselength, basewidth, height, xMax).then((res)=>{
                    console.log("Result", res);
                    if (res.code === false){
                        setStatus(2);
                    }
                    else{
                        setShapeModel(res.result);
                        setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: res.result}])
                    }
                    console.log(shapeModel)
                })
            }
            else if (curShape === "torus"){
                let r1 = dim.r1
                let r2 = dim.r2
                createTorus(r1, r2).then((res)=>{
                    console.log("Result", res);
                    if (res.code === false){
                        setStatus(2);
                    }
                    else{
                        setShapeModel(res.result);
                        setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: res.result}])
                    }
                    console.log(shapeModel)
                })
            }
            else if (curShape === "custom"){
                /*createCustom(dim).then((res)=>{
                    console.log("Result", res);
                    if (res == undefined || res.code === false){
                        setStatus(2);
                    }
                    else{
                        setShapeModel(res.result);
                        setPrevQueries([...prevQueries, {number: prevQueries.length, shape:curShape, dimension:dim, shapeModel: res.result}])
                    }
                    console.log(shapeModel)
                })*/
                setStatus(2);
            }
        }
    }, [status])
    useEffect(()=>{
        console.log(shapeModel)
    }, [shapeModel])


    return (
      <div className="cadbotBody">
        <div className="sideBar">
            {/*<div className="Add_Element_Unclicked" onClick={newElem}>
                Add New Query
            </div>*/}
            <div className="Add_Element_Unclicked" onClick={newElem}>
                Add New Query
            </div>
            <div className="previousQueries">
                {(prevQueries.length > 0) ? 
                <ul>
                    {[...prevQueries].map((d) => <button onClick={()=>viewPrevQuery(d.number)} key={d.number}>View Query #{d.number}</button>)} 
                </ul>
                : 
                <p>No Previous Queries to Display</p>}
            </div>
        </div>

        <div className="curQuery">
            {(status === 0 && numViewing < 0 && queryStatus===0) ? 
            <h1 className="curQueryTitle">Choose a Shape or Enter Custom Description</h1>
            :
            (status === 0 && numViewing < 0 && queryStatus===1 && curShape !== "custom") ? 
            <h1 className="curQueryTitle">Choose Dimensions for {curShape}</h1> 
            :
            (status === 0 && numViewing < 0 && queryStatus===1 && curShape === "custom") ? 
            <h1 className="curQueryTitle">Enter Custom Description</h1> 
            :
            (status === 0 && numViewing >= 0) ? 
            <h1 className="curQueryTitle">Veiwing Query #{numViewing}</h1>
            :
            (status === 1 && shapeModel === null) ? 
            <h1 className="curQueryTitle">Loading Shape...</h1>
            :
            (status === 1 && shapeModel !== null) ? 
            <h1 className="curQueryTitle">Showing Query Result</h1>
            :
            (status === 2 && curShape === "custom") ?
            <div>
            <h1 className="curQueryTitle">Error: Unable to Generate Relevant Model.</h1>
            <p className='dimensionLabel'>We apologize for the inconvenience. CADBot is currently in demo version, and custom shape generation capabilities are limited. We are working on refining this feature, and a refined version is coming soon!</p>
            </div>
            :
            <h1 className="curQueryTitle">Error: Invalid Dimensions</h1> 
            }

            {(status === 0 && queryStatus === 0 && numViewing < 0) ? 
            <div className='shapeButtons'>
                <button onClick={addCube} className='shapeButton'>Cube</button>
                <button onClick={addSphere} className='shapeButton'>Sphere</button>
                <button onClick={addPrism} className='shapeButton'>Box</button>
                <button onClick={addPyramid} className='shapeButton'>Pyramid</button>
                <button onClick={addCylinder} className='shapeButton'>Cylinder</button>
                <button onClick={addCone} className='shapeButton'>Cone</button>
                <button onClick={addWedge} className='shapeButton'>Wedge</button>
                <button onClick={addTorus} className='shapeButton'>Torus</button>
                <button onClick={addCustom} className='shapeButton'>Enter Custom Description</button>
            </div>
            :
            (status === 0 && queryStatus === 1 && numViewing < 0 && curShape === "cube") ?
            <div className='divEnterDimension'>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Cube Length:
                        <input type = "text" value = {dim} onChange={(e)=>setDim(e.target.value)} className='dimTextbox'/>
                    </label>
                    <input type='submit' className='dimensionSubmit'/>
                </form>
                <button onClick={newElem} className='dimensionCancel'>Cancel</button>
            </div>
            :
            (status === 0 && queryStatus === 1 && numViewing < 0 && curShape === "sphere") ?
            <div className='divEnterDimension'>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Sphere Radius:
                        <input type = "text" value = {dim} onChange={(e)=>setDim(e.target.value)} className='dimTextbox'/>
                    </label>
                    <input type='submit' className='dimensionSubmit'/>
                </form>
                <button onClick={newElem} className='dimensionCancel'>Cancel</button>
            </div>
            :
            (status === 0 && queryStatus === 1 && numViewing < 0 && curShape === "prism") ?
            <div className='divEnterDimension'>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Prism Length:
                        <input type = "text" value = {dim.baselength} onChange={(e)=>setDim(dim => ({...dim, baselength: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Prism Width:
                        <input type = "text" value = {dim.width} onChange={(e)=>setDim(dim => ({...dim, width: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Prism Height:
                        <input type = "text" value = {dim.height} onChange={(e)=>setDim(dim => ({...dim, height: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <button onClick={handleQuerySubmit}>Submit</button>
                <button onClick={newElem} className='dimensionCancel'>Cancel</button>
            </div>
            :
            (status === 0 && queryStatus === 1 && numViewing < 0 && curShape === "cylinder") ?
            <div className='divEnterDimension'>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Cylinder Radius:
                        <input type = "text" value = {dim.radius} onChange={(e)=>setDim(dim => ({...dim, radius: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Cylinder Height:
                        <input type = "text" value = {dim.height} onChange={(e)=>setDim(dim => ({...dim, height: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <button onClick={handleQuerySubmit}>Submit</button>
                <button onClick={newElem} className='dimensionCancel'>Cancel</button>
            </div>
            :
            (status === 0 && queryStatus === 1 && numViewing < 0 && curShape === "cone") ?
            <div className='divEnterDimension'>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Cone Radius:
                        <input type = "text" value = {dim.radius} onChange={(e)=>setDim(dim => ({...dim, radius: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Cone Height:
                        <input type = "text" value = {dim.height} onChange={(e)=>setDim(dim => ({...dim, height: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <button onClick={handleQuerySubmit}>Submit</button>
                <button onClick={newElem} className='dimensionCancel'>Cancel</button>
            </div>
            :
            (status === 0 && queryStatus === 1 && numViewing < 0 && curShape === "pyramid") ?
            <div className='divEnterDimension'>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Pyramid Base Length:
                        <input type = "text" value = {dim.baselength} onChange={(e)=>setDim(dim => ({...dim, baselength: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Pyramid Height:
                        <input type = "text" value = {dim.height} onChange={(e)=>setDim(dim => ({...dim, height: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <button onClick={handleQuerySubmit}>Submit</button>
                <button onClick={newElem} className='dimensionCancel'>Cancel</button>
            </div>
            :
            (status === 0 && queryStatus === 1 && numViewing < 0 && curShape === "torus") ?
            <div className='divEnterDimension'>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter R1:
                        <input type = "text" value = {dim.r1} onChange={(e)=>setDim(dim => ({...dim, r1: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter R2:
                        <input type = "text" value = {dim.r2} onChange={(e)=>setDim(dim => ({...dim, r2: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <button onClick={handleQuerySubmit}>Submit</button>
                <button onClick={newElem} className='dimensionCancel'>Cancel</button>
            </div>
            :
            (status === 0 && queryStatus === 1 && numViewing < 0 && curShape === "wedge") ?
            <div className='divEnterDimension'>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Wedge Base Length:
                        <input type = "text" value = {dim.baselength} onChange={(e)=>setDim(dim => ({...dim, baselength: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Wedge Base Width:
                        <input type = "text" value = {dim.width} onChange={(e)=>setDim(dim => ({...dim, width: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Wedge Height:
                        <input type = "text" value = {dim.height} onChange={(e)=>setDim(dim => ({...dim, height: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Wedge maxLength:
                        <input type = "text" value = {dim.maxLength} onChange={(e)=>setDim(dim => ({...dim, maxLength: e.target.value}))} className='dimTextbox'/>
                    </label>
                </form>
                <button onClick={handleQuerySubmit}>Submit</button>
                <button onClick={newElem} className='dimensionCancel'>Cancel</button>
            </div>
            :
            (status === 0 && queryStatus === 1 && numViewing < 0 && curShape === "custom") ?
            <div className='divEnterDimension'>
                <form onSubmit={handleQuerySubmit} className='dimensionForm'>
                    <label className='dimensionLabel'> Enter Description:
                        <input type = "text" value = {dim} onChange={(e)=>setDim(e.target.value)} className='dimTextbox'/>
                    </label>
                    <input type='submit' className='dimensionSubmit'/>
                </form>
                <button onClick={newElem} className='dimensionCancel'>Cancel</button>
            </div>
            :
            ((status === 1 || numViewing >= 0) && shapeModel === null ) ?
            null
            :
            ((status === 1 || numViewing >= 0)) ?
            <div>
            <model-viewer src={shapeModel} camera-controls enable-pan />
            <a href={shapeModel} download="model.glb">Download File</a>
            </div>
            :
            null
            }
            
        </div>
      </div>
    )
  }
  
  export default CadBot