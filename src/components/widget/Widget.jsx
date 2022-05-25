import "./Widget.css"
import GroupIcon from '@mui/icons-material/Group';

const Widget = ({type}) => {
    let data;
    switch (type) {
        case "HostCount":
            data = {
                title: "Total Host Count",
                counter: "0",
                icon: <GroupIcon className="icon" />
            };
        break;
        case "MonthlyEarning":
            data = {
                title: "Monthly Earning Count",
                counter: "0",
                icon: <GroupIcon className="icon" />
            };
        break;
        case "OverallEarning":
            data = {
                title: "Over all Earning Count",
                counter: "0",
                icon: <GroupIcon className="icon" />
            };
        break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="counter">{data.counter}</span>
                <span className="title">{data.title}</span>
            </div>
            <div className="right">
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;