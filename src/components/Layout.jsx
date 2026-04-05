import Particles from "./Particles"

const Layout = () => {
  return (
   <div className = "fixed inset-0 z-0">
        <Particles
    particleColors={["#ffffff"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}     
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={true}
    disableRotation={false}
/>
</div>
  )
}

export default Layout