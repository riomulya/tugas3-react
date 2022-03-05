import React, { Component } from "react";

class MenuTentangKami extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tentang:
        "Warung Nusantara Adalah Restoran yang Bernuansa Makanan Nusantara Kami Ada Untuk Membuat Anda Menikmati Makanan Khas dari Nusantara",
    };
  }
  render() {
    return (
      <div>
        <center>
          <p>Tentang Kami</p>
          {this.state.Tentang}
        </center>
      </div>
    );
  }
}

export default MenuTentangKami;
