import { convertURL } from '../tools/tools.js';

function ItemImg(props) {

    let urlBase = "https://chgames.s3.eu-west-3.amazonaws.com"
    let imgCoverRoute = `${urlBase}/covers/${convertURL(props.item.platform_name)}/${convertURL(props.item.name)}.jpg`

    return (
        <div className="item_info_img">
            <img src={imgCoverRoute} alt={props.item.name} />
        </div>
    )
}

export default ItemImg