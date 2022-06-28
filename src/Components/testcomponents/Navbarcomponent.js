import "../../style/Navbarcomponent.css"

const Navbarcomponent = () => {
    const imgSet = [
    {
        imgDirect:"./assets/camera-icon.png",
        show: true,
    },
    {
        imgDirect:"./assets/instagram.png",
        show: true,
    },
    {
        imgDirect:"./assets/home-icon.png",
        show: true,
    },
    {
        imgDirect:"./assets/Direct.png",
        show: true,
    },
    {
        imgDirect:"./assets/Direct.png",
        show: true,
    },
    {
        imgDirect:"./assets/Direct.png",
        show: true,
    },
    {
        imgDirect:"./assets/Direct.png",
        show: true,
    }
    ]

    return (
        <div className="navbar-component">
            <img src={imgSet[0].imgDirect} />
            <img src={imgSet[1].imgDirect} />
            <img src={imgSet[2].imgDirect} />
            <img src={imgSet[3].imgDirect} />
            <img src={imgSet[4].imgDirect} />
        </div>
    )
}

export default Navbarcomponent;