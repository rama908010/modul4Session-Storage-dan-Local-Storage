import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card col-4">
                <img src={this.props.cover} className="card-img-top" alt={this.props.judul} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.judul}</h5>
                    <p className="card-text">Penulis: {this.props.penulis}</p>
                    <p className="card-text">Penerbit: {this.props.penerbit}</p>
                    <p className="card-text">Harga: Rp {this.props.harga}</p>
                    <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>Hapus</button>
                    <button className="btn btn-sm btn-success m-1" onClick={this.props.onCart}>Tambahkan ke keranjang belanja</button>
                </div>
            </div>
        );
    }
}

export default Card;
