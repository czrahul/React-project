let image = "https://images.pexels.com/photos/8602985/pexels-photo-8602985.jpeg"
export const userColumns = [
    {field: "Name", headerName: "Name", width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt=" " />
                    {params.row.Name}
                </div>
            )
        }
    },
    {
        field: "Bio", headerName: "Bio", width: 230
    },
    {
        field: "Coin", headerName: "Coin", width: 200
    },
    {
        field: "Country", headerName: "Country", width: 230
    },
    {
        field: "RedeemAmount", headerName: "Redeem Amount", width: 200
    }

]

export const userRows = [
    { id: 1, img: {image}, Name: 'Mark', Bio: 'Mark', Coin: 100, Country: 'USA', RedeemAmount: 1000 },
    { id: 2, img: {image}, Name: 'Mark', Bio: 'Mark', Coin: 100, Country: 'USA', RedeemAmount: 1000 },
    { id: 3, img: {image}, Name: 'Mark', Bio: 'Mark', Coin: 100, Country: 'USA', RedeemAmount: 1000 },
    { id: 4, img: {image}, Name: 'Mark', Bio: 'Mark', Coin: 100, Country: 'USA', RedeemAmount: 1000 }
]