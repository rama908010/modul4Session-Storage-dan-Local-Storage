import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Card from "./components/Card";

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            keyword: "",
            items: [
                // contoh item
                { judul: "Buku A", penulis: "Penulis A", penerbit: "Penerbit A", harga: 10000, cover: "", isbn: "12345" },
                { judul: "Buku B", penulis: "Penulis B", penerbit: "Penerbit B", harga: 15000, cover: "", isbn: "67890" }
            ]
        };
    }

    setUser = () => {
        if(sessionStorage.getItem("user") === null){
            let prompt = window.prompt("Masukkan Nama Anda","");
            if(prompt === null || prompt === ""){
                this.setUser();
            } else {
                sessionStorage.setItem("user", prompt);
                this.setState({user: prompt});
            }
        } else {
            let name = sessionStorage.getItem("user");
            this.setState({user: name});
        }
    }

    componentDidMount() {
        this.setUser();
    }

    addToCart = (selectedItem) => {
        let tempCart = [];
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"));
        }
        let existItem = tempCart.find(item => item.isbn === selectedItem.isbn);
        if(existItem){
            window.alert("Anda telah memilih item ini");
        } else {
            let promptJumlah = window.prompt("Masukkan jumlah item yang beli","");
            if(promptJumlah !== null && promptJumlah !== ""){
                selectedItem.jumlahBeli = promptJumlah;
                tempCart.push(selectedItem);
                localStorage.setItem("cart", JSON.stringify(tempCart));
            }
        }
    }

    render() {
        return (
            <div className="container">
                <h4 className="text-info my-2">Nama Pengguna: {this.state.user}</h4>
                <input type="text" className="form-control my-2" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({keyword: ev.target.value})}
                />
                <div className="row">
                    {this.state.items.filter(item =>
                        item.judul.toLowerCase().includes(this.state.keyword.toLowerCase())
                    ).map((item, index) => (
                        <Card key={index}
                              judul={item.judul}
                              penulis={item.penulis}
                              penerbit={item.penerbit}
                              harga={item.harga}
                              cover={item.cover}
                              onCart={() => this.addToCart(item)}
                        />
                    ))}
                </div>
                <Link to="/cart" className="btn btn-primary mt-3">
                    Go to Cart
                </Link>
            </div>
        );
    }
}

export default Gallery;
