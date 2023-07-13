
export default function Product({id, img, title, subTitle, price}) {
    return (
        <div className="product-item" key={id}>
            <div className="product-header">
                <img src={img} alt="product" className="img-fluid" />
            </div>
            <div className="product-card p-2">
                <p className="product-title m-0"> {title} </p>
                <p className="product-sub-title"> {subTitle} </p>
                <span className="product-price fw-bold"> ${price} </span>
            </div>
        </div>
    )
}