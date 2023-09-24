import bottomcloud1 from '../img/bottom_cloud_left.PNG'
import bottomcloud2 from '../img/bottom_cloud_left2.PNG'
import bottomcloud3 from '../img/bottom_cloud_left3.PNG'

const LEFT_CLOUDS = [
    bottomcloud1,
    bottomcloud2,
    bottomcloud2,
]

const RIGHT_CLOUDS = [
    bottomcloud3,
    bottomcloud2,
    bottomcloud2,
]

function LoadCloud({ show }) {
    // show = true;
    return <div>
        {LEFT_CLOUDS.map((lc, i) => {
            return <img src={lc} style={{
                width: "60vw", position: "fixed", bottom: `${(30 / LEFT_CLOUDS.length) * (i - 0.6)}vh`,
                transition: "left 2s", left: show ? 0 : "-100vw"
            }} />
        })}
        {RIGHT_CLOUDS.map((rc, i) => {
            return <img src={rc} style={{
                width: "60vw", position: "fixed", bottom: `${(50 / RIGHT_CLOUDS.length) * (i - 0.8)}vh`,
                transition: "right 2s", right: show ? 0 : "-100vw"
            }} />
        })}
    </div>
}

export default LoadCloud