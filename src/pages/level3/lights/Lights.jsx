import { Color} from "three";

const Lights = () => {
    return <>
        {/** Luz del nivel */}
        <ambientLight
            color={new Color("#BE1E1E")}
            intensity={0.4}
            position={[0,0,-100]}            
        />
        {/** Punto de inicio */}
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.6}
            position={[0, 1, 0]}
            angle = {Math.PI}
        />
        {/** Recompensas a lo largo del mapa */}
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[-20, 0.5, -6]}
            angle = {Math.PI}
        />       
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[10, 2.5, -220]}
            angle = {Math.PI}
        />       
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[3, 2.5, -93]}
            angle = {Math.PI}
        />             
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[-7, 0.5, -100]}
            angle = {Math.PI}
        />      
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[20, 2.5, -93]}
            angle = {Math.PI}
        />           
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[10, 0.5, -40]}
            angle = {Math.PI}
        />
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[2, 0.2, -75]}
            angle = {Math.PI}
        />
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[9, 0.2, -73]}
            angle = {Math.PI}
        />
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[-2.5, 0.5, -178]}
            angle = {Math.PI}
        />             
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[-6, 0.2, -189]}
            angle = {Math.PI}
        />
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.5}
            position={[-6, 0.2, -192]}
            angle = {Math.PI}
        />        
        {/** Recompensa especial (?) */}        
        <pointLight
            castShadow={true}        
            color={new Color("#FFF700")}
            intensity={1}
            position={[-15, 5, -230]}
        />           
        <directionalLight            
            castShadow={true}
            position={[40, 20, 80]}
            color={new Color("#3D0808")}
            intensity={2}
        />
        {/** Enemigos */}
        <spotLight            
            position={[-17, 0.5, -60]}
            color={new Color("#DF5009")}
            intensity={1}
            angle={Math.PI}
        />         
        <spotLight            
            position={[-17, 0.5, -130]}
            color={new Color("#DF5009")}
            intensity={1}
            angle={Math.PI}
        />
        <spotLight            
            position={[-5, 0.5, -152]}
            color={new Color("#DF5009")}
            intensity={1}
            angle={Math.PI}
        />           
        {/** Pelea final */}        
        <spotLight
            castShadow={true}   
            position={[-5, 5, -250]}
            color={new Color("#DF5009")}
            intensity={50}
            angle={Math.PI}
        />           
    </>
}
export default Lights;